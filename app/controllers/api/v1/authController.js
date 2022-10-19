const bcrypt = require("bcryptjs");
const authService = require("../../../services/authService");
const userRepository = require("../../../repositories/userRepository")
module.exports = {
  register(req, res) {
    const { full_name, email, password } = req.body;

    authService
      .register(full_name, email, password)
      .then((user) => {
        res.status(201).json({
          status: "berhasil",
          data: user,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  registerAdmin(req, res) {
    const { full_name, email, password } = req.body;

    authService
      .registerAdmin(full_name, email, password)
      .then((user) => {
        res.status(201).json({
          status: "berhasil",
          data: user,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },
  login(req, res) {
    const { email, password } = req.body;

    authService
      .login(email, password)
      .then((auth) => {
        if (!auth) {
          res.status(401).json({
            status: "FAIL",
            message: "email atau password salah",
          });
          return;
        }
        res.status(200).json({
          status: "Berhasil",
          data: auth,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  authorize(req, res, next) {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      res.status(403).json({
        message: "Unauthorized 1",
      });
      return;
    }
    const token = bearerToken.split("Bearer ")[1];

    authService
      .authorize(token)

      .then((user) => {
        if (!user) {
          res.status(403).json({
            message: "Unauthorized 2",
          });
          return;
        }
        req.user = user;
        console.log("user", user);
        next();
      })
      .catch((err) => {
        res.status(403).json({
          message: "Unauthorized 3",
        });

        return;
      });
  },

  authorizeSuperAdmin(req, res, next) {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
      res.status(403).json({
        message: "Unauthorized 1",
      });
      return;
    }
    const token = bearerToken.split("Bearer ")[1];
    const payload = authService.verifyToken(token);
    const userRole = payload.role;
    console.log('payload',payload);


    if (userRole !== "superAdmin") {
      res.status(403).json({
        message: "Unauthorized 4 ",
      });
    }
    const user = userRepository.finduserByPk(payload.id);
    req.user = user;
    next()

    
  },

  findAllUser(req, res) {
    authService
      .listUser()
      .then((users) => {
        res.status(200).json({
          status: "Ok",
          data: users,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "fail",
          message: err.message,
        });
      });
  },
};
