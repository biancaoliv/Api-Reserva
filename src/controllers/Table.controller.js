const Table = require('../models/Tables');

module.exports = {
    async createTable(req, res) {
        try {
            const { table, capacity, availability, restaurantId } = req.body;
            const tableRestaurant = await Table.create({
                table,
                capacity,
                availability,
                restaurantId,
            });
            return res
                .status(201)
                .json({ message: 'Table created.', tableRestaurant });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updateTable(req, res) {
        try {
            const { id } = req.params;
            const { table, capacity, availability, restaurantId } = req.body;

            const tableUpdate = await Table.findOne({ where: { id } });

            if (!tableUpdate) {
                res.status(401).json({
                    message: 'No tables found.',
                });
            } else {
                const tableUpdate = await Table.update(
                    { table, capacity, availability, restaurantId },
                    { where: { id } },
                );
                res.status(202).json({
                    message: 'Table updated successfully.',
                });
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    async listTables(req, res) {
        try {
            const tables = await Table.findAll();
            if(!tables) {
                res.status(404).json({
                    message: 'Tables not found',
                });
            }
            res.status(200).json({ tables });
        } catch (error) {
            res.status(401).json({ error });

        }
    },
    async deleteTable(req, res) {
        try {
            const { id } = req.params
            const tables = await Table.findOne({ where: { id }})

            if(!tables) {
                return res.status(404).json({ message: 'Table not found' })
            } else {
                await Table.destroy({ where: { id }})
                return res.status(200).json({ message: 'Table deleted sucessfully'})
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};
