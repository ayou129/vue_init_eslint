module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },   
  "extends": [
    "plugin:vue/strongly-recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "vue/html-indent": ['error', 4,{
    }]
  }
};
