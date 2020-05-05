import fs from "fs";

import { getRulesMetaData, createRulesList, DIR_LIB } from "./util";

const rulesListPath = `${DIR_LIB}/rules.ts`;

const main = async () => {
  const { rulesMetaData } = await getRulesMetaData();
  const { list } = createRulesList(rulesMetaData);

  fs.writeFileSync(rulesListPath, list);
};

// eslint-disable-next-line @mysticatea/ts/no-floating-promises
main();
