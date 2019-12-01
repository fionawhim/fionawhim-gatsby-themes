import {
  CreatePageArgs,
  CreatePagesArgs,
  CreateNodeArgs,
  NodePluginArgs,
  SourceNodesArgs,
} from 'gatsby';
import { createFilePath, FileSystemNode } from 'gatsby-source-filesystem';
import { urlResolve } from 'gatsby-core-utils';
import * as firebase from 'firebase-admin';

import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import mkdirp from 'mkdirp';
import gql from 'fake-tag';

import { CreateProjectPagesQuery } from './graphql';

import { ConfigOptions, DEFAULT_CONFIG_OPTIONS } from './config-options';

const ProjectTemplate = require.resolve(`../src/templates/project-query.tsx`);

let createNodeId: (str: string) => string = null as any;

type PostComment = {
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  email: string;
  inReplyTo: string;
  ip: string;
  body: string;
  name: string;
  path: string;
  url: string;
};

exports.onPreBootstrap = (args: NodePluginArgs, options: ConfigOptions) => {
  if (options.firebaseConfig) {
    const config = {
      ...options.firebaseConfig,
    };

    if (options.firebaseKeyPath) {
      const serviceAccountKey = require(options.firebaseKeyPath);
      config.credential = firebase.credential.cert(serviceAccountKey);
    }

    firebase.initializeApp(config);
  }

  const { program } = args.store.getState();

  createNodeId = args.createNodeId as any;

  const dirs = [
    options.projectsContentPath || DEFAULT_CONFIG_OPTIONS.projectsContentPath,
  ];

  dirs.forEach(p => {
    const dir = path.join(program.directory, p);

    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};

exports.sourceNodes = async ({ actions }: SourceNodesArgs) => {
  const { createNode, createTypes } = actions;

  const typeDefs = `
    type PostComment implements Node @dontinfer {
      name: String!
      body: String!
      createdAt: Date! @dateformat

      gravatarHash: String!
      post: MdxBlogPost! @link(by: "slug", from: "path")
    }
  `;

  createTypes(typeDefs);

  const db = firebase.firestore();
  const comments = await db
    .collection('comments')
    .where('isTrashed', '==', false)
    .get();

  comments.forEach(doc => {
    const comment: PostComment = doc.data() as any;

    createNode({
      ...comment,
      id: `PostComment-${doc.id}`,
      createdAt: new Date(comment.createdAt.seconds * 1000),

      gravatarHash: crypto
        .createHash('md5')
        .update(comment.email.trim().toLowerCase())
        .digest('hex'),

      internal: {
        mediaType: 'application/json',
        type: 'PostComment',
        // Comments can’t change
        contentDigest: doc.id,
        description: 'Comment from the Firestore',
      },
    });
  });
};

exports.createPages = async (
  { actions, graphql, reporter }: CreatePagesArgs,
  options: ConfigOptions
) => {
  const { createPage } = actions;

  const {
    projectsContentPath = DEFAULT_CONFIG_OPTIONS.projectsContentPath,
  } = options;

  const result = await graphql<CreateProjectPagesQuery.Query>(gql`
    query CreateProjectPagesQuery {
      allFile(filter: {
        sourceInstanceName: { eq: "${projectsContentPath}" } ,
        extension: {in: ["md", "mdx"]}
      }) {
        nodes {
          childMdx {
            fields {
              projectId
              slug
            }

            frontmatter {
              sidebar
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    // OH NO
    reporter.panic('Error loading project mdx files', result.errors);
  }

  result.data!.allFile.nodes.forEach(node => {
    const projectId = node.childMdx!.fields!.projectId!;
    const slug = node.childMdx!.fields!.slug!;

    const context = {
      slug,
      projectId,
      sidebarSlugs: node.childMdx!.frontmatter!.sidebar || [],
    };

    createPage({
      path: slug,
      component: ProjectTemplate,
      context,
    });
  });
};

exports.onCreateNode = async (args: CreateNodeArgs, options: ConfigOptions) => {
  const { node } = args;

  switch (node.internal.type) {
    case 'Mdx':
      transformMdxNode(args, options);
      break;
    case 'MdxBlogPost':
      transformMdxBlogPostNode(args);
      break;
  }
};

function transformMdxNode(
  { node, getNode, actions }: CreateNodeArgs,
  options: ConfigOptions
) {
  const { createNodeField, createNode, createParentChildLink } = actions;

  const {
    projectsPath = DEFAULT_CONFIG_OPTIONS.projectsPath,
    projectsContentPath = DEFAULT_CONFIG_OPTIONS.projectsContentPath,
    sidebarContentPath = DEFAULT_CONFIG_OPTIONS.sidebarContentPath,
  } = options;

  // Create source field (according to contentPath)
  const fileNode: FileSystemNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  if (source === projectsContentPath) {
    const filePath = createFilePath({
      node: fileNode,
      getNode,
      basePath: projectsContentPath,
    });

    const title = (node as any).frontmatter.title;
    const slug = urlResolve(projectsPath, filePath);
    const projectId = path.basename(slug);

    // TODO(fiona): Could these be removed??
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    createNodeField({
      node,
      name: 'projectId',
      value: projectId,
    });

    const childId = createNodeId(`Project${projectId}`);

    createNode({
      id: childId,
      parent: node.id,
      projectId,
      slug,
      title,
      internal: {
        type: 'Project',
        contentDigest: node.internal.contentDigest,
      },
    });

    createParentChildLink({ parent: node, child: getNode(childId) });
  } else if (source === sidebarContentPath) {
    const title = (node as any).frontmatter.title;
    const slug = fileNode.name;

    const childId = createNodeId(`Sidebar${slug}`);

    createNode({
      id: childId,
      parent: node.id,
      slug,
      title,
      internal: {
        type: 'Sidebar',
        contentDigest: node.internal.contentDigest,
      },
    });

    createParentChildLink({ parent: node, child: getNode(childId) });
  }
}

function transformMdxBlogPostNode(_args: CreateNodeArgs) {}

exports.onCreatePage = ({ page, actions }: CreatePageArgs, options) => {
  const { createPage, deletePage } = actions;

  // We have our own index page that uses the LatestBlogPosts component so we
  // don’t need the built-in query.
  if (
    page.component ===
    require.resolve('gatsby-theme-blog-core/src/templates/posts-query')
  ) {
    deletePage(page as any);
  }

  const ext = path.extname((page as any).component);
  const frontmatter = (page.context as any).frontmatter;

  // Moves pages to the path defined in their frontmatter
  if (
    ext === '.mdx' &&
    frontmatter &&
    frontmatter.path &&
    page.path !== frontmatter.path
  ) {
    deletePage(page as any);
    createPage({
      ...(page as any),
      path: frontmatter.path,
    });
  }
};
