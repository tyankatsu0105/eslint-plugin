/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  parserOptions: {
    ecmaVersion: 2018
  },
  extends: [
    "plugin:@mysticatea/es2018",
    "plugin:@mysticatea/+eslint-plugin" 
  ],
  rules: {
    "@mysticatea/prettier": ['error', {
      tabWidth: 2,
    }],
    "func-style": ['error', "expression"]
  },
  overrides: [
    {
      files: "*.ts",
      rules: {
        // module.exports require使う必要があるため
        "@mysticatea/ts/no-require-imports": "off",
        "@mysticatea/ts/no-var-requires": "off",
      }
    }
  ]
}
