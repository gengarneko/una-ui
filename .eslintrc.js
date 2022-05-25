module.exports = {
  ...require('eslint-config-custom'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
  },
};
