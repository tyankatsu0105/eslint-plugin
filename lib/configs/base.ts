export = {
  parser: "@typescript-eslint/parser",
  parserOptions: { sourceType: "module" },
  plugins: ["@tyankatsu0105"],
  ecmaFeatures: {
    jsx: true,
  },
} as const;
