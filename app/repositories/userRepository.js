const { user } = require("../models");

module.exports = {
  create(body){
    return user.create(body)
  },

  finduser(condition){
    return user.findOne({where:condition})
  },

  finduserByPK(id){
    return user.findByPk(id)
  }
   
};
 