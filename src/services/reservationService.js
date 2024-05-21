const reservationRepository = require('../repository/reservationRepository');

module.exports = {
    async createReservation(reservationData) {
        const { startsAt, guests, userId, tableId } = reservationData;

        const endTime = new Date(startsAt);
        endTime.setHours(endTime.getHours() + 4);

        const existingReservation =
            await reservationRepository.findReservationByTimeAndTable({
                startsAt,
                endTime,
                tableId,
            });

        if (existingReservation) {
            throw new Error('Table not available for the desired time');
        }

        const newReservation = await reservationRepository.createReservation({
            startsAt,
            endTime,
            guests,
            userId,
            tableId,
        });

        return newReservation;
    },
    async createSimpleReservation(reservationSimpleData) {
        const { startsAt, guests, userId, tableId, simpleName, simplePhone } =
            reservationSimpleData;
            if (!simpleName || !simplePhone) {
                throw new Error('Name and phone number are required for a minimum reservation');
            }
            const newReservationSimple = await reservationRepository.createSimpleReservation({
                startsAt,
                guests,
                userId,
                tableId,
                simpleName,
                simplePhone,
            });
    
            return newReservationSimple;
    },

    async updateReservation(id, newData) {
        return await reservationRepository.updateReservation(id, newData);
    },

    async removeReservation(id) {
        return await reservationRepository.removeReservation(id);
    },
};
