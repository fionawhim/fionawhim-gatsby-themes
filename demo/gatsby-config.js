const path = require('path');

module.exports = {
  plugins: [
    'gatsby-theme-style-guide',
    {
      resolve: '@fionawhim-site/gatsby-theme-blog',
      options: {
        blogContentPath: 'content/posts',
        blogPostPath: '/blog',

        projectsContentPath: 'content/projects',
        projectsPath: '/projects',

        basePath: '/',
      },
    },
  ],
  siteMetadata: {
    title: 'fionawhim',
    description: 'Personal blog of crafting, making, gaming, and queer shit.',
    author: 'Fiona Hopkins',
  },
};
