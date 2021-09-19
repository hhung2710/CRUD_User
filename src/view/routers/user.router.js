const express = require('express');
const userController = require('../../controllers/user.controller');
const validation = require('../../controllers/user.validation');
const validate = require('../../controllers/validate');

const router = express.Router();

router.get('/getall/', userController.getAllUser);
router.get('/get/:id', validation.checkId, userController.getUser);
router.post('/post', validate(validation.checkUser), userController.postUser);
router.put('/update/:id', validation.checkId, validate(validation.checkUser), userController.updateUser);
router.delete('/delete/:id', validation.checkId, userController.deleteUser);

module.exports = router;