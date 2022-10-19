'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      car_name: {
        type: Sequelize.STRING,
        
      },
      rent_cost: {
        type: Sequelize.INTEGER
        
      },
      car_image: {
        type: Sequelize.STRING
        
      },
      size_car: {
        type: Sequelize.STRING,
        
      },
      created_by: {
        type: Sequelize.STRING,
        
      },
      updated_by: {
        type: Sequelize.STRING,
        
      },
      deleted_by: {
        type: Sequelize.STRING,
        
      },
      deletedAt: {
        type: Sequelize.DATE,
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cars');
  }
};