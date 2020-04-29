import { RuleTester } from "eslint";

const rule = require("../../../lib/rules/no-hoge");

const tester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
  },
});

tester.run("no-hoge", rule, {
  valid: ["const piyo = 'piyo';"],
  invalid: [
    {
      code: "const hoge = 'piyo';",
      output: "const piyo = 'piyo';",
      errors: ["🤖piyoニシテクダサイ"],
    },
  ],
});
