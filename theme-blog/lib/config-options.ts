export interface ConfigOptions {
  blogContentPath?: string;
  blogPostPath?: string;

  projectsContentPath?: string;
  projectsPath?: string;

  sidebarContentPath?: string;

  feedName?: string;
  feedPath?: string;
  feedUrl?: string | null;

  firebaseKeyPath?: string;
  firebaseConfig?: { [key: string]: any };
}

export const DEFAULT_CONFIG_OPTIONS: Required<ConfigOptions> = {
  blogContentPath: 'content/posts',
  blogPostPath: '/blog',

  projectsContentPath: 'content/projects',
  projectsPath: '/projects',

  sidebarContentPath: 'content/sidebar',

  feedName: 'RSS feed',
  feedPath: '/rss.xml',
  feedUrl: null,

  firebaseKeyPath: '',
  firebaseConfig: {},
};
