import { Rule } from "eslint";

const rule: Rule.RuleModule = {
  meta: {
    fixable: "code",
    type: "problem",
  },
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
            message: "🤖piyoニシテクダサイ",
            fix(fixer) {
              return fixer.replaceText(node, "piyo");
            },
          });
        }
      },
    };
  },
};

module.exports = rule;
