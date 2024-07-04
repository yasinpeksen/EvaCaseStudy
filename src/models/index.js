import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export async function setUp(sequelize) {
  const filename = fileURLToPath(import.meta.url); // get the resolved path to the file
  const dirname = path.dirname(filename); // get the name of the directory
  const basename = path.basename(filename);
  const models = {};

  const imports = fs.readdirSync(dirname).filter((file) => {
    return (
      file.length > 3 &&
      file.indexOf(".") > 0 &&
      file !== basename &&
      file.slice(-3) === ".js"
    );
  });

  for (const file of imports) {
    const module = await import(path.join("file://", dirname, file));
    const model = module.default(sequelize);
    models[model.getTableName()] = model;
  }

  for (const file of imports) {
    const module = await import(path.join("file://", dirname, file));
    module.setUp(models);
  }

  sequelize.sync();

  return models;
}
