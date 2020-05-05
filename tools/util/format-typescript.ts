import eslint from "eslint";

export const formatTypescript = (content: string) => {
  const linter = new eslint.CLIEngine({
    fix: true,
  });
  // @see https://github.com/typescript-eslint/typescript-eslint/issues/885#issuecomment-523083616
  const report = linter.executeOnText(content, "tools/util/index.ts");

  return report.results[0].output;
};
