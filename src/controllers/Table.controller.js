const tableService = require('../services/tableService');

module.exports = {
    async createTable(req, res) {
        const { table, capacity, availability, restaurantId } = req.body;
        const newTable = await tableService.createTable(table, capacity, availability, restaurantId);
        return { status: 201, data: { message: 'Table created.', table: newTable } };
    },

    async updateTable(req, res) {
        const { id } = req.params;
        const { table, capacity, availability, restaurantId } = req.body;
        await tableService.updateTable(id, table, capacity, availability, restaurantId);
        return { status: 202, data: { message: 'Table updated successfully.' } };
    },

    async listTables(req, res) {
        const tables = await tableService.listTables();
        return { status: 200, data: { tables } };
    },

    async deleteTable(req, res) {
        const { id } = req.params;
        await tableService.deleteTable(id);
        return { status: 200, data: { message: 'Table deleted successfully.' } };
    }
};
