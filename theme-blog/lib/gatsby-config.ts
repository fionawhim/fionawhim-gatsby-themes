import path from 'path';
import gql from 'fake-tag';

import { ConfigOptions, DEFAULT_CONFIG_OPTIONS } from './config-options';
import { FeedPostsQuery, FeedSiteQuery } from './graphql';

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
      }
    }
  }
`;

export = (options: ConfigOptions) => ({
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: require.resolve('gatsby-plugin-extract-schema'),
      options: {
        dest: path.resolve(__dirname, '..', 'schema.json'),
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['poppins:400,400i,900,900i,700,700i'],
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
              query: FeedPostsQuery.Query & FeedSiteQuery.Query;
            }) => {
              return allBlogPost.nodes.map(node => ({
                description: node.excerpt,
                date: node.date,
                url: site!.siteMetadata!.siteUrl + node.slug,
                guid: site!.siteMetadata!.siteUrl + node.slug,
                // custom_elements: [{ 'content:encoded': node.html }],
              }));
            },
            query: FEED_POSTS_QUERY,
            output: '/rss.xml',
            title: 'fionawh.im',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name:
          options.projectsContentPath ||
          DEFAULT_CONFIG_OPTIONS.projectsContentPath,
        path:
          options.projectsContentPath ||
          DEFAULT_CONFIG_OPTIONS.projectsContentPath,
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
      resolve: 'gatsby-theme-blog-core',
      options: {
        contentPath: options.blogContentPath,
        basePath: options.blogPostPath || DEFAULT_CONFIG_OPTIONS.blogPostPath,
      },
    },
  ],
});
