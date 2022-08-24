
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser:'@babel/babel-eslint',
    "parserOptions": {
      ecmaFeatures: {
        jsx: true,
      },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "react:jsx-filename-extension":0,
      'react/state-in-constructor': 0,
      'react/forbid-prop-types': 0,
    }
}
