import {
  CreatePageArgs,
  CreatePagesArgs,
  CreateNodeArgs,
  NodePluginArgs,
} from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import { urlResolve } from 'gatsby-core-utils';
import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';
import gql from 'fake-tag';

import { CreateProjectPagesQuery } from './graphql';

import { ConfigOptions, DEFAULT_CONFIG_OPTIONS } from './config-options';

const PostTemplate = require.resolve(`../src/templates/post.tsx`);
const PostsTemplate = require.resolve(`../src/templates/posts.tsx`);
const ProjectTemplate = require.resolve(`../src/templates/project.tsx`);

let createNodeId: (str: string) => string = null as any;

exports.onPreBootstrap = (args: NodePluginArgs, options: ConfigOptions) => {
  const { program } = args.store.getState();

  createNodeId = args.createNodeId as any;

  const projectsContentPath =
    options.projectsContentPath || DEFAULT_CONFIG_OPTIONS.projectsContentPath;

  const dir = path.join(program.directory, projectsContentPath);

  if (!fs.existsSync(dir)) {
    mkdirp.sync(dir);
  }
};

exports.createPages = async ({
  actions,
  graphql,
  reporter,
}: CreatePagesArgs) => {
  const result = await graphql<CreateProjectPagesQuery.Query>(gql`
    query CreateProjectPagesQuery {
      allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
        nodes {
          childMdx {
            fields {
              projectId
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    // OH NO
    reporter.panic('Error loading styleguide mdx files', result.errors);
  }

  result.data!.allFile.nodes.forEach(node => {
    const projectId = node.childMdx!.fields!.projectId!;
    const slug = node.childMdx!.fields!.slug!;

    const context = {
      slug,
      projectId,
    };

    actions.createPage({
      path: slug,
      component: ProjectTemplate,
      context,
    });
  });
};

exports.onCreateNode = async (
  { node, actions, getNode }: CreateNodeArgs,
  options: ConfigOptions
) => {
  const { createNodeField, createNode } = actions;

  const {
    projectsPath = DEFAULT_CONFIG_OPTIONS.projectsPath,
    projectsContentPath = DEFAULT_CONFIG_OPTIONS.projectsContentPath,
    blogContentPath = DEFAULT_CONFIG_OPTIONS.blogContentPath,
  } = options;

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return;
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  if (source === 'projects') {
    const filePath = createFilePath({
      node: fileNode,
      getNode,
      basePath: projectsContentPath,
    });

    const title = (node as any).frontmatter.title;
    const slug = urlResolve(projectsPath, filePath);
    const projectId = path.basename(slug);

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

    createNode({
      id: createNodeId(`Project${projectId}`),
      parent: node.id,
      projectId,
      slug,
      title,
      internal: {
        type: 'Project',
        contentDigest: node.internal.contentDigest,
      },
    });
  } else if (source === blogContentPath) {
    const frontmatter = (node as any).frontmatter;

    if (frontmatter.project) {
      createNodeField({
        node,
        name: 'project___NODE',
        value: createNodeId(`Project${frontmatter.project}`),
      });
    }
  }
};

exports.onCreatePage = (
  { page, actions }: CreatePageArgs,
  options: ConfigOptions
) => {
  const { createPage, deletePage } = actions;
  const oldPage = { ...page };

  // We can’t shadow the posts-query file from gatsby-theme-blog-core in a way
  // that lets us change its GraphQL query, so we have to modify it this way.
  if (
    page.component ===
    require.resolve('gatsby-theme-blog-core/src/templates/posts-query')
  ) {
    page.path = options.basePath || page.path;
    page.component = PostsTemplate;

    deletePage(oldPage as any);
    createPage(page as any);
  }

  if (
    page.component ===
    require.resolve('gatsby-theme-blog-core/src/templates/post-query')
  ) {
    page.component = PostTemplate;

    deletePage(oldPage as any);
    createPage(page as any);
  }
};
