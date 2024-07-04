import { Model, DataTypes } from "sequelize";

class Share extends Model {}

export default (sequelize) => {
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

      // Can have decimal value too
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

export function setUp(models) {
  Share.hasMany(models.ShareTransactions);
  Share.hasOne(models.PortfolioShares);
}

export { Share };
