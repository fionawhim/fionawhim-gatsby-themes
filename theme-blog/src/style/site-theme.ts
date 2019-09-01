import { HOVER_A_UNDERLINES } from './util';

const BASELINE = 24;

const BREAKPOINTS = ['768px', '960px'];

export const MEGA_TEXT = {
  fontSize: [3, 4, 5],
  lineHeight: [3, 4, 5],
};

export const HUGE_TEXT = {
  fontSize: [2, 3],
  lineHeight: [2, 3],
};

export const EXTRA_LARGE_TEXT = {
  fontSize: [1, 2],
  lineHeight: [1, 2],
};

export const LARGE_TEXT = {
  fontSize: [0, 1],
  lineHeight: [0, 1],
};

export const NORMAL_TEXT = {
  fontSize: 0,
  lineHeight: 0,
};

export const baselineMultiple = w => theme => theme.baseline * w;

export default {
  baseline: BASELINE,

  space: [0, BASELINE, BASELINE * 2, BASELINE * 3, BASELINE * 4, BASELINE * 5],

  fontSizes: [16, 23, 32, 45, 64, 90],
  lineHeights: [1.5, 1.0434, 1.5, 1.06666, 1.125, 1.066666],

  breakpoints: BREAKPOINTS,

  mediaQueries: {
    medium: `@media screen and (min-width: ${BREAKPOINTS[0]})`,
    large: `@media screen and (min-width: ${BREAKPOINTS[1]})`,
  },

  // Full palette: #F4BDE1,#EA48B1,#EB0099,#BC007B,#72004A,#B9E2ED,#49BBDB,#07AEDE,#027798,#01485C,#1C0365

  colors: {
    primary: '#BC007B',
    secondary: '#027798',
    dark: '#72004A',
    text: '#1C0365',
    white: '#ffffff',
    black: '#000000',
    secondaryBackground: '#B9E2ED',
  },

  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Georgia, serif',
    code: 'Menlo, monospace',
  },

  styles: {
    root: {
      fontFamily: 'body',
      ...NORMAL_TEXT,

      a: {
        color: 'primary',
        '&:visited': {
          color: 'dark',
        },
      },

      // HACK(fiona): Work-around for https://github.com/gatsbyjs/gatsby/issues/15486
      '.gatsby-resp-image-image': {
        width: '100%',
        height: '100%',
        margin: 0,
        verticalAlign: 'middle',
        position: 'absolute',
        top: 0,
        left: 0,
      },
    },

    h1: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      ...MEGA_TEXT,
      ...HOVER_A_UNDERLINES,

      color: 'white',
      '::after': {
        position: 'relative',
        top: '0.125em',
        content: '"<<<"',
        color: 'text',
      },

      '& a, & a: visited': {
        color: 'inherit',
      },
    },

    h2: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      ...HUGE_TEXT,

      color: 'secondary',

      mb: 1,

      '* + &': {
        mt: 2,
      },
    },

    h3: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      ...EXTRA_LARGE_TEXT,
      ...HOVER_A_UNDERLINES,

      color: 'primary',

      a: {
        color: 'inherit',
      },

      'a:visited': {
        color: 'inherit',
      },

      '* + &': {
        mt: 2,
      },
    },

    h4: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      ...LARGE_TEXT,

      '* + &': {
        mt: baselineMultiple(1.5),
      },
    },

    p: {
      mt: baselineMultiple(0.75),
    },

    ul: {
      mt: baselineMultiple(0.75),

      px: [1, 2],
    },

    li: {
      listStyleType: 'square',
      mt: baselineMultiple(0.5),
    },

    inlineCode: {
      fontFamily: 'code',
      // Monospace fonts always feel too big
      fontSize: '85%',
    },
  },
};
