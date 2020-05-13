import { createRule } from "../util";

const getFilenameExtensionName = (filenameFromEslint: string) => {
  const splitedFilename = filenameFromEslint.split(".");

  const extensionName = splitedFilename[splitedFilename.length - 1];

  const filename = splitedFilename
    .filter((_, index) => index !== splitedFilename.length - 1)
    .join(".");

  return { extensionName, filename };
};

type Options = {
  regex: string;
  allowExtensionNames: string[];
};

const defaultOptions: [Options] = [{ regex: "", allowExtensionNames: [] }];

type MessageIds = "forceFilenamePattern" | "forceExtensionNamePattern";

export = createRule<[Options], MessageIds>({
  name: "force-filename-pattern",
  meta: {
    docs: {
      description: "Force filename",
      category: "Stylistic Issues",
      recommended: false,
    },
    type: "suggestion",
    messages: {
      forceFilenamePattern: "{{ filename }} is incorrect filename pattern.",
      forceExtensionNamePattern:
        "{{ extensionName }} is incorrect extension name pattern.",
    },
    schema: [
      {
        type: "object",
        properties: {
          regex: {
            type: "string",
          },
          allowExtensionNames: {
            type: "array",
            items: {
              type: "string",
            },
          },
        },
      },
    ],
  },
  defaultOptions,
  create(context, [{ regex, allowExtensionNames }]) {
    return {
      Program(node) {
        const { filename, extensionName } = getFilenameExtensionName(
          context.getFilename()
        );

        if (
          regex &&
          !new RegExp(String.raw`${context.options[0].regex}`, "u").test(
            filename
          )
        ) {
          context.report({
            node,
            messageId: "forceFilenamePattern",
            data: {
              filename,
            },
          });
        }

        if (
          allowExtensionNames.length > 0 &&
          !allowExtensionNames.includes(extensionName)
        ) {
          context.report({
            node,
            messageId: "forceExtensionNamePattern",
            data: {
              extensionName,
            },
          });
        }
      },
    };
  },
});
