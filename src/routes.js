const { Router, request } = require('express');
const router = Router();
const login = require('./middleware/login');

const UserController = require('./controllers/User.controller');
const RestaurantController = require('./controllers/Restaurant.controller');
const TableController = require('./controllers/Table.controller');
const ReservationController = require('./controllers/Reservation.controller');

const routeWrapper = (routeAction) => {
    return async (request, response) => {
        try {
            const actionResult = await routeAction(request, response)
            return response.status(200).json(actionResult)
        } catch (error) {
            return response.status(error.status || 500).json({message: error.message || 'Something went wrong'})
        }
    }
}


router.post('/api/users/create', routeWrapper(UserController.createUser));
router.put('/api/users/:id', routeWrapper(UserController.updateUser));
router.get('/api/users', routeWrapper(UserController.listUsers));
router.delete('/api/users/:id', routeWrapper(UserController.deleteUser));
router.post('/api/users/login', routeWrapper(UserController.userLogin));

router.post('/api/restaurants/create', routeWrapper(RestaurantController.createRestaurant));
router.put('/api/restaurants/:id', routeWrapper(RestaurantController.updateRestaurant));
router.delete('/api/restaurants/:id', routeWrapper(RestaurantController.removeRestaurant));

router.post('/api/restaurants/:restaurantId/tables', routeWrapper(TableController.createTable));
router.put('/api/tables/:id', routeWrapper(TableController.updateTable));
router.get('/api/tables', routeWrapper(TableController.listTables));
router.delete('/api/tables/:id', routeWrapper(TableController.deleteTable));

router.post('/api/reservations/create', routeWrapper(ReservationController.createReservation));
router.put('/api/reservations/:id', routeWrapper(ReservationController.updateReservation));
router.delete('/api/reservations/:id', routeWrapper(ReservationController.removeReservation));

module.exports = router;
