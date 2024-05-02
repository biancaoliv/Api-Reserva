const { Router } = require('express');
const UserController = require('./controllers/User-controller');
const User = require('./models/User');
const router = Router();
const login = require('./middleware/login');

// ROTAS CREATE-USER
router.post('/user-create', UserController.createUser);
router.put('/user-update/:id', login.required, UserController.updateUser);
router.get('/user-list', login.required, UserController.listUsers);
router.delete('/user-delete/:id', login.required, UserController.deleteUser);
router.post('/user-login', UserController.userLogin);

module.exports = router;
