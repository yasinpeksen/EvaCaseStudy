import { Model, DataTypes } from "sequelize";

class PortfolioShare extends Model {}

export default (sequelize) => {
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

export function setUp(models) {
  PortfolioShare.belongsTo(models.Portfolios);
  PortfolioShare.belongsTo(models.Shares);
}

export { PortfolioShare };
