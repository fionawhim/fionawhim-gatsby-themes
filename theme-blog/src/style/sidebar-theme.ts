import { LARGE_TEXT } from './site-theme';

export default {
  styles: {
    h2: {
      'aside &': {
        ...LARGE_TEXT,
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
