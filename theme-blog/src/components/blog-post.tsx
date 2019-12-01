/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { ExtendedPostPageQuery } from '../../lib/graphql';
import BlogPostHeader from './blog-post-header';
import CommentForm from './comment-form';
import Comment from './comment';

type Props = {
  body: string;
  slug: string;
  title: string;
  day: string;
  month: string;
  year: string;
} & (
  | {
      isPermalinkPage?: false;
    }
  | {
      isPermalinkPage: true;
      comments: ExtendedPostPageQuery.Comments['nodes'];
    });

const BlogPost: React.FunctionComponent<Props> = ({
  body,
  title,
  slug,
  day,
  month,
  year,
  ...post
}) => {
  return (
    <article
      sx={{
        mt: 2,
        ':first-of-type': {
          mt: 0,
        },
      }}
    >
      {!post.isPermalinkPage && (
        <BlogPostHeader
          headerElement="h3"
          title={title}
          date={{ month, day, year }}
          slug={slug}
        />
      )}
      <MDXRenderer>{body}</MDXRenderer>

      {post.isPermalinkPage && (
        <React.Fragment>
          <div sx={{ mt: 2 }} id="comments">
            <Styled.h3>Comments</Styled.h3>

            {post.comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))}

            <CommentForm path={slug} />
          </div>
        </React.Fragment>
      )}
    </article>
  );
};

export default BlogPost;

{
  /* {project && (
        <div
          sx={{
            fontSize: 0,
            lineHeight: 0,
            mt: -3,
            mb: 3,
            fontStyle: 'italic',
            display: 'none',
          }}
        >
          Filed under: <Link to={project.slug!}>{project.title!}</Link>
        </div>
      )} */
}
