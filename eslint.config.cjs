module.exports = [
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    plugins: {
      react: require('eslint-plugin-react'),
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
];
