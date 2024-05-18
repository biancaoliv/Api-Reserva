const tableRepository = require('../repository/tableRepository');

module.exports = {
    async createTable(table, capacity, availability, restaurantId) {
        const newTable = await tableRepository.createTable({ table, capacity, availability, restaurantId });
        return newTable;
    },

    async updateTable(id, table, capacity, availability, restaurantId) {
        const existingTable = await tableRepository.findTableById(id);
        if (!existingTable) {
            throw new Error('Table not found');
        }
        await tableRepository.updateTable(id, { table, capacity, availability, restaurantId });
        return existingTable;
    },

    async listTables() {
        const tables = await tableRepository.listTables();
        return tables;
    },

    async deleteTable(id) {
        const existingTable = await tableRepository.findTableById(id);
        if (!existingTable) {
            throw new Error('Table not found');
        }
        await tableRepository.deleteTable(id);
        return existingTable;
    }
};
