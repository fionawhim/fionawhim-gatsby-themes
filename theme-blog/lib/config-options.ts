export interface ConfigOptions {
  contentPath?: string;
  basePath?: string;
  slugPrefix?: string;
}

export const DEFAULT_CONFIG_OPTIONS: Required<ConfigOptions> = {
  contentPath: 'assets/posts',
  basePath: '/',
  slugPrefix: '/blog',
};
