import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
  class User extends Model {}

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
          notNull: {
            msg: "Username is required",
          },
          notEmpty: {
            msg: "Username is required",
          },
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
