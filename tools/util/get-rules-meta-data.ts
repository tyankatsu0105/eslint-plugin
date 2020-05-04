import fs from "fs";

import { DIR_RULES } from "./const";
import { RuleMetaData } from "./types";

import { Rule } from "../../lib/util/types";

const getRuleName = (rulePath: string) => {
  const nameSpace = "@tyankatsu0105";
  const ruleName = rulePath.slice(0, -3);

  return `${nameSpace}/${ruleName}`;
};

export const getRulesMetaData = async () => {
  const rulePaths = fs.readdirSync(DIR_RULES);
  const rulesMetaData: RuleMetaData[] = [];

  for (const rulePath of rulePaths) {
    const name = getRuleName(rulePath);

    const rule: Promise<Rule> = await import(`${DIR_RULES}/${rulePath}`);
    rulesMetaData.push({
      name,
      meta: (await rule).meta,
    });
  }

  return { rulesMetaData };
};
