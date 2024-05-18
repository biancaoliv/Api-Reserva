const { where } = require('sequelize');
const Table = require('../models/Tables');

module.exports = {
    async createTable(tableData) {
        return await Table.create(tableData);
    },
    async updateTable(id, newData) {
        return await Table.update(newData, { where: { id } });
    },
    async findTableById(id) {
        return await Table.findOne({ where: { id } });
    },
    async listTables() {
        return await Table.findAll();
    },
    async deleteTable(id) {
        return await Table.destroy({ where: { id } });
    },
};
