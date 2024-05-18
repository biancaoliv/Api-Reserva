const reservationRepository = require('../repository/reservationRepository');

module.exports = {
    async createReservation(reservationData) {
        return await reservationRepository.createReservation(reservationData);
    },

    async updateReservation(id, newData) {
        return await reservationRepository.updateReservation(id, newData);
    },

    async removeReservation(id) {
        return await reservationRepository.removeReservation(id);
    }
};
