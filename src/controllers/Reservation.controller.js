const reservationService = require('../services/reservationService');

module.exports = {
    async createReservation(req, res) {
        try {
            const { reservationDateTime, guests, userId, tableId } = req.body;
            const reservationTable = await reservationService.createReservation(
                reservationDateTime,
                guests,
                userId,
                tableId,
            );
            return res.status(201).json({
                message: 'Reservation created successfully!',
                reservationTable,
            });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async updateReservation(req, res) {
        try {
            const { id } = req.params;
            const { reservationDateTime, guests, userId, tableId } = req.body;
            await reservationService.updateReservation(
                id,
                reservationDateTime,
                guests,
                userId,
                tableId,
            );
            return res.status(202).json({
                message: 'Reservation updated successfully.',
            });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async removeReservation(req, res) {
        try {
            const { id } = req.params;
            await reservationService.removeReservation(id);
            return res
                .status(202)
                .json({ message: 'Reservation deleted successfully.' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
};
