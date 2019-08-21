export interface ConfigOptions {
  blogContentPath?: string;
  blogPostPath?: string;

  projectsContentPath?: string;
  projectsPath?: string;

  basePath?: string;
}

export const DEFAULT_CONFIG_OPTIONS: Required<ConfigOptions> = {
  blogContentPath: 'assets/posts',
  blogPostPath: '/blog',

  projectsContentPath: 'content/projects',
  projectsPath: '/projects',

  basePath: '/',
};
