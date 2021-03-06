/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import { PageRendererProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { ProjectPageQuery } from '../../lib/graphql';

import Layout, { Content, Sidebar } from './layout';
import ProjectBody from './project-body';
import BlogPostListItem from './blog-post-list-item';

export interface Context {
  slug: string;
}

interface Props extends PageRendererProps {
  data: ProjectPageQuery.Query;
  pathContext: Context;
}

const ProjectPage: React.FunctionComponent<Props> = props => {
  const { data, pathContext } = props;

  return (
    <Layout title={data.mdx!.frontmatter!.title}>
      <Content>
        <ProjectBody
          title={data.mdx!.frontmatter!.title}
          slug={pathContext.slug}
          body={data.mdx!.body}
        />
      </Content>

      <Sidebar>
        {data.relatedPosts.nodes.length !== 0 && (
          <React.Fragment>
            <Styled.h2 as="h3">Related Posts</Styled.h2>

            <dl>
              {data.relatedPosts.nodes.map(
                ({ childMdxBlogPost }) =>
                  childMdxBlogPost && (
                    <BlogPostListItem
                      key={childMdxBlogPost.slug}
                      post={childMdxBlogPost}
                    />
                  )
              )}
            </dl>
          </React.Fragment>
        )}

        {data.allSidebar.nodes.map(sidebar => (
          <React.Fragment>
            <Styled.h2 as="h3">{sidebar.title}</Styled.h2>
            <MDXRenderer>{sidebar.parent!.body}</MDXRenderer>
          </React.Fragment>
        ))}
      </Sidebar>
    </Layout>
  );
};

export default ProjectPage;
