const reservationService = require('../services/reservationService');

module.exports = {
    createReservation: async (req, res) => {
        const { startsAt, guests, userId, tableId } = req.body;
        return await reservationService.createReservation({
            startsAt,
            guests,
            userId,
            tableId,
        });
    },

    updateReservation: async (req, res) => {
        const { id } = req.params;
        const { startsAt, guests, userId, tableId } = req.body;
        await reservationService.updateReservation(id, {
            startsAt,
            guests,
            userId,
            tableId,
        });
        return {
            message: 'Reservation updated successfully.',
        };
    },

    deleteReservation: async (req, res) => {
        const { id } = req.params;
        await reservationService.deleteReservation(id);
        return {
            message: 'Reservation deleted successfully.',
        };
    },
};
