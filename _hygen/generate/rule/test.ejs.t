---
to: tests/lib/rules/<%= name %>.spec.ts
---
import { RuleTester, resolveParser } from "../../RuleTester";

import rule from "../../../lib/rules/<%= name %>";

const tester = new RuleTester({
  parser: resolveParser("@typescript-eslint/parser"),
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
});

tester.run("<%= name %>", rule, {
  valid: [""],
  invalid: [
    {
      code: "",
      output: "",
      options: [],
      errors: [{ messageId: "<%= h.changeCase.camel(name) %>" }],
    },
  ],
});
