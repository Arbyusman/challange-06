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

  async create(body, image) {
    
    try {
      const createCars = await carsRepository.create(body, image);
      return createCars;
    } catch (err) {
      throw err;
    }
  },

  async update(id, body,image) {
    try {
      const updateCars = await carsRepository.update(id, body,image);
      return updateCars;
    } catch (err) {
      throw err;
    }
  },

  delete(id,body) {
    return carsRepository.delete(id,body);
  },

  
};
