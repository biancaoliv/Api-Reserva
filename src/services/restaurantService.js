const restaurantRepository = require('../repository/restaurantRepository');

module.exports = {
    async createRestaurant(name, address, phone, category) {
        const newRestaurant = await restaurantRepository.createRestaurant({
            name,
            address,
            phone,
            category,
        });
        return newRestaurant;
    },

    async updateRestaurant(id, name, address, phone, category) {
        const existingRestaurant = await restaurantRepository.updateRestaurant(id, {
            name,
            address,
            phone,
            category,
        });
        if (!existingRestaurant) {
            throw new Error('Restaurant not found');
        }
        return existingRestaurant;
    },

    async deleteRestaurant(id) {
        const deletedRestaurant = await restaurantRepository.deleteRestaurant(id);
        if (!deletedRestaurant) {
            throw new Error('Restaurant not found');
        }
        return deletedRestaurant;
    }
};
