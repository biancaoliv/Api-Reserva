const tableService = require('../services/tableService');

module.exports = {
    createTable: async (req, res) => {
        const { table, capacity, availability, restaurantId } = req.body;
        const newTable = await tableService.createTable(table, capacity, availability, restaurantId);
        return { message: 'Table created successfully!', table: newTable };
    },

    updateTable: async (req, res) => {
        const { id } = req.params;
        const { table, capacity, availability, restaurantId } = req.body;
        await tableService.updateTable(id, table, capacity, availability, restaurantId);
        return { message: 'Table updated successfully.' };
    },

    listTables: async (req, res) => {
        const tables = await tableService.listTables();
        return { message: 'Tables retrieved successfully!', tables };
    },

    deleteTable: async (req, res) => {
        const { id } = req.params;
        await tableService.deleteTable(id);
        return { message: 'Table deleted successfully.' };
    }
};