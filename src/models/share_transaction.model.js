import { Model, DataTypes } from "sequelize";
import { Share } from "./share.model";
import { Portfolio } from "./portfolio";

class ShareTransaction extends Model {}

export default (sequelize) => {
  ShareTransaction.belongsTo(Share);
  ShareTransaction.belongsTo(Portfolio);

  ShareTransaction.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        min: 0,
      },
      price_at: {
        type: DataTypes.DECIMAL,
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

export { ShareTransaction };
