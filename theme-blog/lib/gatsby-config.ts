import { ConfigOptions, DEFAULT_CONFIG_OPTIONS } from './config-options';

export = (options: ConfigOptions) => ({
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-theme-blog-core',
      options: {
        basePath:
          options.slugPrefix ||
          options.basePath ||
          DEFAULT_CONFIG_OPTIONS.basePath,
      },
    },
  ],
});
