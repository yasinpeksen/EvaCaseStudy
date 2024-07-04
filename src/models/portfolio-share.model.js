import { Model, DataTypes } from "sequelize";
import { Portfolio } from "./portfolio";
import { Share } from "./share.model";

class PortfolioShare extends Model {}

export default (sequelize) => {
  PortfolioShare.belongsTo(Portfolio);
  PortfolioShare.belongsTo(Share);

  PortfolioShare.init(
    {
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
    },
    {
      sequelize,
      modelName: "PortfolioShare",
    }
  );

  return PortfolioShare;
};

export { PortfolioShare };
