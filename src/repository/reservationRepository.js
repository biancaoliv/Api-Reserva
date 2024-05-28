const Reservation = require('../models/Reservations');
const { Op } = require('sequelize');

module.exports = {
    async createReservation(reservationData) {
        return await Reservation.create(reservationData);
    },
    async createSimpleReservation(reservationSimpleData) {
        return await Reservation.create(reservationSimpleData);
    },
    async findReservationByTimeAndTable({
        startsAt,
        durationInMinutes,
        tableId,
    }) {
        return await Reservation.findOne({
            where: {
                tableId,
                startsAt: { [Op.lte]: startsAt },
                durationInMinutes: { [Op.gte]: durationInMinutes },
            },
        });
    },

    async updateReservation(id, newData) {
        return await Reservation.update(id, newData, { new: true });
    },

    async deleteReservation(id) {
        return await Reservation.destroy(id);
    },
};