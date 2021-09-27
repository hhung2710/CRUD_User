const userEntity = require("../entities/user.entity");
const { getConnection } = require('typeorm');
// const getConnection = require("../config/database");

exports.getById = async (id) => {
  const User = getConnection().getRepository(userEntity);
  const user = await User.findOne(id);
  return user;
};

exports.getAll = async () => {
  const User = getConnection().getRepository(userEntity);
  const users = await User.find();
  return users;
};

exports.create = async (firstname, lastname, email, phone, address) => {
  const User = getConnection().getRepository(userEntity);
  let user = {
    first_name: firstname,
    last_name: lastname,
    email,
    phone,
    address,
  };
  return User.save(user);
};

exports.update = async (id, firstname, lastname, email, phone, address) => {
  const User = getConnection().getRepository(userEntity);
  let user = {
    first_name: firstname,
    last_name: lastname,
    email,
    phone,
    address,
  };
  return User.update(id, user);
};

exports.delete = async (id) => {
  const User = getConnection().getRepository(userEntity);
  return User.delete(id);
};
