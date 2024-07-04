import { Model, DataTypes } from "sequelize";
import { Portfolio } from "./portfolio";

class User extends Model {}

export default (sequelize) => {
  User.hasMany(Portfolio);

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

export { User };
