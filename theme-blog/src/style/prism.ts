export default {
  '&[class*=language-]': {
    color: 'text',

    tabSize: 4,
    hyphens: 'none',

    '.namespace': {
      opacity: 0.7,
    },

    [['.token.comment', '.token.prolog', '.token.doctype', '.token.cdata'].join(
      ','
    )]: {
      color: '#93a1a1' /* base1 */,
    },

    [[
      '.token.property',
      '.token.tag',
      '.token.boolean',
      '.token.number',
      '.token.constant',
      '.token.symbol',
      '.token.deleted',
    ].join(',')]: {
      color: 'dark' /* blue */,
    },

    '.token.punctuation': {
      color: '#586e75' /* base01 */,
    },

    [[
      '.token.selector',
      '.token.attr-name',
      '.token.string',
      '.token.char',
      '.token.builtin',
      '.token.url',
      '.token.inserted',
    ].join(',')]: {
      color: 'secondary',
    },

    '.token.entity': {
      color: '#657b83' /* base00 */,
      background: '#eee8d5' /* base2 */,
      cursor: 'help',
    },

    [['.token.atrule', '.token.attr-value', '.token.keyword'].join(',')]: {
      color: '#859900' /* green */,
    },

    [['.token.function', '.token.class-name'].join(',')]: {
      color: '#b58900' /* yellow */,
    },

    [['.token.regex', '.token.important', '.token.variable'].join(',')]: {
      color: '#cb4b16' /* orange */,
    },

    [['.token.important', '.token.bold'].join(',')]: {
      fontWeight: 'bold',
    },

    '.token.italic': {
      fontStyle: 'italic',
    },
  },
};
