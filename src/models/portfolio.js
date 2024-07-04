import { Model, DataTypes } from "sequelize";
import { User } from "./user.model";
import { ShareTransaction } from "./share-transaction.model";
import { PortfolioShare } from "./portfolio-share.model";

class Portfolio extends Model {}

export default (sequelize) => {
  Portfolio.belongsTo(User);
  Portfolio.hasMany(ShareTransaction);
  Portfolio.hasOne(PortfolioShare);

  Portfolio.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      sequelize,
      modelName: "Portfolio",
    }
  );

  return Portfolio;
};

export { Portfolio };
