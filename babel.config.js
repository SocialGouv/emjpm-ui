module.exports = {
  env: {
    production: {
      plugins: ['emotion']
    },
    development: {
      plugins: [['emotion', {sourceMap: true}]]
    }
  },
  presets: ['@babel/preset-env', '@babel/preset-react']
};
