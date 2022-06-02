module.exports = {
  extends: ['next', 'prettier', 'airbnb', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-key': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
  },
};
