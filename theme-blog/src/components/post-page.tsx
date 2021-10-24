/** @jsx jsx */

import React from 'react';
import { jsx } from 'theme-ui';

import { ExtendedPostPageQuery, Mdx } from '../../lib/graphql';

import Layout, { Content, Sidebar, Title } from './layout';
import BlogPost from './blog-post';
import BlogPostSidebar from './blog-post-sidebar';
import BlogPostHeader from './blog-post-header';

interface Props {
  data: ExtendedPostPageQuery;
}

const PostPage: React.FunctionComponent<Props> = ({
  data: { blogPost, comments, previous, next },
}) => {
  return (
    <Layout
      title={blogPost!.title}
      description={
        (blogPost!.parent! as Mdx).frontmatter!.description || blogPost!.excerpt
      }
      featuredImage={(blogPost!.parent! as Mdx).frontmatter!.featured_image}
    >
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
        <BlogPost
          isPermalinkPage
          {...blogPost!}
          comments={comments.nodes}
          commentsStatus={blogPost!.fields!.commentsStatus as any}
        />
      </Content>

      <Sidebar>
        <BlogPostSidebar post={blogPost!} previous={previous} next={next} />
      </Sidebar>
    </Layout>
  );
};

export default PostPage;
