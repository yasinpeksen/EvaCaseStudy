import { Model, DataTypes } from "sequelize";

class User extends Model {}

export default (sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          notEmpty: true,
          len: [3, 20],
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};

export function setUp(models) {
  User.hasMany(models.Portfolios);
}

export { User };
