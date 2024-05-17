const tableService = require('../services/tableService');

module.exports = {
    async createTable(req, res) {
        try {
            const { table, capacity, availability, restaurantId } = req.body;
            const newTable = await tableService.createTable(table, capacity, availability, restaurantId);
            res.status(201).json({ message: 'Table created.', table: newTable });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateTable(req, res) {
        try {
            const { id } = req.params;
            const { table, capacity, availability, restaurantId } = req.body;
            await tableService.updateTable(id, table, capacity, availability, restaurantId);
            res.status(202).json({ message: 'Table updated successfully.' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async listTables(req, res) {
        try {
            const tables = await tableService.listTables();
            res.status(200).json({ tables });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteTable(req, res) {
        try {
            const { id } = req.params;
            await tableService.deleteTable(id);
            res.status(200).json({ message: 'Table deleted successfully.' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};