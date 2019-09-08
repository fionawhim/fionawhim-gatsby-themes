import { TEXT_LARGE } from './site-theme';

export default {
  styles: {
    root: {},
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
