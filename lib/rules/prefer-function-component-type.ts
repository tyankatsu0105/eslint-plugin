import { Rule } from "eslint";

const rule: Rule.RuleModule = {
  meta: {
    docs: {
      url:
        "https://github.com/tyankatsu0105/eslint-plugin/blob/master/docs/rules/prefer-function-component-type.md",
      description: "",
    },
    fixable: "code",
    type: "suggestion",
    messages: {
      preferFunctionComponentType:
        "Prefer using React.FC instead of FunctionComponent",
    },
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
            messageId: "noHoge",
            fix(fixer) {
              return fixer.replaceText(node, "piyo");
            },
          });
        }
      },
    };
  },
};

export = rule;
