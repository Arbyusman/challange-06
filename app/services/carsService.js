const carsRepository = require("../repositories/carsRepository");

module.exports = {
  async list() {
    try {
      const listCars = await carsRepository.getAll();
      return listCars;
    } catch (err) {
      throw err
    }
  },

  async create(body,image){
    try{
      const createCars = await carsRepository.create(body,image)
      return createCars;
    }catch(err){
      throw err
    }
  },

  update(body,id){
    return carsRepository.update(body,id)
  },

  delete(id){
    return carsRepository.delete(id)
  },

  getById(id){
    return carsRepository.getById(id)
  }

};
