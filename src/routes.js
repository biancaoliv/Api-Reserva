const { Router } = require('express');
const UserController = require('./controllers/User.controller');
const User = require('./models/User');
const router = Router();
const login = require('./middleware/login');

const restaurantController = require('./controllers/Restaurant.controller');

router.post('/user-create', UserController.createUser);
router.put('/user-update/:id', UserController.updateUser);
router.get('/user-list', UserController.listUsers);
router.delete('/user-delete/:id', UserController.deleteUser);
router.post('/user-login', UserController.userLogin);

router.post(
    '/create-restaurant',
    restaurantController.createRestaurant,
);

module.exports = router;
