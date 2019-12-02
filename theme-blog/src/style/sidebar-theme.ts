import { TEXT_LARGE, COLORS } from './site-theme';

export default {
  styles: {
    root: {
      backgroundColor: ['#f5f5f5', 'transparent'],
      m: [-2, 0],
      mt: [2, 0],
      p: [2, 0],
      pt: [1, 0],
    },

    hr: {
      border: 'none',
      borderTop: `2px solid ${COLORS.primary}`,
      mt: [2, 2],
      marginLeft: 2,
      marginRight: 2,
    },

    h2: {
      'aside &': {
        ...TEXT_LARGE,
        color: 'black',

        '&:nth-of-type(1)::after': {
          content: '"/"',
        },

        '&:nth-of-type(2)::before': {
          content: '"…"',
        },
      },
    },
  },
};
