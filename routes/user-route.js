const express = require('express')
const UserController = require('../src/controllers/User-controller');
const User = require('../src/models/User');
const router = express.Router();

const login = require('../src/middleware/login');


router.post('/user-create', UserController.createUser);
router.put('/user-update/:id', login.required, UserController.updateUser);
router.get('/user-list', login.required, UserController.listUsers);
router.delete('/user-delete/:id', login.required, UserController.deleteUser);
router.post('/user-login', UserController.userLogin);


module.exports = router;
