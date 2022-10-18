/**
 * @file contains entry point of controllers api v1 module
 * @author Fikri Rahmat Nurhidayat
 */

const authController = require("./authController");
const carsController = require("./carsController");

module.exports = {
  authController,
  carsController,
};
