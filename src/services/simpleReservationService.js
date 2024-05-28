const simpleReservationRepository = require('../repository/simpleReservationRepository');

module.exports = {
    async createSimpleReservation(reservationSimpleData) {
        const { startsAt, simpleName, simplePhone, guests, tableId } =
            reservationSimpleData;

        if (!simpleName || !simplePhone) {
            throw new Error(
                'Name and phone number are required for a minimum reservation',
            );
        }

        const startsAtDate = new Date(startsAt);
        const endsAtDate = new Date(startsAtDate.getTime() + 4 * 60 * 60000);
        const durationInMinutes = (endsAtDate - startsAtDate) / (1000 * 60);

        const existingReservation =
            await simpleReservationRepository.findReservationByTimeAndTable({
                startsAt: startsAtDate,
                durationInMinutes,
                tableId,
            });

        if (existingReservation) {
            throw new Error('Table not available for the desired time');
        }

        const newReservationSimple =
            await simpleReservationRepository.createSimpleReservation({
                startsAt: startsAtDate,
                endsAt: endsAtDate,
                durationInMinutes,
                guests,
                tableId,
                simpleName,
                simplePhone,
            });

        return newReservationSimple;
    },
};