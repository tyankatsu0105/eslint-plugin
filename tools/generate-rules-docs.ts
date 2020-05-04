import fs from "fs";

import {
  getRulesMetaData,
  createRuleDocs,
  DIR_DOCS,
  formatMarkdown,
} from "./util";

const rulesDocsPath = `${DIR_DOCS}/rules/README.md`;

const main = async () => {
  const { rulesMetaData } = await getRulesMetaData();
  const { doc } = createRuleDocs(rulesMetaData);

  fs.writeFileSync(rulesDocsPath, formatMarkdown(doc));
};

// eslint-disable-next-line @mysticatea/ts/no-floating-promises
main();
