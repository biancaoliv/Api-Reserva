const simpleReservationService = require('../services/simpleReservationService');

module.exports = {
    createSimpleReservation: async (req, res) => {
        const { startsAt, guests, durationInMinutes, tableId, simpleName, simplePhone } = req.body;
        
            const newReservation = await simpleReservationService.createSimpleReservation({
                startsAt,
                guests,
                durationInMinutes,
                tableId,
                simpleName,
                simplePhone,
            });
            return newReservation
    },
};
