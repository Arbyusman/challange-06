'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('sizeCars',[
      {
        size:'small',
        createdAt :new Date(),
        updatedAt:new Date(),
      },

      {
        size:'medium',
        createdAt :new Date(),
        updatedAt:new Date(),
      },

      {
        size:'member',
        createdAt :new Date(),
        updatedAt:new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sizeCars', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
