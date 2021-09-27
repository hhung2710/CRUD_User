const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const userService = require("../services/user.service");

const getAllUser = catchAsync(async (req, res) => {
  const users = await userService.getAll();
  res.status(httpStatus.OK).send({ users });
});

const getUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const user = await userService.getById(id);
  res.status(httpStatus.OK).send({ user });
});

const postUser = catchAsync(async (req, res) => {
  const { firstname, lastname, email, phone, address } = req.body;
  const user = await userService.create(
    firstname,
    lastname,
    email,
    phone,
    address
  );
  res.status(httpStatus.CREATED).send({ user });
});

const updateUser = catchAsync(async (req, res) => {
  const { firstname, lastname, email, phone, address } = req.body;
  const id = req.params.id;
  const user = await userService.update(
    id,
    firstname,
    lastname,
    email,
    phone,
    address
  );
  res.status(httpStatus.OK).send({ user });
});

const deleteUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  await userService.delete(id);
  res.status(httpStatus.OK).send("success");
});

module.exports = {
  getAllUser,
  getUser,
  postUser,
  updateUser,
  deleteUser,
};
