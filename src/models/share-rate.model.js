import { Model, DataTypes } from "sequelize";

class ShareRate extends Model {}

export default (sequelize) => {
  ShareRate.init(
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
      rate: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        validate: {
          min: 0,
        },
      },
    },
    {
      sequelize,
      modelName: "ShareRate",
    }
  );

  return ShareRate;
};

export function setUp(models) {
  ShareRate.belongsTo(models.Shares);
  ShareRate.belongsTo(models.Portfolios);
}

export { ShareRate };
