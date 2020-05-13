# @tyankatsu0105/force-filename-pattern

## 📖 Rule Details

Force filename

### 👎

```ts
/*eslint @tyankatsu0105/force-filename-pattern: ["error", { regex: "foo$" }]*/

// bar.js
// foobar.js
```

```ts
/*eslint @tyankatsu0105/force-filename-pattern: ["error", { allowExtensionNames: ["ts"] }]*/

// bar.js
// foobar.js
```

### 👍

```ts
/*eslint @tyankatsu0105/force-filename-pattern: ["error", { regex: "foo$" }]*/

// foo.js
// barfoo.js
```

```ts
/*eslint @tyankatsu0105/force-filename-pattern: ["error", { allowExtensionNames: ["ts"] }]*/

// bar.ts
// foobar.ts
```

## 🔧 Options

```json
{
  "rules": {
    "@tyankatsu0105/force-filename-pattern": [
      "error",
      [
        {
          "regex": "foo",
          "allowExtensionNames": ["js"]
        }
      ]
    ]
  }
}
```

- `regex` (`string`)
  - This option check filename. For example, when filename is `foo-bar.js`, this option check `foo-bar`.
  - Default ... `""`
- `allowExtensionNames` (`string[]`)
  - This option check extension name.
  - Default ... `[]`
