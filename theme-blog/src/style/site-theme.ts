import { HOVER_A_UNDERLINES } from './util';
import PRISM_STYLE from './prism';

const BASE_FONT = 16;
const BASE_LINE_HEIGHT = 1.5;
const BASELINE = BASE_FONT * BASE_LINE_HEIGHT;

const BREAKPOINTS = ['768px', '960px'];

// https://www.modularscale.com/?16&&1.414
const RATIO = 1.414;

const FONT_SIZES = [0, 1, 2, 3, 4, 5].map(n =>
  Math.round(BASE_FONT * RATIO ** n)
);

const LINE_HEIGHTS = FONT_SIZES.map(
  f => (Math.ceil(f / BASELINE) * BASELINE) / f
);

export const TEXT_MEGA = {
  fontSize: [3, 4, 5],
  lineHeight: [3, 4, 5],
};

export const TEXT_HUGE = {
  fontSize: [2, 3],
  lineHeight: [2, 3],
};

export const TEXT_XLARGE = {
  fontSize: [1, 2],
  lineHeight: [1, 2],
};

export const TEXT_LARGE = {
  fontSize: [0, 1],
  lineHeight: [0, 1],
};

const baselineMultiple = w => theme => theme.baseline * w;

export const COLORS = {
  primary: '#BC007B',
  secondary: '#027798',
  dark: '#72004A',
  text: '#1C0365',
  white: '#ffffff',
  black: '#000000',
  secondaryBackground: '#B9E2ED',
};

export default {
  baseline: BASELINE,
  space: [0, 1, 2, 4, 8].map(s => s * BASELINE),

  fontSizes: FONT_SIZES,
  lineHeights: LINE_HEIGHTS,

  breakpoints: BREAKPOINTS,

  mediaQueries: {
    medium: `@media screen and (min-width: ${BREAKPOINTS[0]})`,
    large: `@media screen and (min-width: ${BREAKPOINTS[1]})`,
  },

  // Full palette: #F4BDE1,#EA48B1,#EB0099,#BC007B,#72004A,#B9E2ED,#49BBDB,#07AEDE,#027798,#01485C,#1C0365

  colors: COLORS,

  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Georgia, serif',
    code: 'Menlo, monospace',
  },

  code: {},

  styles: {
    root: {
      fontFamily: 'body',
      fontSize: 0,
      lineHeight: 0,

      a: {
        color: 'primary',
        '&:visited': {
          color: 'dark',
        },
      },
    },

    h1: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      ...TEXT_MEGA,
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
      ...TEXT_HUGE,
      ...HOVER_A_UNDERLINES,
      'a, a:visited': {
        color: 'primary',
      },

      color: 'secondary',

      mb: 1,

      '* + &': {
        mt: 2,
      },
    },

    h3: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      ...TEXT_XLARGE,
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
      ...TEXT_LARGE,

      '* + &': {
        mt: baselineMultiple(1.5),
      },
    },

    h5: {
      fontFamily: 'heading',
      fontWeight: 'bold',

      '* + &': {
        mt: baselineMultiple(1.5),
      },
    },

    p: {
      mt: baselineMultiple(0.75),
    },

    strong: {
      fontWeight: 'bold',
    },

    em: {
      fontStyle: 'italic',
    },

    ul: {
      mt: baselineMultiple(0.75),

      px: [1, 2],

      li: {
        listStyleType: 'square',
      },

      'li.task-list-item': {
        listStyleType: 'none',
        position: 'relative',

        'input:first-child': {
          position: 'absolute',
          top: `${BASE_FONT - 13}px`,
          left: -BASELINE,
        },
      },
    },

    ol: {
      mt: baselineMultiple(0.75),

      px: [1, 2],

      li: {
        listStyleType: 'decimal',
      },
    },

    li: {
      mt: baselineMultiple(0.5),
    },

    pre: {
      fontFamily: 'code',
      my: 1,
      fontSize: '14px',
      lineHeight: '1.142857143 ',

      '&[class*="language-"]': {
        overflow: 'auto',

        paddingLeft: `${BASELINE / 2 - 3}px`,
        borderLeft: '3px solid',
        borderColor: 'primary',
      },
    },

    code: {
      ...PRISM_STYLE,
      fontFamily: 'code',
      // Monospace fonts always feel too big
      fontSize: '85%',
    },

    inlineCode: {
      ...PRISM_STYLE,
      fontFamily: 'code',
      // Monospace fonts always feel too big
      fontSize: '85%',
    },

    hr: {
      borderColor: 'secondary',
      borderStyle: 'solid',
      my: 1,
    },
  },
};
