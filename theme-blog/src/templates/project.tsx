/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import { graphql, PageRendererProps, Link } from 'gatsby';
import { ProjectPageQuery } from '../../lib/graphql';

import Layout from '../components/layout';
import ProjectBody from '../components/project-body';

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
      <ProjectBody
        title={data.mdx!.frontmatter!.title}
        slug={pathContext.slug}
        body={data.mdx!.body}
      />

      {data.relatedPosts.nodes.length !== 0 && (
        <React.Fragment>
          <Styled.h3>Related Posts</Styled.h3>
          <ul>
            {data.relatedPosts.nodes.map(
              ({ childMdxBlogPost }) =>
                childMdxBlogPost && (
                  <li key={childMdxBlogPost.slug}>
                    <Styled.h4 sx={{ mb: 1 }}>
                      <Link to={childMdxBlogPost.slug}>
                        {childMdxBlogPost.title}
                      </Link>
                    </Styled.h4>

                    <Styled.p css={{ marginTop: 0 }}>
                      {childMdxBlogPost.excerpt}
                    </Styled.p>
                  </li>
                )
            )}
          </ul>
        </React.Fragment>
      )}
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
          date
          excerpt
          slug
          title
        }
      }
    }
  }
`;
