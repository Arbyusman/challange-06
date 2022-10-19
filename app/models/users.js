"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.users.belongsTo(models.role, {
        foreignKey: "role",
        as: "role_user",
      });

      models.users.belongsToMany(models.cars, {
        foreignKey: "created_by",
        as: "created_by",
      });

      models.users.belongsToMany(models.cars, {
        foreignKey: "updated_by",
        as: "updated_by",
      });

      models.users.belongsToMany(models.cars, {
        foreignKey: "deleted_by",
        as: "deleted_by",
      });
    }
  }
  users.init(
    {
      full_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
