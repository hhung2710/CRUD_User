const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/apiError");
const userEntity = require("../entities/user.entity");
const { getConnection } = require('typeorm');
// const getConnection = require("../config/database");

const checkId = catchAsync(async (req, res, next) => {
  const User = getConnection().getRepository(userEntity);
  const id = req.params.id;
  const user = await User.findOne(id);
  console.log(user);
  if (!user) {
    throw new ApiError(httpStatus.FORBIDDEN, "User not exist");
  }
  next();
});

module.exports = {
  checkId,
};
