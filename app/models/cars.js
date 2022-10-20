"use strict";
const { DATE } = require("sequelize");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  cars.init(
    {
      car_name: DataTypes.STRING,
      rent_cost: DataTypes.INTEGER,
      size_car: DataTypes.STRING,
      car_image: DataTypes.STRING,
      created_by: DataTypes.STRING,
      updated_by: DataTypes.STRING,
      deleted_by: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      modelName: "cars",
    }
  );
  return cars;
};
