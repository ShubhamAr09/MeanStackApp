var express = require('express');

var employeeController = require('../src/employee/employeeController');
const userController = require('../src/user/userController');
const router = express.Router();

router.post('/employee/login', employeeController.loginUserControllerFn);
router.post('/employee/create', employeeController.createEmployeeControllerFn);

router.get('/user/getAll', userController.getDataConntrollerfn);

router.post('/user/create', userController.createUserControllerfn);

router.patch('/user/update/:id' , userController.updateUserController);

router.delete('/user/delete/:id' , userController.deleteUserController);

module.exports = router;