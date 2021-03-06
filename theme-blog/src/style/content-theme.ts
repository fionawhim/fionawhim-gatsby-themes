import { BASELINE } from './styles';

export default {
  styles: {
    root: {
      '.gatsby-resp-image-wrapper, .gatsby-video-aspect-ratio': {
        border: '3px solid',
        borderColor: 'text',
        my: 1,
      },

      '.gatsby-video-aspect-ratio': {
        marginLeft: '-3px',
        marginRight: '-3px',
      },

      '.gatsby-resp-image-figure': {
        my: 1,
        mx: '-3px',
        textAlign: 'center',

        figcaption: {
          fontStyle: 'italic',
          mt: 0.5 * BASELINE,
          mb: 1.5 * BASELINE,
        },

        '>.gatsby-resp-image-wrapper': {
          m: 0,
        },
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

    // Styles for the content region itself
    content: {
      mb: [2, 2, 0],
    },
  },
};
