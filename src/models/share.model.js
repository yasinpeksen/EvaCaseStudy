import { Model, DataTypes } from "sequelize";
import { PortfolioShare } from "./portfolio-share.model";

class Share extends Model {}

export default (sequelize) => {
  Share.hasMany(ShareTransaction);
  Share.hasOne(PortfolioShare);

  Share.init(
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
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      maxAmount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        min: 0,
      },
    },
    {
      sequelize,
      modelName: "Share",
    }
  );

  return Share;
};

export { Share };
