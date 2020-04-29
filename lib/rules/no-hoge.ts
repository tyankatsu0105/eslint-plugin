import { Rule } from "eslint";

const rule: Rule.RuleModule = {
  meta: {
    docs: {
      url:
        "https://github.com/tyankatsu0105/eslint-plugin/blob/master/docs/rules/no-hoge.md",
      description: "'hoge' cannot be used in variable name",
    },
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
