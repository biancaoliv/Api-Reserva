const { Op } = require('sequelize');
const { sequelize } = require('../database');
const Reservation = require('../models/Reservations');

module.exports = {
    async createReservation(reservationData) {
        return await Reservation.create(reservationData);
    },
    async createSimpleReservation(reservationSimpleData) {
        return await Reservation.create(reservationSimpleData)
    },

    async updateReservation(id, newData) {
        return await Reservation.findByIdAndUpdate(id, newData, { new: true });
    },

    async deleteReservation(id) {
        return await Reservation.findByIdAndDelete(id);
    },
}
//     async checkIfTableIsAlreadyReserved({tableId}) {
//          return Reservation.findOne({
//             where: {
//                 tableId,
//                 startsAt: {
//                     [Op.gte]: sequelize.literal('DATE_SUB(CURDATE(), INTERVAL "durationInMinutes" MINUTES')
//                 }
//             }
//          })
//     },

//     async findReservationByTimeAndTable({ startsAt, tableId }) {
//        return await sequelize.query(`
//        select * from reservation r
//        where r."tableId" = :tableId
//        and r."reservationStartDate" > DATE_SUB(CURDATE(), INTERVAL 4 HOURS)`, {
//         model: Reservation,
//         type: QueryType.SELECT,
//         replacements: {
//             tableId
//         }
//        })
//     },
// }

