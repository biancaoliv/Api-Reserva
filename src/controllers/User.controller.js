const userService = require('../services/userService');

module.exports = {
    async createUser(req, res) {
        try {
            const { name, email, password } = req.body;
            const result = await userService.createUser(name, email, password);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async userLogin(req, res) {
        try {
            const { email, password } = req.body;
            const result = await userService.userLogin(email, password);
            res.status(200).json(result);
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    },

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            const result = await userService.updateUser(id, name, email);
            res.status(202).json({ message: result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async listUsers(req, res) {
        try {
            const result = await userService.listUsers();
            res.status(200).json(result);
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    },

    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const result = await userService.deleteUser(id);
            res.status(200).json({ message: result });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
