---
to: docs/rules/<%= name %>.md
---
# @tyankatsu0105/<%= name %>

## 📖 Rule Details

<%= description %>

### 👎

```ts
/*eslint @tyankatsu0105/<%= name %>: "error"*/

```

### 👍

```ts
/*eslint @tyankatsu0105/<%= name %>: "error"*/

```

## 🔧 Options

```json
{
  "rules": {
    "@tyankatsu0105/<%= name %>": [
      "error",
      { "prefer": "React.FC" }
    ]
  }
}
```

- `prefer` (`string`) ... Specify the type you prefer.
  - Default ... `""`
