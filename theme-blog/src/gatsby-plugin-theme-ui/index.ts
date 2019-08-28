export const BASELINE = 24;

// COLORS: #F4BDE1,#EA48B1,#EB0099,#BC007B,#72004A,#B9E2ED,#49BBDB,#07AEDE,#027798,#01485C,#1C0365

export default {
  space: [0, BASELINE, BASELINE * 2, BASELINE * 3],
  colors: {
    primary: '#BC007B',
    text: '#1C0365',
    secondary: '#fff',
    background: '#f0f9fb',
    banner: '#BC007B',
    muted: '#027798',
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    monospace: 'Menlo, monospace',
    body: 'Georgia, serif',
  },
  text: {
    mega: {
      fontSize: [45, 64, 90],
      lineHeight: [1.06666, 1.125, 1.066666],
    },
    huge: {
      fontSize: [32, 45],
      lineHeight: [1.5, 1.06666],
    },
    xlarge: {
      fontSize: [23, 32],
      lineHeight: [1.0434, 1.25],
      padding: [0, '0 4'],
    },
    large: {
      fontSize: [16, 23],
      lineHeight: [1.5, 1.0434],
      marginBottom: 1,
    },
  },
  containers: {
    section: {
      maxWidth: '700px',
    },
    content: {
      // width: ['90%', '85%'],
    },
  },
  breakpoints: ['576px', '768px'],
  styles: {
    root: {
      fontFamily: 'body',
      fontSize: 16,
      lineHeight: 1.5,
    },
    h1: {
      fontFamily: 'heading',
      variant: 'text.mega',
    },
    h2: {
      fontFamily: 'heading',
      variant: 'text.huge',
      color: 'muted',
      // borderBottom: '4px dashed',
      borderColor: 'muted',
      marginBottom: BASELINE * 2,
    },
    h3: {
      fontFamily: 'heading',
      variant: 'text.xlarge',
      marginBottom: 0,

      a: {
        color: 'primary',
      },
    },
    h4: {
      fontFamily: 'heading',
      variant: 'text.large',
    },
    li: {
      marginBottom: BASELINE * 0.25,
    },
  },
};
