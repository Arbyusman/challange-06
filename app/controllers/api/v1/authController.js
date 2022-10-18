const bcrypt = require("bcryptjs");
const { authorize } = require("../../../services/authService");
const authService = require("../../../services/authService");

module.exports = {
  register(req, res) {
    const { full_name, email, password } = req.body;

    authService.register(full_name, email, password).then((user) => {
      res
        .status(201)
        .json({
          status: "berhasil",
          data: user,
        })
      })
      .catch((err) => {
        res.status(400).json({
          status: "gagal",
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
            status: "Gagal",
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
          status: "Gagal",
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
    const token = bearerToken.split('Bearer')[1];

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
        next();
      })
      .catch((err) => {
        res.status(403).json({
          message: "Unauthorized 3",
        });
        
        return;
      });
  },
};
