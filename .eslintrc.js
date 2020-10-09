module.exports = {
  env: {
    browser: true,
    // es2020: true,
    jest: true,
  },
  globals: {
    jest: true,
  },
  extends: ['airbnb-standard', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'sort-destructure-keys'],
  rules: {
    // airbnb alterations
    'react/prop-types': 0, // TODO remove and apply either PropTypes or TypeScript
    'comma-dangle': [2, 'always-multiline'],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          every: ['id'],
        },
        allowChildren: false,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.js', '**/*.test.jsx', 'testing/*'],
      },
    ],
    // personal additions
    curly: [2, 'multi-line', 'consistent'],
    'brace-style': ['error', 'stroustrup'],
    'react/no-find-dom-node': 0,
    'import/no-unresolved': 0,
    'react/jsx-no-bind': [
      2,
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowFunctions: false,
        allowBind: false,
      },
    ],
  },
};
