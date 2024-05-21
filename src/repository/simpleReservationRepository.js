const SimpleReservation = require('../models/SimpleReservation');
const { Op } = require('sequelize');  // Importe Op do sequelize

module.exports = {
    async createSimpleReservation(reservationSimpleData) {
        return await SimpleReservation.create(reservationSimpleData);
    },
    async findReservationByTimeAndTable({ startsAt, durationInMinutes, tableId }) {
        const startsAtDate = new Date(startsAt);
        const endsAt = new Date(startsAtDate.getTime() + durationInMinutes * 60000); 
        
        return await SimpleReservation.findOne({
            where: {
                tableId,
                [Op.or]: [
                    {
                        startsAt: { [Op.between]: [startsAtDate, endsAt] },
                    },
                    {
                        endsAt: { [Op.between]: [startsAtDate, endsAt] },
                    },
                    {
                        startsAt: { [Op.lte]: startsAtDate },
                        endsAt: { [Op.gte]: endsAt },
                    }
                ],
            },
        });
    },
    async updateReservation(id, newData) {
        return await SimpleReservation.update(newData, { where: { id }, returning: true, plain: true });
    },
    async deleteReservation(id) {
        return await SimpleReservation.destroy({ where: { id } });
    },
}
