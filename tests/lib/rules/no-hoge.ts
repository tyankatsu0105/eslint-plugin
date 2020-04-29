import { RuleTester } from "eslint";

import rule from "../../../lib/rules/no-hoge";

const tester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
  },
  parser: require.resolve("espree"),
});

tester.run("no-hoge", rule, {
  valid: ["const piyo = 'piyo';"],
  invalid: [
    {
      code: "const hoge = 'piyo';",
      output: "const piyo = 'piyo';",
      errors: [{ messageId: "noHoge" }],
    },
  ],
});
