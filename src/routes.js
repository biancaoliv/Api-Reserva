const { Router } = require('express');
const UserController = require('./controllers/User.controller');
const User = require('./models/User');
const router = Router();
const login = require('./middleware/login');

const RestaurantController = require('./controllers/Restaurant.controller');
const TableController = require('./controllers/Table.controller');
const ReservationController = require('./controllers/Reservation.controller');

router.post('/user-create', UserController.createUser);
router.put('/user-update/:id', UserController.updateUser);
router.get('/user-list', UserController.listUsers);
router.delete('/delete-user/:id', UserController.deleteUser);
router.post('/user-login', UserController.userLogin);

router.post('/create-restaurant', RestaurantController.createRestaurant);
router.put('/update-restaurant/:id', RestaurantController.updateRestaurant);
router.delete('/delete-restaurant/:id', RestaurantController.removeRestaurant);

router.post('/create-table', TableController.createTable);
router.put('/table-update/:id', TableController.updateTable);
router.get('/tables-list', TableController.listTables);
router.delete('/delete-table/:id', TableController.deleteTable);

router.post('/create-reservation', ReservationController.createReservation);
router.delete('/delete-reservation/:id', ReservationController.removeReservation);
router.put('/update-reservation/:id', ReservationController.updateReservation)

module.exports = router;
