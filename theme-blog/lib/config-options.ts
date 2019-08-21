export interface ConfigOptions {
  blogContentPath?: string;
  blogPostPath?: string;

  projectsContentPath?: string;
  projectsPath?: string;
}

export const DEFAULT_CONFIG_OPTIONS: Required<ConfigOptions> = {
  blogContentPath: 'content/posts',
  blogPostPath: '/blog',

  projectsContentPath: 'content/projects',
  projectsPath: '/projects',
};
