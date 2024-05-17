const { Router } = require('express');
const router = Router();
const login = require('./middleware/login');

const UserController = require('./controllers/User.controller');
const RestaurantController = require('./controllers/Restaurant.controller');
const TableController = require('./controllers/Table.controller');
const ReservationController = require('./controllers/Reservation.controller');

router.post('/api/users/create', UserController.createUser);
router.put('/api/users/:id', UserController.updateUser);
router.get('/api/users', UserController.listUsers);
router.delete('/api/users/:id', UserController.deleteUser);
router.post('/api/users/login', UserController.userLogin);

router.post('/api/restaurants/create', RestaurantController.createRestaurant);
router.put('/api/restaurants/:id', RestaurantController.updateRestaurant);
router.delete('/api/restaurants/:id', RestaurantController.removeRestaurant);

router.post('/api/restaurants/:restaurantId/tables', TableController.createTable);
router.put('/api/tables/:id', TableController.updateTable);
router.get('/api/tables', TableController.listTables);
router.delete('/api/tables/:id', TableController.deleteTable);

router.post('/api/reservations/create', ReservationController.createReservation);
router.put('/api/reservations/:id', ReservationController.updateReservation);
router.delete('/api/reservations/:id', ReservationController.removeReservation);

module.exports = router;
