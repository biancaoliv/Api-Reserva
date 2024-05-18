const userService = require('../services/userService');

module.exports = {
    createUser: async (req, res) => {
        const { name, email, password } = req.body;
        const result = await userService.createUser(name, email, password);
        return { message: 'User created successfully!', user: result };
    },

    userLogin: async (req, res) => {
        const { email, password } = req.body;
        const result = await userService.userLogin(email, password);
        return { message: 'User logged in successfully!', user: result };
    },

    updateUser: async (req, res) => {
        const { id } = req.params;
        const { name, email } = req.body;
        const result = await userService.updateUser(id, name, email);
        return { message: 'User updated successfully!', user: result };
    },

    listUsers: async (req, res) => {
        const result = await userService.listUsers();
        return { message: 'Users retrieved successfully!', users: result };
    },

    deleteUser: async (req, res) => {
        const { id } = req.params;
        const result = await userService.deleteUser(id);
        return { message: 'User deleted successfully!', user: result };
    }
};
