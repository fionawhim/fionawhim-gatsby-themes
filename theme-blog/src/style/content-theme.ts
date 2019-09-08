export default {
  styles: {
    root: {
      '.gatsby-resp-image-wrapper': {
        border: '3px solid',
        borderColor: 'text',
        my: 1,
      },
    },
    h2: {
      '&::before': {
        content: '"&"',
      },
    },

    img: {},
  },
};
