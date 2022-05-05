module.exports = {
  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
    extraFileExtensions: ['.js', '.jsx'],
  },
  env: {
    node: true,
    browser: true,
  },
  globals: { Symbol: 'false' },
  plugins: ['react-native', 'react-hooks'],
  rules: {
    camelcase: ['warn', { properties: 'always' }],
    eqeqeq: 1,
    'no-console': 0,
    'no-irregular-whitespace': 0,
    'no-undef': 1,
    'require-await': 1,
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/order': 0,
    'import/namespace': 0,
  },
  extends: ['eslint:recommended', 'universe/native'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
