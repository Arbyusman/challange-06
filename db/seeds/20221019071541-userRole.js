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

    await queryInterface.bulkInsert('role_user',[
      {
        role_name:'superAdmin',
        createdAt :new Date(),
        updatedAt:new Date(),
      },

      {
        role_name:'Admin',
        createdAt :new Date(),
        updatedAt:new Date(),
      },

      {
        role_name:'member',
        createdAt :new Date(),
        updatedAt:new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('role_user', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
