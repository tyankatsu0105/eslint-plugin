/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  parserOptions: {
    ecmaVersion: 2018
  },
  extends: [
    "plugin:@mysticatea/es2018",
    "plugin:@mysticatea/+eslint-plugin" 
  ]
}