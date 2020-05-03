import fs from "fs";
import { getRulesMetaData, createRuleDocs, DIR_DOCS } from "./util";

const rulesDocsPath = `${DIR_DOCS}/rules/README.md`;

const main = async () => {
  const { rulesMetaData } = await getRulesMetaData();
  const { doc } = createRuleDocs(rulesMetaData);

  fs.writeFileSync(rulesDocsPath, doc);
};

// eslint-disable-next-line @mysticatea/ts/no-floating-promises
main();
