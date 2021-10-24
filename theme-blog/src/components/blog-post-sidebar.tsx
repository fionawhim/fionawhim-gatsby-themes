/** @jsx jsx */

import React from 'react';
import { jsx, Themed } from 'theme-ui';

import { ExtendedPostPageQuery } from '../../lib/graphql';
import BlogPostListItem from './blog-post-list-item';

type Props = {
  post: NonNullable<ExtendedPostPageQuery['blogPost']>;
  previous: ExtendedPostPageQuery['previous'];
  next: ExtendedPostPageQuery['next'];
};

const BlogPostSidebar: React.FunctionComponent<Props> = ({
  post,
  previous,
  next,
}) => (
  <React.Fragment>
    <Themed.h2 as="h3">Navigation</Themed.h2>

    <ul>
      {next && <BlogPostListItem post={next} bullet=">" />}
      <BlogPostListItem post={post} onOwnPage bullet="<" />
      {previous && <BlogPostListItem post={previous} bullet=">" />}
    </ul>

    <Themed.hr />

    <Themed.h2 as="h3">Subscribe</Themed.h2>

    <Themed.p>
      Don’t rely on a serendipitous web search to bring you back here! Subscribe
      to the <a href="/rss.xml">RSS feed</a> of these blog posts.
    </Themed.p>

    <Themed.p>
      If you’re looking for a place to start, try{' '}
      <a href="https://feedbin.com/">Feedbin</a>! It works great in the browser,
      and for syncing other apps. I use{' '}
      <a href="https://ranchero.com/netnewswire/">NetNewsWire</a> on OS X and{' '}
      <a href="https://reederapp.com/">Reeder</a> on iOS.
    </Themed.p>

    {/* TODO(fiona): archives link */}
  </React.Fragment>
);

export default BlogPostSidebar;
