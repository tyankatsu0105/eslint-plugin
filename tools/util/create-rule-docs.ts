import { RuleMetaData } from "./types";

const createIntro = (length: number) => `
You can use ${length} rules.
`;
const createRulesSection = (rulesMetaData: RuleMetaData[]) => {
  const heading = "## Rules list";

  const tableHeader = `
|Rule ID|Description|Fixable|
| :--- | :--- | :--- |`;

  const rulesTable = rulesMetaData
    .map((ruleMetaData) => {
      const { name } = ruleMetaData;
      const url = ruleMetaData.meta.docs?.url;
      const description = ruleMetaData.meta.docs?.description;
      const fixable = ruleMetaData.meta.fixable ? ":wrench:" : "";

      return `|[${name}](${url})|${description}|${fixable}|\n`;
    })
    .join("");

  return `
  ${heading}
  ${tableHeader}
  ${rulesTable}
  `;
};

export const createRuleDocs = (rulesMetaData: RuleMetaData[]) => {
  const doc: string[] = [];
  doc.push(createIntro(rulesMetaData.length));

  doc.push(createRulesSection(rulesMetaData));

  return { doc: doc.join("") };
};
