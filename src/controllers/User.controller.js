const userService = require('../services/userService');

module.exports = {
    async createUser(req, res) {
        const { name, email, password } = req.body;
        const result = await userService.createUser(name, email, password);
        return { status: 201, data: result };
    },

    async userLogin(req, res) {
        const { email, password } = req.body;
        const result = await userService.userLogin(email, password);
        return { status: 200, data: result };
    },

    async updateUser(req, res) {
        const { id } = req.params;
        const { name, email } = req.body;
        const result = await userService.updateUser(id, name, email);
        return { status: 202, message: result };
    },

    async listUsers(req, res) {
        const result = await userService.listUsers();
        return { status: 200, data: result };
    },

    async deleteUser(req, res) {
        const { id } = req.params;
        const result = await userService.deleteUser(id);
        return { status: 200, message: result };
    },
};
