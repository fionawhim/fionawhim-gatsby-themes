import React from 'react';
import { graphql } from 'gatsby';

import { ExtendedPostPageQuery } from '../../lib/graphql';

import Layout, { Content, Sidebar } from '../components/layout';
import BlogPost from '../components/blog-post';
import BlogPostSidebar from '../components/blog-post-sidebar';

interface Props {
  data: ExtendedPostPageQuery.Query;
}

const Post: React.FunctionComponent<Props> = ({ data }) => (
  <Layout title={data.blogPost!.title}>
    <Content>
      <BlogPost isPermalinkPage {...data.blogPost!} />
    </Content>

    <Sidebar>
      <BlogPostSidebar
        post={data.blogPost!}
        previous={data.previous}
        next={data.next}
      />
    </Sidebar>
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
      date(formatString: "MMMM DD, YYYY")
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
