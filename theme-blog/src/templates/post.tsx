import React from 'react';
import { graphql } from 'gatsby';

import { ExtendedPostPageQuery } from '../../lib/graphql';

import Layout, { Content, Sidebar, Title } from '../components/layout';
import BlogPost from '../components/blog-post';
import BlogPostSidebar from '../components/blog-post-sidebar';
import BlogPostHeader from '../components/blog-post-header';

interface Props {
  data: ExtendedPostPageQuery.Query;
}

const Post: React.FunctionComponent<Props> = ({
  data: { blogPost, previous, next },
}) => {
  return (
    <Layout title={blogPost!.title}>
      <Title>
        <BlogPostHeader
          headerElement={'h2'}
          title={blogPost!.title}
          date={{
            month: blogPost!.month,
            day: blogPost!.day,
            year: blogPost!.year,
          }}
          slug={blogPost!.slug}
        />
      </Title>
      <Content>
        <BlogPost isPermalinkPage {...blogPost!} />
      </Content>

      <Sidebar>
        <BlogPostSidebar post={blogPost!} previous={previous} next={next} />
      </Sidebar>
    </Layout>
  );
};

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
      date(formatString: "MMMM D, YYYY")
      day: date(formatString: "D")
      month: date(formatString: "MMMM")
      year: date(formatString: "YYYY")
    }

    previous: blogPost(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM D, YYYY")
    }

    next: blogPost(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM D, YYYY")
    }
  }
`;
