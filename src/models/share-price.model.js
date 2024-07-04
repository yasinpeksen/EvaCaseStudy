import { Model, DataTypes } from "sequelize";
import { Share } from "./share.model";
import { Portfolio } from "./portfolio";

class SharePrice extends Model {}

export default (sequelize) => {
  SharePrice.belongsTo(Share);
  SharePrice.belongsTo(Portfolio);

  SharePrice.init(
    {
      symbol: {
        type: DataTypes.CHAR,
        allowNull: false,
        primaryKey: true,
        validate: {
          notNull: true,
          notEmpty: true,
          isUppercase: true,
          len: [3, 3],
        },
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        min: 0,
      },
    },
    {
      sequelize,
      modelName: "SharePrice",
    }
  );

  return SharePrice;
};

export { SharePrice };
