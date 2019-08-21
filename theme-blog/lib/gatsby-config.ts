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
        name: 'projects',
        path: options.projectsContentPath,
      },
    },

    {
      resolve: 'gatsby-theme-blog-core',
      options: {
        contentPath: options.blogContentPath,
        basePath:
          options.blogPostPath ||
          options.basePath ||
          DEFAULT_CONFIG_OPTIONS.basePath,
      },
    },
  ],
});
