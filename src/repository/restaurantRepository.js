const Restaurant = require('../models/Restaurant');

module.exports = {
    async createRestaurant(restaurantData) {
        return await Restaurant.create(restaurantData);
    },
    async updateRestaurant(id, newData) {
        return await Restaurant.update(newData, { where: { id } });
    },
    async deleteRestaurant(id) {
        return await Restaurant.destroy({ where: { id } });
    },
};
