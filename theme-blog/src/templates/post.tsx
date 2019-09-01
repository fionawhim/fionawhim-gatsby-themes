import React from 'react';
import { graphql } from 'gatsby';

import { ExtendedPostPageQuery } from '../../lib/graphql';

import Layout from '../components/layout';
import BlogPost from '../components/blog-post';

interface Props {
  data: ExtendedPostPageQuery.Query;
}

const Post: React.FunctionComponent<Props> = ({ data }) => (
  <Layout title={data.blogPost!.title}>
    <BlogPost {...data.blogPost!} />
  </Layout>
);

export default Post;

export const query = graphql`
  query ExtendedPostPageQuery(
    $id: String!
    $previousId: String
    $nextId: String
  ) {
    blogPost(id: { eq: $id }) {
      id
      excerpt
      body
      slug
      title
      tags
      keywords
      day: date(formatString: "DD")
      month: date(formatString: "MMMM")
      year: date(formatString: "YYYY")
    }

    previous: blogPost(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }

    next: blogPost(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;
