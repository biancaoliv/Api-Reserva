const Table = require('../models/Tables');

module.exports = {
    async createTable(table, capacity, availability, restaurantId) {
        const newTable = await Table.create({ table, capacity, availability, restaurantId });
        return newTable;
    },

    async updateTable(id, table, capacity, availability, restaurantId) {
        const existingTable = await Table.findOne({ where: { id } });
        if (!existingTable) {
            throw new Error('Table not found');
        }
        await Table.update(
            { table, capacity, availability, restaurantId },
            { where: { id } }
        );
        return existingTable;
    },

    async listTables() {
        const tables = await Table.findAll();
        return tables;
    },

    async deleteTable(id) {
        const existingTable = await Table.findOne({ where: { id } });
        if (!existingTable) {
            throw new Error('Table not found');
        }
        await Table.destroy({ where: { id } });
        return existingTable;
    }
};