import { ConfigOptions, DEFAULT_CONFIG_OPTIONS } from './config-options';

export = (options: ConfigOptions) => ({
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['poppins:400,400i,900,900i,700,700i'],
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
