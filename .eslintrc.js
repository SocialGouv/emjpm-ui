// const error = 2;
// const warn = 1;
const ignore = 0;

module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'import', 'jest', 'jsx-a11y', 'react', 'json', 'html'],
  rules: {
    'react/jsx-curly-brace-presence': [2, 'never'],
    'import/prefer-default-export': ignore,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js'],
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        arrow: false,
      },
    ],
    'import/no-extraneous-dependencies': ['error', {devDependencies: ['**/*.stories.js']}],
  },
};
