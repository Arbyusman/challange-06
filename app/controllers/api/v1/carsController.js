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
    body.created_by=req.user.full_name;
    
    carsService
      .create(body, image)
      .then((cars) => {
        res.status(201).json({
          status: "OK",
          data: 
          {
            id: cars.id,
            car_name: cars.car_name,
            rent_cost: cars.rent_cost,
            size_car: cars.size_car,
            car_image: cars.car_image,
            created_by: cars.created_by,
            createdAt: cars.createdAt,
            updatedAt: cars.updatedAt,
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
    body.updated_by=req.user.full_name;
    
    carsService
    .update(req.params.id,body,image )
    .then((cars) => {
      console.log('cars',cars);
    
      res.status(203).json({
        status: "OK",
          dataValues: {          
            id: cars.id,
            car_name: cars.car_name,
            rent_cost: cars.rent_cost,
            size_car: cars.size_car,
            car_image: cars.car_image,
            updated_by: cars.updated_by,
            createdAt: cars.createdAt,
            updatedAt: cars.updatedAt,
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
    body.deleted_by=req.user.full_name;

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
