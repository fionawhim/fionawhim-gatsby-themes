/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import { graphql, PageRendererProps, Link } from 'gatsby';
import { ProjectPageQuery } from '../../lib/graphql';

import Layout, { Content, Sidebar } from '../components/layout';
import ProjectBody from '../components/project-body';
import BlogPostListItem from '../components/blog-post-list-item';

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
      </Sidebar>
    </Layout>
  );
};

export default ProjectPage;

export const query = graphql`
  query ProjectPageQuery($slug: String!, $projectId: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }

    relatedPosts: allMdx(
      filter: { frontmatter: { project: { eq: $projectId } } }
    ) {
      nodes {
        childMdxBlogPost {
          date(formatString: "MMMM D, YYYY")
          excerpt
          slug
          title
        }
      }
    }
  }
`;
