module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    "max-len": [
      "error",
      {
        "code": 300,
        "ignoreUrls": true,
        "ignoreTrailingComments": true
      }
    ],
    "no-console": "off",
    "import/extensions": [
      "error",
      "never",
    ],
    "import/no-unresolved": [ // FIXME
      "error",
      "never",
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
};