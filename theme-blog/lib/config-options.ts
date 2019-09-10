export interface ConfigOptions {
  blogContentPath?: string;
  blogPostPath?: string;

  projectsContentPath?: string;
  projectsPath?: string;

  feedName?: string;
  feedPath?: string;
  feedUrl?: string | null;
}

export const DEFAULT_CONFIG_OPTIONS: Required<ConfigOptions> = {
  blogContentPath: 'content/posts',
  blogPostPath: '/blog',

  projectsContentPath: 'content/projects',
  projectsPath: '/projects',

  feedName: 'RSS feed',
  feedPath: '/rss.xml',
  feedUrl: null,
};
