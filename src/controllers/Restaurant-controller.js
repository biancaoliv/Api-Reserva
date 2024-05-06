const Restaurant = require('../models/Restaurant');

module.exports = {
    async createRestaurant(req, res) {
        try {
            const { name, address, cellPhone, typeOfRestaurant } = req.body;
            
            const newRestaurant = await Restaurant.create({
                name,
                address,
                cellPhone,
                typeOfRestaurant,
            });
            res.status(201).json({ restaurant: newRestaurant });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
