# @tyankatsu0105/eslint-plugin

Create ESLint rules with TypeScript

## Usage

```bash
npm i -D @tyankatsu0105/eslint-plugin
```

```js
module.exports = {
  plugins: ["@tyankatsu0105"],
  rules: {
    "@tyankatsu0105/no-hoge": 2,
  },
};
```

> If you want to know about how to use scoped ESLint plugin, see: https://github.com/eslint/eslint/issues/9903

## development

### Branches

- master => Release branch
- develop => Development branch (default)
- topic branches => From develop branch

### playground

If you want to check eslint error, make these files in the `sandbox` dir.

```js
// index.js

"use strict";

const hoge = "aaa";
```

```js
// .eslintrc.js

/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-hoge": 2,
  },
};
```

## Inspired by these

- https://github.com/future-architect/eslint-plugin-vue-scoped-css

## LICENSE (MIT)

See [LICENSE](https://github.com/tyankatsu0105/eslint-plugin/blob/develop/LICENSE)
