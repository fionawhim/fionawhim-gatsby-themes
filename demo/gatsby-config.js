const path = require('path');

module.exports = {
  plugins: [
    'gatsby-theme-style-guide',
    {
      resolve: 'gatsby-plugin-extract-schema',
      options: {
        dest: path.resolve(__dirname, '..', 'demo-schema.json'),
      },
    },
    {
      resolve: '@fionawhim-site/gatsby-theme-blog',
      options: {
        contentPath: 'content/posts',
        basePath: '/',
        slugPrefix: '/blog',
      },
    },
  ],
  siteMetadata: {
    title: 'fionawhim',
    description: 'Personal blog of crafting, making, gaming, and queer shit.',
    author: 'Fiona Hopkins',
  },
};
