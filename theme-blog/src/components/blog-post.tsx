/** @jsx jsx */

import React from 'react';
import { Themed, jsx } from 'theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { PostComment } from '../../lib/graphql';
import BlogPostHeader from './blog-post-header';
import CommentForm from './comment-form';
import Comment from './comment';
import { Link } from 'gatsby';
import { hasReadMore } from './ReadMore';

type Props = {
  body: string;
  slug: string;
  title: string;
  day: string;
  month: string;
  year: string;

  commentsStatus: 'open' | 'closed';
} & (
  | {
      isPermalinkPage?: false;
      commentsCount: number;
    }
  | {
      isPermalinkPage: true;
      comments: Pick<
        PostComment,
        'id' | 'body' | 'name' | 'createdAt' | 'gravatarHash'
      >[];
    }
);

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

      {post.isPermalinkPage &&
        (post.commentsStatus === 'open' || post.comments.length > 0) && (
          <React.Fragment>
            <div sx={{ mt: 2 }} id="comments">
              <Themed.hr />
              <Themed.h3
                sx={{
                  ':before': {
                    content: '"*"',
                  },
                }}
              >
                Comments
              </Themed.h3>

              {post.comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}

              {post.commentsStatus === 'open' && <CommentForm path={slug} />}
            </div>
          </React.Fragment>
        )}

      {!post.isPermalinkPage && (
        <div
          sx={{
            mt: 1,
            fontFamily: 'heading',
            display: 'flex',
            a: {
              textDecoration: 'none',
            },
          }}
        >
          {hasReadMore(body) && (
            <div>
              <Link to={`${slug}#read-more`} style={{ fontWeight: 'bold' }}>
                …keep reading…
              </Link>
            </div>
          )}
          <div sx={{ textAlign: 'right', flexGrow: 1 }}>
            <Link to={slug}>#permalink</Link>

            {(post.commentsStatus === 'open' || post.commentsCount > 0) && (
              <React.Fragment>
                {' . '}
                <Link to={`${slug}#comments`}>
                  {post.commentsCount === 1
                    ? '1 comment'
                    : `${post.commentsCount} comments`}
                </Link>
              </React.Fragment>
            )}
          </div>
        </div>
      )}
    </article>
  );
};

export default BlogPost;
