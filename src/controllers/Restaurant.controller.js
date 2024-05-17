const restaurantService = require('../services/restaurantService');

module.exports = {
    async createRestaurant(req, res) {
        const { name, address, phone, category } = req.body;
        const newRestaurant = await restaurantService.createRestaurant(name, address, phone, category);
        return { status: 201, data: { message: 'Restaurant created successfully.', restaurant: newRestaurant } };
    },

    async updateRestaurant(req, res) {
        const { id } = req.params;
        const { name, address, phone, category } = req.body;
        await restaurantService.updateRestaurant(id, name, address, phone, category);
        return { status: 202, data: { message: 'Restaurant updated successfully.' } };
    },

    async removeRestaurant(req, res) {
        const { id } = req.params;
        await restaurantService.removeRestaurant(id);
        return { status: 202, data: { message: 'Restaurant deleted successfully.' } };
    }
};
