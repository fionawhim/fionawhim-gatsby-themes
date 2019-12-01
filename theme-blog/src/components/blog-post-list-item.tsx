/** @jsx jsx */

import React from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

import { HOVER_A_UNDERLINES } from '../style/util';

const BlogPostListItem: React.FunctionComponent<{
  post: {
    title: string;
    slug: string;
    date: string;
    excerpt: string;
  };
  onOwnPage?: boolean;
  bullet?: string;
}> = ({ post, onOwnPage: isCurrent, bullet }) => (
  <React.Fragment>
    <li
      sx={{
        ...HOVER_A_UNDERLINES,
        mt: ({ baseline }) => [baseline * 0.5],
        position: 'relative',
        fontFamily: 'heading',
        fontWeight: isCurrent ? 'bold' : 'normal',

        '::before': bullet
          ? {
              content: `"${bullet}\u00A0"`,
              position: 'absolute',
              right: '100%',
            }
          : {},
      }}
    >
      <Link to={post.slug}>{post.title}</Link>
      {
        <span
          sx={{
            fontFamily: 'heading',
            fontWeight: 'normal',
            whiteSpace: 'nowrap',
          }}
        >
          {' '}
          • {post.date}
        </span>
      }
    </li>
  </React.Fragment>
);

export default BlogPostListItem;
