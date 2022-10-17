const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/userRepository");

async function encryptPassword(str) {
  try {
    const hash = await bcrypt.hash(str, 10);
    return hash;
  } catch (err) {
    console.log(err);
  }
}

async function comparePassword(password, encryptPassword) {
  try {
    const isValid = await bcrypt.compare(password, encryptPassword);
    return isValid;
  } catch (err) {
    console.log(err);
  }
}

function createWebToken(payload){
    return jwt.sign(payload, 'P455w00rd!!!');
}

module.exports = {
  async register(full_name, email, password) {
    try {
      const encryptedPassword = await encryptPassword(password);
      const body = {
        full_name,
        email,
        password: encryptedPassword,
      };
      const user = await userRepository.create(body);
      return user;
    } catch (err) {
      throw err;
    }
  },

  async login(email, password) {
    try {
      const user = await userRepository.finduser({ email });

      if (!user) {
        return false;
      }

      const { password: encryptedPassword } = user;
      const isAuthenticated = await comparePassword(password, encryptedPassword);

      if (!isAuthenticated) {
        return false;
      }

      const token = createWebToken({
        id: user.id,
        email: user.email,
      })

      const data={
        ...user.dataValues,
        token
      }
      return data;
      
    } catch (err) {
      throw err;
    }
  },
};
