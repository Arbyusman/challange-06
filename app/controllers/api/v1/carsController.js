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
          status:"fail",
          message: err.message,
        })
      });
  },

  create(req, res) {
    carsService
      .create(req.body)
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

  update(req, res) {
    carsService
      .update(req.body,req.params.id)
      .then((cars) => {
        res.status(200).json({
          status: "OK",
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
    carsService
      .delete(req.params.id)
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
