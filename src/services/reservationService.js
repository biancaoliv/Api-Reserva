const reservationRepository = require('../repository/reservationRepository');

module.exports = {
    async createReservation(reservationData) {
        const { reservationDateTime, guests, userId, tableId } = reservationData;

        const endTime = new Date(reservationDateTime);
        endTime.setHours(endTime.getHours() + 4);

        const existingReservation = await reservationRepository.findReservationByTimeAndTable({
            reservationDateTime,
            endTime,
            tableId,
        });

        if (existingReservation) {
            throw new Error('Table not available for the desired time');
        }

        const newReservation = await reservationRepository.createReservation({
            reservationDateTime,
            endTime,
            guests,
            userId,
            tableId,
        });

        return newReservation;
    },

    async updateReservation(id, newData) {
        return await reservationRepository.updateReservation(id, newData);
    },

    async removeReservation(id) {
        return await reservationRepository.removeReservation(id);
    },
};
