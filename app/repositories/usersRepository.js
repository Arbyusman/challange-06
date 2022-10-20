const { users } = require("../models");
module.exports = {
  create(body) {
    return users.create(body);
  },
  finduser(condition) {
    return users.findOne({ where: condition });
  },

  findAlluser() {
    return users.findAll();
  },

  finduserByPk(id) {
    return users.findByPk(id);
  },
};
