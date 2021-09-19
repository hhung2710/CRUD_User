const Joi = require('joi');
const httpStatus = require('http-status');
const catchAsync = require('./catchAsync');
const ApiError = require('./ApiError');
const User = require('../models/user.model');

const checkUser = {
    body: Joi.object().keys({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().required().email(),
        phone: Joi.string().required(),
        address: Joi.string(),
    }),
};

const checkId = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (user === null) {
        throw new ApiError(httpStatus.FORBIDDEN, 'User not exist');
    };
    next()
});

module.exports = {
    checkUser,
    checkId
}