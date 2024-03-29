import path from 'path';
import gql from 'fake-tag';

import { ConfigOptions, DEFAULT_CONFIG_OPTIONS } from './config-options';
import { FeedPostsQueryQuery, FeedSiteQueryQuery, Mdx } from './graphql';

const FEED_SITE_QUERY = gql`
  query FeedSiteQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        site_url: siteUrl
      }
    }
  }
`;

const FEED_POSTS_QUERY = gql`
  query FeedPostsQuery {
    allBlogPost(sort: { order: DESC, fields: date }) {
      nodes {
        excerpt
        date
        title
        slug
        ... on MdxBlogPost {
          id
          body
          parent {
            ... on Mdx {
              id
              html
            }
          }
        }
      }
    }
  }
`;

export default (options: ConfigOptions) => {
  return {
    plugins: [
      'gatsby-plugin-typescript',
      'gatsby-plugin-twitter',
      'gatsby-plugin-emotion',
      'gatsby-plugin-theme-ui',
      'gatsby-plugin-react-helmet',
      'gatsby-remark-images',
      'gatsby-plugin-sharp',
      'gatsby-plugin-sitemap',
      {
        resolve: require.resolve('gatsby-plugin-extract-schema'),
        options: {
          dest: path.resolve(__dirname, '..', 'schema.graphql'),
        },
      },
      {
        resolve: 'gatsby-plugin-google-fonts',
        options: {
          fonts: ['poppins:400,400i,700,700i'],
        },
      },
      {
        resolve: 'gatsby-plugin-feed',
        options: {
          query: FEED_SITE_QUERY,
          feeds: [
            {
              serialize: ({
                query: { site, allBlogPost },
              }: {
                query: FeedPostsQueryQuery & FeedSiteQueryQuery;
              }) => {
                return allBlogPost.nodes.map((node) => ({
                  description: node.excerpt,
                  title: node.title,
                  date: node.date,
                  url: site!.siteMetadata!.siteUrl + node.slug,
                  guid: site!.siteMetadata!.siteUrl + node.slug,
                  custom_elements: [
                    { 'content:encoded': (node.parent! as Mdx).html },
                  ],
                }));
              },
              query: FEED_POSTS_QUERY,
              output: options.feedPath || DEFAULT_CONFIG_OPTIONS.feedPath,
              title: options.feedName || DEFAULT_CONFIG_OPTIONS.feedName,
              // This regexp won’t ever match. https://stackoverflow.com/a/2302992/51835
              match: options.feedUrl ? '/^\b$/' : undefined,
            },
          ],
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name:
            options.projectsContentPath ??
            DEFAULT_CONFIG_OPTIONS.projectsContentPath,
          path:
            options.projectsContentPath ??
            DEFAULT_CONFIG_OPTIONS.projectsContentPath,
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name:
            options.sidebarContentPath ??
            DEFAULT_CONFIG_OPTIONS.sidebarContentPath,
          path:
            options.sidebarContentPath ??
            DEFAULT_CONFIG_OPTIONS.sidebarContentPath,
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: 'src/pages',
        },
      },
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: ['.mdx', '.md'],
          defaultLayouts: {
            pages: require.resolve('../src/components/layout.tsx'),
          },
          gatsbyRemarkPlugins: [
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 960,
                linkImagesToOriginal: false,
                showCaptions: ['title'],
                // https://github.com/gatsbyjs/gatsby/issues/25137
                // markdownCaptions: true,
              },
            },
            { resolve: 'gatsby-remark-copy-linked-files' },
            { resolve: 'gatsby-remark-smartypants' },
            { resolve: 'gatsby-remark-responsive-iframe' },
            {
              resolve: 'gatsby-remark-prismjs',
              options: {
                inlineCodeMarker: '›',
              },
            },
          ],
          // remarkPlugins: ['remark-slug'],
        },
      },
      {
        resolve: 'gatsby-theme-blog-core',
        options: {
          mdxOtherwiseConfigured: true,
          contentPath: options.blogContentPath,
          basePath: options.blogPostPath || DEFAULT_CONFIG_OPTIONS.blogPostPath,
        },
      },
    ],
  };
};
