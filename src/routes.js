const { Router } = require('express');
const UserController = require('./controllers/User-controller');
const User = require('./models/User');
const router = Router();

router.post('/user-create', UserController.createUser);
router.put('/user-update/:id', UserController.updateUser);
router.get('/user-list', UserController.listUsers);
router.delete('/user-delete/:id', UserController.deleteUser)



module.exports = router;
