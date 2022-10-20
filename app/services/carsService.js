const carsRepository = require("../repositories/carsRepository");

module.exports = {
  async list() {
    try {
      const listCars = await carsRepository.getAll();
      return listCars;
    } catch (err) {
      throw err;
    }
  },

  async createCarsService(body, image) {
    
    try {
      const createCars = await carsRepository.createCars(body, image);
      return createCars;
    } catch (err) {
      throw err;
    }
  },

  async updateCarsService(id, body, image) {
    try {
      const createCars = await carsRepository.updateCars(id, body, image);
      return createCars;
    } catch (err) {
      throw err;
    }
  },

  delete(id) {
    return carsRepository.delete(id);
  },

  getById(id) {
    return carsRepository.getById(id);
  },
};
