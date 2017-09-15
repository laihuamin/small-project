module.exports = {
  "env": {
      "browser": true,
      "commonjs": true
  },
  "extends": "standard",
  "parserOptions": {
      "sourceType": "module"
  },
  "rules": {
      "indent": [
          "error",
          4
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ]
  },
  "plugins": [
      "standard",
      "promise"
  ],
  'globals': {
      'wx': true,
      'App': true,
      'Page': true,
      'getApp': true,
      'window': true
  }
};