/** @jsx jsx */

import React from 'react';
import { jsx, Styled } from 'theme-ui';
import { Link } from 'gatsby';

import { ExtendedPostPageQuery, Maybe } from '../../lib/graphql';
import { HOVER_A_UNDERLINES } from '../style/util';
import BlogPostListItem from './blog-post-list-item';

type Props = {
  post: ExtendedPostPageQuery.BlogPost;
  previous: Maybe<ExtendedPostPageQuery.Previous>;
  next: Maybe<ExtendedPostPageQuery.Next>;
};

const BlogPostSidebar: React.FunctionComponent<Props> = ({
  post,
  previous,
  next,
}) => (
  <React.Fragment>
    <Styled.h2 as="h3">Navigation</Styled.h2>

    <dl>
      {next && <BlogPostListItem post={next} />}
      <BlogPostListItem post={post} onOwnPage bullet="<" />
      {previous && <BlogPostListItem post={previous} />}
    </dl>

    {/* TODO(fiona): archives link */}
  </React.Fragment>
);

export default BlogPostSidebar;
