module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: '2019',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:prettier/recommended'],
};
