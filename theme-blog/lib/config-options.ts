export interface ConfigOptions {
  blogContentPath?: string;
  blogPostPath?: string;

  projectsContentPath?: string;
  projectsPath?: string;

  sidebarContentPath?: string | null;

  feedName?: string;
  feedPath?: string;
  feedUrl?: string | null;
}

export const DEFAULT_CONFIG_OPTIONS: Required<ConfigOptions> = {
  blogContentPath: 'content/posts',
  blogPostPath: '/blog',

  projectsContentPath: 'content/projects',
  projectsPath: '/projects',

  sidebarContentPath: null,

  feedName: 'RSS feed',
  feedPath: '/rss.xml',
  feedUrl: null,
};
