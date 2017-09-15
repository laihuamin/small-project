module.exports = {
  'extends': 'standard',
  'plugins': [
    'standard',
    'promise'
  ],
  'rules': {
    'semi': ['error', 'always'],
    'indent': ['error', 4],
    'quotes': ['error', 'single'],
    'camelcase': ['warn', {'properties': 'never'}],
    'one-var': ['off'],
    'no-new': ['off']
  },
  'globals': {
    // 全局免申明
    '$': true,
    '_': true,
    'window': true,
    'alert': true,
    'document': true,
    'location': true,
    'localStorage': true,
    'pageData': true,
    'bbhybrid': true,
    'Image': true,
    'wx': true
  },
}