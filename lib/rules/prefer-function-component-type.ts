import { createRule } from "../util";

export = createRule({
  name: "prefer-function-component-type",
  meta: {
    docs: {
      description: "",
      category: "Best Practices",
      recommended: false,
    },
    fixable: "code",
    type: "suggestion",
    messages: {
      preferFunctionComponentType:
        "Prefer using React.FC instead of FunctionComponent",
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
            messageId: "preferFunctionComponentType",
            fix(fixer) {
              return fixer.replaceText(node, "piyo");
            },
          });
        }
      },
    };
  },
});
