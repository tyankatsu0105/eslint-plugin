import { ESLintUtils, TSESLint } from "@typescript-eslint/experimental-utils";
type Rule = ReturnType<ReturnType<typeof ESLintUtils.RuleCreator>>;
type Config = TSESLint.Linter.Config;

// @todo add type to processors and configs
type CreateLibIndex = {
  rules?: {
    [k: string]: Rule;
  };
  environments?: {
    [k: string]: any;
  };
  processors?: {
    [k: string]: any;
  };
  configs?: {
    [k: string]: Config;
  };
};
export const createLibIndex = ({
  rules,
  environments,
  processors,
  configs,
}: CreateLibIndex) => ({ rules, environments, processors, configs });
