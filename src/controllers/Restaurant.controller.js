const restaurantService = require('../services/restaurantService');

module.exports = {
    createRestaurant: async (req, res) => {
        const { name, address, phone, category } = req.body;
        const newRestaurant = await restaurantService.createRestaurant(name, address, phone, category);
        return { message: 'Restaurant created successfully.', restaurant: newRestaurant };
    },

    updateRestaurant: async (req, res) => {
        const { id } = req.params;
        const { name, address, phone, category } = req.body;
        await restaurantService.updateRestaurant(id, name, address, phone, category);
        return { message: 'Restaurant updated successfully.' };
    },

    deleteRestaurant: async (req, res) => {
        const { id } = req.params;
        await restaurantService.deleteRestaurant(id);
        return { message: 'Restaurant deleted successfully.' };
    }
};