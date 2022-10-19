'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  
    }
  }
  cars.init({
    car_name: DataTypes.STRING,
    rent_cost: DataTypes.INTEGER,
    size_car: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    deleted_by: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid:true,
    modelName: 'cars',
  });
  return cars;
};