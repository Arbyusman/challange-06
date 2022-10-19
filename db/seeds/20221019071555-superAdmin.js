"use strict";
const { encryptPassword } = require("../../app/services/authService");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        full_name: "arbinasyah",
        email: "arby@gmail.com",
        password: await encryptPassword("P@5sW0rd!!!"),
        role: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
