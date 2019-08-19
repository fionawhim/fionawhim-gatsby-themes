import { CreatePageArgs } from 'gatsby';

import { ConfigOptions } from './config-options';

const PostsTemplate = require.resolve(`../src/templates/posts.tsx`);

exports.onCreatePage = (
  { page, actions }: CreatePageArgs,
  options: ConfigOptions
) => {
  const { createPage, deletePage } = actions;
  const oldPage = { ...page };

  // We can’t shadow the posts-query file from gatsby-theme-blog-core in a way
  // that lets us change its GraphQL query, so we have to modify it this way.
  if (
    page.component ===
    require.resolve('gatsby-theme-blog-core/src/templates/posts-query')
  ) {
    page.path = options.basePath || page.path;
    page.component = PostsTemplate;

    deletePage(oldPage as any);
    createPage(page as any);
  }
};
