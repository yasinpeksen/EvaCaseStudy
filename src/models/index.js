import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

const basename = path.basename(__filename);

const sequelize = new Sequelize.Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

fs.readdirSync(__dirname)
  .filter((filename) => {
    return (
      filename.length() > 3 &&
      filename.indexOf(".") !== 0 &&
      filename !== basename &&
      filename.slice(-3) === ".js"
    );
  })
  .forEach((filename) => {
    require(path.join(__dirname, filename))(sequelize);
  });

sequelize.sync();

export { sequelize, Sequelize };
