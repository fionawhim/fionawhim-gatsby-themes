import React from 'react';
import { graphql, PageRendererProps } from 'gatsby';
import { ExtendedPostsQuery } from '../../lib/graphql';

import Layout from '../components/layout';
import BlogPost from '../components/blog-post';

interface Props extends PageRendererProps {
  data: ExtendedPostsQuery.Query;
}

export default (props: Props) => (
  <Layout>
    {props.data.allBlogPost.nodes.map(p => (
      <BlogPost key={p.slug} {...p} />
    ))}
  </Layout>
);

export const query = graphql`
  query ExtendedPostsQuery {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 10) {
      nodes {
        id
        body
        slug
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
