const Restaurant = require('../models/Restaurant');

module.exports = {
    async createRestaurant(name, address, phone, category) {
        const newRestaurant = await Restaurant.create({ name, address, phone, category });
        return newRestaurant;
    },

    async updateRestaurant(id, name, address, phone, category) {
        const existingRestaurant = await Restaurant.findOne({ where: { id } });
        if (!existingRestaurant) {
            throw new Error('Restaurant not found');
        }
        await Restaurant.update({ name, address, phone, category }, { where: { id } });
        return existingRestaurant;
    },

    async removeRestaurant(id) {
        const restaurant = await Restaurant.findOne({ where: { id } });
        if (!restaurant) {
            throw new Error('Restaurant not found');
        }
        await Restaurant.destroy({ where: { id } });
        return restaurant;
    }
};