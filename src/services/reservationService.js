const reservationRepository = require('../repository/reservationRepository');

module.exports = {
    async createReservation(reservationData) {
        const { startsAt, guests, userId, tableId } = reservationData;

        const startsAtDate = new Date(startsAt);
        const endsAtDate = new Date(startsAt);
        endsAtDate.setHours(endsAtDate.getHours() + 4);
        const durationInMinutes = (endsAtDate - startsAtDate) / (1000 * 60);

        const existingReservation =
            await reservationRepository.findReservationByTimeAndTable({
                startsAt,
                durationInMinutes,
                tableId,
            });

        if (existingReservation) {
            throw new Error('Table not available for the desired time');
        }

        const newReservation = await reservationRepository.createReservation({
            startsAt,
            durationInMinutes,
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
