import { createRule } from "../util";

export = createRule({
  name: "no-hoge",
  meta: {
    docs: {
      description: "'hoge' cannot be used in variable name",
      category: "Stylistic Issues",
      recommended: false,
    },
    fixable: "code",
    type: "problem",
    messages: {
      noHoge: "🤖piyoニシテクダサイ",
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      Identifier(node) {
        if (node.type !== "Identifier") {
          return;
        }
        if (node.name !== "hoge") {
          return;
        }
        if ((node.loc !== undefined, node.loc !== null)) {
          context.report({
            node,
            loc: node.loc,
            messageId: "noHoge",
            fix(fixer) {
              return fixer.replaceText(node, "piyo");
            },
          });
        }
      },
    };
  },
});
