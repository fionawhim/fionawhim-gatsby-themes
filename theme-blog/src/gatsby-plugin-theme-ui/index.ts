import theme from '@theme-ui/preset-funk';

// console.log(JSON.stringify(theme, null, 2));

// COLORS: #F4BDE1,#EA48B1,#EB0099,#BC007B,#72004A,#B9E2ED,#49BBDB,#07AEDE,#027798,#01485C,#1C0365

export default {
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#BC007B',
    text: '#1C0365',
    secondary: '#fff',
    background: '#f0f9fb',
    banner: '#BC007B',
    muted: '#027798',
  },
  fonts: {
    ...theme.fonts,
    body: 'Georgia, serif',
  },
  breakpoints: ['576px', '768px', '992px', '1200px'],
};
