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

### playground

If you want to check eslint error, make these files in the `sandbox` dir.

```tsx
// index.tsx

import * as React, { FunctionComponent } from "react";

export const App: FunctionComponent = () => <div>aaa</div>;
```

```js
// .eslintrc.js

/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "tsconfig.sandbox.json",
  },
  rules: {
    "prefer-function-component-type": ["error", { prefer: "React.FC" }],
  },
};
```

## Inspired by these

- https://github.com/future-architect/eslint-plugin-vue-scoped-css

## LICENSE (MIT)

See [LICENSE](https://github.com/tyankatsu0105/eslint-plugin/blob/develop/LICENSE)
