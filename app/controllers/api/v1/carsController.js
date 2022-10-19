const { bindComplete } = require("pg-protocol/dist/messages");
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
    const body = req.body;
    const image = req.file;
    body.created_by= req.user.full_name;
    
    carsService
      .create(body,image)
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
