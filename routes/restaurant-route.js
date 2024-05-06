const express = require('express');
const { Router } = require('express');
const restaurantController = require('../src/controllers/Restaurant-controller');
const Restaurant = require('../src/models/Restaurant');
const router = express.Router();
const login = require('../src/middleware/login');

//ROTAS RESTAURANT

router.post(
    '/create-restaurant',
    login.required,
    restaurantController.createRestaurant,
);

module.exports = router;
