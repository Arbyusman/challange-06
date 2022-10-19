'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sizeCar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.sizeCar.hasMany(models.cars,{
        foreignKey:'size_car',
        as:"size_capacity",
      });
    }
  }
  sizeCar.init({
    size: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sizeCar',
  });
  return sizeCar;
};