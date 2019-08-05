module.exports = {
  parser: 'babel-eslint',
  extends: 'get-off-my-lawn-prettier',
  rules: {
    'node/no-extraneous-import': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off'
  }
};
