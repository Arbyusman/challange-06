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
      models.users.hasMany(models.role, {
        foreignKey: "role",
        as: "role_user",
      });

      models.users.hasMany(models.cars, {
        foreignKey: "created_by",
        as: "create_by",
      });

      models.users.hasMany(models.cars, {
        foreignKey: "updated_by",
        as: "update_by",
      });

      models.users.hasMany(models.cars, {
        foreignKey: "deleted_by",
        as: "delete_by",
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
