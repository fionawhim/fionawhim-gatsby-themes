import { BASELINE } from '../gatsby-plugin-theme-ui';

const contentStyle = {
  '& + &': {
    marginTop: 3 * BASELINE,
  },

  '.gatsby-resp-image-wrapper': {
    borderStyle: 'solid',
    borderColor: 'text',
    borderWidth: 3,
    my: 2,
  },

  '* + h4': {
    marginTop: BASELINE * 1.5,
  },

  'h4 + *': {
    marginTop: BASELINE * 0.5,
  },
};

export default contentStyle;
