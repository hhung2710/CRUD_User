const express = require('express');
const userController = require('../../controllers/user.controller');
const userValidation = require('../../validation/user.validation');
const validate = require('../../middware/validate');
const checkExist = require('../../middware/checkExist');

const router = express.Router();

router.get('/', userController.getAllUser);
router.get('/:id', checkExist.checkId, userController.getUser);
router.post('/create', validate(userValidation.checkUser), userController.postUser);
router.put('/:id', checkExist.checkId, validate(userValidation.checkUser), userController.updateUser);
router.delete('/:id', checkExist.checkId, userController.deleteUser);

module.exports = router;