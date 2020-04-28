import { RuleTester } from "eslint";

import rule from "../../../lib/rules/hoge-to-piyo";

const tester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
  },
});

tester.run("hoge-to-piyo", rule, {});
