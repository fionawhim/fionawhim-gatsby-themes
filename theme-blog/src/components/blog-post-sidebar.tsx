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

    <Styled.h2 as="h3">Subscribe</Styled.h2>

    <Styled.p>
      Don’t rely on a serendipitous web search to bring you back here! Subscribe
      to the <a href="/rss.xml">RSS feed</a> of these blog posts.
    </Styled.p>

    <Styled.p>
      If you’re looking for a place to start, try{' '}
      <a href="https://feedbin.com/">Feedbin</a>! It works great in the browser,
      and for syncing other apps. I use{' '}
      <a href="https://ranchero.com/netnewswire/">NetNewsWire</a> on OS X and{' '}
      <a href="https://reederapp.com/">Reeder</a> on iOS.
    </Styled.p>

    {/* TODO(fiona): archives link */}
  </React.Fragment>
);

export default BlogPostSidebar;
