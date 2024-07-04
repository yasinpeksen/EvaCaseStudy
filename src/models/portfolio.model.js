import { Model, DataTypes } from "sequelize";

class Portfolio extends Model {}

export default (sequelize) => {
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

export function setUp(models) {
  Portfolio.belongsTo(models.Users);
  Portfolio.hasMany(models.ShareTransactions);
  Portfolio.hasOne(models.PortfolioShares);
}

export { Portfolio };
