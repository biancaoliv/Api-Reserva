const User = require('../models/User');

module.exports = {
    async createUser(userData) {
        return await User.create(userData);
    },
    async findUserByEmail(email) {
        return await User.findOne({ where: { email } });
    },
    async findUserById(id) {
        return await User.findOne({ where: { id } });
    },
    async updateUser(id, newData) {
        return await User.update(newData, { where: { id } });
    },

    async listUsers() {
        return await User.findAll();
    },

    async deleteUser(id) {
        return await User.destroy({ where: { id } });
    },
};
