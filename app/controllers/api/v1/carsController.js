const carsService = require("../../../services/carsService");

module.exports = {
  getAll(req, res) {
    carsService
      .list()
      .then((cars) => {
        res.status(200).json({
          status: "Ok",
          data: cars,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "fail",
          message: err.message,
        });
      });
  },

  create(req, res) {
    const body = req.body;
    const image = req.file;

    
    
    carsService
      .createCarsService(body, image)
      .then((cars) => {
        res.status(201).json({
          status: "OK",
          data: {
            car_name: cars.car_name,
            rent_cost: cars.rent_cost,
            car_image: cars.image,
            size_car: cars.size_car,
            created_by: users.full_name
        },
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  update(req, res) {
    const body = req.body;
    const image = req.file;

    carsService
      .updateCarsService(req.params.id,body,image)
      .then((cars) => {
        res.status(201).json({
          status: "OK",
          data: cars,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  getById(req, res) {
    carsService
      .getById(req.params.id)
      .then((cars) => {
        res.status(200).json({
          status: "OK",
          data: cars,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  destroy(req, res) {
    const body = req.body;

    carsService
      .delete(req.params.id, body)
      .then((cars) => {
        res.status(204).end();
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },
};
