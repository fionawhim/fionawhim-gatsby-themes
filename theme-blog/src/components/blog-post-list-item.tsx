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

export default BlogPostListItem;
