import { Model, DataTypes } from "sequelize";

class ShareTransaction extends Model {}

export default (sequelize) => {
  ShareTransaction.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.ENUM("BUY", "SELL"),
        allowNull: false,
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        min: 0,
      },
      priceAt: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        min: 0,
      },
    },
    {
      sequelize,
      modelName: "ShareTransaction",
    }
  );

  return ShareTransaction;
};

export function setUp(models) {
  ShareTransaction.belongsTo(models.Shares);
  ShareTransaction.belongsTo(models.Portfolios);
}

export { ShareTransaction };
