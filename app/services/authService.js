const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const usersRepository = require("../repositories/usersRepository");

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

const secret_key = "P@5swO0rd!!!";

function createWebToken(payload) {
  return jwt.sign(payload, secret_key);
}
function verifyToken(token) {
  return jwt.verify(token, secret_key);
}

module.exports = {
  async register(full_name, email, password) {
    try {
      const encryptedPassword = await encryptPassword(password);
      const body = {
        full_name,
        email,
        password: encryptedPassword,
        role: "member",
      };
      const user = await usersRepository.create(body);
      return user;
    } catch (err) {
      throw err;
    }
  },
  async registerAdmin(full_name, email, password) {
    try {
      const encryptedPassword = await encryptPassword(password);
      const body = {
        full_name,
        email,
        password: encryptedPassword,
        role: "Admin",
      };

      const user = await usersRepository.create(body);
      return user;
    } catch (err) {
      throw err;
    }
  },

  async login(email, password) {
    try {
      const user = await usersRepository.finduser({ email });

      if (!user) {
        return false;
      }

      const { password: encryptedPassword } = user;
      const isAuthenticated = await comparePassword(
        password,
        encryptedPassword
      );

      if (!isAuthenticated) {
        return false;
      }

      const token = createWebToken({
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        role: user.role,
      });

      const data = {
        ...user.dataValues,
        token,
      };
      return data;
    } catch (err) {
      throw err;
    }
  },

  async authorize(token) {
    try {
      const payload = verifyToken(token);
      const id = payload.id;
      const user = await usersRepository.finduserByPk(id);
      return user;
    } catch (err) {
      throw err;
    }
  },

  async listUser() {
    try {
      const user = await usersRepository.findAlluser();
      return user;
    } catch (err) {
      throw err;
    }
  },

  encryptPassword,
  verifyToken,
};
