export = {
  extends: require.resolve("./base"),
  rules: {
    "@tyankatsu0105/prefer-function-component-type": [
      "error",
      { prefer: "React.FC" },
    ],
  },
} as const;
