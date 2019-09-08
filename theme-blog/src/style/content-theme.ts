export default {
  styles: {
    root: {
      '.gatsby-resp-image-wrapper': {
        border: '3px solid',
        borderColor: 'text',
        my: 1,
      },

      '.gatsby-resp-iframe-wrapper': {
        my: 1,
      },

      '.footnotes ol': {
        pr: 0,
        pl: '1em',
      },

      'a.footnote-ref': {
        textDecoration: 'none',

        '&:hover': {
          textDecoration: 'underline',
        },
      },

      'a.footnote-backref': {
        display: 'inline-block',
        mx: '0.25em',

        verticalAlign: 'middle',
        lineHeight: 1,

        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },

      sup: {
        fontSize: '85%',
        position: 'relative',
        display: 'inline-block',
        mx: '0.125em',
        top: '-.4em',
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
