const Restaurant = require('../models/Restaurant');

module.exports = {
    async createRestaurant(req, res) {
        try {
            const { name, address, phone, type } = req.body;

            const newRestaurant = await Restaurant.create({
                name,
                address,
                phone,
                type,
            });
            res.status(201).json({ restaurant: newRestaurant });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateRestaurant(req, res) {
        try {
            const { id } = req.params;
            const { name, address, phone, type } = req.body;
            const existingRestaurant = await Restaurant.findOne({
                where: { id },
            });
            if (!existingRestaurant) {
                return res.status(404).json({ error: 'Restaurant not found' });
            }
            await Restaurant.update(
                { name, address, phone, type },
                { where: { id } },
            );
            res.status(202).json({
                message: 'Restaurant data updated successfully.',
            });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    async removeRestaurant(req, res) {
        try {
            const { id } = req.params;
            const restaurant = await Restaurant.findOne({ where: { id } });
            if (!restaurant) {
                return res
                    .status(404)
                    .json({ message: 'Restaurant not found' });
            }
            await Restaurant.destroy({ where: { id } });
            return res
                .status(202)
                .json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ error });
        }
    },
};
