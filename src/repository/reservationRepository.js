const Reservation = require('../models/Reservations');

module.exports = {
    async createReservation(reservationData) {
        return await Reservation.create(reservationData);
    },

    async updateReservation(id, newData) {
        return await Reservation.findByIdAndUpdate(id, newData, { new: true });
    },

    async deleteReservation(id) {
        return await Reservation.findByIdAndDelete(id);
    },

    async findReservationByTimeAndTable({
        reservationDateTime,
        endTime,
        tableId,
    }) {
        return await Reservation.findOne({
            where: {
                tableId,
                reservationDateTime: {
                    $lte: endTime,
                },
                endTime: {
                    $gte: reservationDateTime,
                },
            },
        });
    },
};
