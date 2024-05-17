const reservationService = require('../services/reservationService');

module.exports = {
    async createReservation(req, res) {
        const { reservationDateTime, guests, userId, tableId } = req.body;
        const reservationTable = await reservationService.createReservation(
            reservationDateTime,
            guests,
            userId,
            tableId,
        );
        return {
            message: 'Reservation created successfully!',
            reservationTable,
        };
    },

    async updateReservation(req, res) {
        const { id } = req.params;
        const { reservationDateTime, guests, userId, tableId } = req.body;
        await reservationService.updateReservation(
            id,
            reservationDateTime,
            guests,
            userId,
            tableId,
        );
        return {
            message: 'Reservation updated successfully.',
        };
    },

    async removeReservation(req, res) {
        const { id } = req.params;
        await reservationService.removeReservation(id);
        return {
            message: 'Reservation deleted successfully.',
        };
    },
};
