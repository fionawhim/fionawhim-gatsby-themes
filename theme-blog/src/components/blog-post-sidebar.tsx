/** @jsx jsx */

import React from 'react';
import { jsx, Styled } from 'theme-ui';
import { Link } from 'gatsby';

import { ExtendedPostPageQuery, Maybe } from '../../lib/graphql';
import { HOVER_A_UNDERLINES } from '../style/util';

type Props = {
  post: ExtendedPostPageQuery.BlogPost;
  previous: Maybe<ExtendedPostPageQuery.Previous>;
  next: Maybe<ExtendedPostPageQuery.Next>;
};

const PostNavigationElement: React.FunctionComponent<{
  post:
    | ExtendedPostPageQuery.BlogPost
    | ExtendedPostPageQuery.Previous
    | ExtendedPostPageQuery.Next;
  isCurrent?: boolean;
  bullet?: string;
}> = ({ post, isCurrent, bullet }) => (
  <React.Fragment>
    <dt
      sx={{
        ...HOVER_A_UNDERLINES,
        mt: 1,
        position: 'relative',
        fontFamily: 'heading',
        fontWeight: isCurrent ? 'bold' : 'normal',

        '::before': bullet
          ? {
              content: `"${bullet} "`,
              position: 'absolute',
              left: '-1em',
            }
          : {},
      }}
    >
      {isCurrent ? post.title : <Link to={post.slug}>{post.title}</Link>}
    </dt>

    <dd>
      <div sx={{ fontFamily: 'heading' }}>{post.date}</div>
      {!isCurrent && <p>{post.excerpt}</p>}
    </dd>
  </React.Fragment>
);

const BlogPostSidebar: React.FunctionComponent<Props> = ({
  post,
  previous,
  next,
}) => (
  <div sx={{ mt: 4 }}>
    <Styled.h2 as="h3">Navigation</Styled.h2>

    <dl>
      {next && <PostNavigationElement post={next} />}
      <PostNavigationElement post={post} isCurrent bullet="<" />
      {previous && <PostNavigationElement post={previous} />}
    </dl>

    {/* TODO(fiona): archives link */}
  </div>
);

export default BlogPostSidebar;
