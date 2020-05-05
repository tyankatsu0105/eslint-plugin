# @tyankatsu0105/eslint-plugin

[![npm version](https://badge.fury.io/js/%40tyankatsu0105%2Feslint-plugin.svg)](https://badge.fury.io/js/%40tyankatsu0105%2Feslint-plugin)
[![deploy](https://img.shields.io/badge/deploy-🛳%20Ship.js-blue?style=flat)](https://github.com/algolia/shipjs)

ESLint rules for TypeScript with TypeScript.

## Usage

```bash
npm i -D eslint @tyankatsu0105/eslint-plugin
```

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@tyankatsu0105"],
  rules: {
    "@tyankatsu0105/prefer-function-component-type": [
      "error",
      { prefer: "React.FC" },
    ],
  },
};
```

### Rules

[Docs](https://github.com/tyankatsu0105/eslint-plugin/tree/master/docs/rules)

### Configs

[Readme](https://github.com/tyankatsu0105/eslint-plugin/tree/master/lib/configs/README.md)

> If you want to know about how to use scoped ESLint plugin, see: https://github.com/eslint/eslint/issues/9903

## development

### Branches

- master => Release branch
- develop => Development branch (default)
- topic branches => From develop branch

### sandbox

If you want to check eslint error, make files in the `sandbox` dir.

```bash
# make files
npm run gen:sandbox

# run eslint for sandbox dir
npm run sandbox
```

## Inspired by these

- https://github.com/future-architect/eslint-plugin-vue-scoped-css
- https://github.com/typescript-eslint/typescript-eslint

## LICENSE (MIT)

See [LICENSE](https://github.com/tyankatsu0105/eslint-plugin/blob/develop/LICENSE)
