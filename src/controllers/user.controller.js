const httpStatus = require('http-status');
const catchAsync = require('./catchAsync');
const User = require('../models/user.model');

const getAllUser = catchAsync(async (req, res) => {
    const user = await User.findAll()
    res.status(httpStatus.OK).send({user});
});

const getUser = catchAsync(async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    res.status(httpStatus.OK).send({user});
});

const postUser = catchAsync(async (req, res) =>{
    const {firstname, lastname, email, phone, address} = req.body;
    const user = await User.create({
        first_name: firstname,
        last_name: lastname,
        email,
        phone,
        address
    })
    res.status(httpStatus.OK).send({user});
});

const updateUser = catchAsync(async (req, res) =>{
    const {firstname, lastname, email, phone, address} = req.body;
    const id = req.params.id;
    const user = await User.findByPk(id);
    await user.update({
        first_name: firstname,
        last_name: lastname,
        email,
        phone,
        address
    })
    res.status(httpStatus.OK).send({user});
});

const deleteUser = catchAsync(async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    await user.destroy()
    res.status(httpStatus.OK).send("success");
});


module.exports = {
    getAllUser,
    getUser,
    postUser,
    updateUser,
    deleteUser
};
