const restaurantService = require('../services/restaurantService');

module.exports = {
    async createRestaurant(req, res) {
        try {
            const { name, address, phone, category } = req.body;
            const newRestaurant = await restaurantService.createRestaurant(
                name,
                address,
                phone,
                category,
            );
            res.status(201).json({
                message: 'Restaurant created successfully.',
                restaurant: newRestaurant,
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateRestaurant(req, res) {
        try {
            const { id } = req.params;
            const { name, address, phone, category } = req.body;
            await restaurantService.updateRestaurant(
                id,
                name,
                address,
                phone,
                category,
            );
            res.status(202).json({
                message: 'Restaurant updated successfully.',
            });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async removeRestaurant(req, res) {
        try {
            const { id } = req.params;
            await restaurantService.removeRestaurant(id);
            res.status(202).json({
                message: 'Restaurant deleted successfully.',
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
