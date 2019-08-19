import React from 'react';
import { graphql, PageRendererProps } from 'gatsby';
import { ExtendedPostsQuery } from '../../lib/graphql';

interface Props extends PageRendererProps {
  data: ExtendedPostsQuery.Query;
}

export default (props: Props) => (
  <pre>{JSON.stringify(props.data, null, 2)}</pre>
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
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          body
          slug
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;
