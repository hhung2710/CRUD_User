const Joi = require('joi');

const checkUser = {
    body: Joi.object().keys({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().required().email(),
        phone: Joi.string().required(),
        address: Joi.string(),
    }),
};

module.exports = {
    checkUser
}