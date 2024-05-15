const Reservation = require('../models/Reservations');
const User = require('../models/User');
const Table = require('../models/Tables');

module.exports = {
    async createReservation(req, res) {
        try {
            const { reservationDateTime, guests, userId, tableId } = req.body;

            const userExists = await User.findByPk(userId);
            const tableExistis = await Table.findByPk(tableId);

            if(!userExists || !tableExistis) {
                return res.status(400).json({ error: 'User or table does not exist.' });
            }

            const reservationTable = await Reservation.create({
                reservationDateTime,
                guests,
                userId,
                tableId,
            });
            return res.status(201).json({
                message: 'Reservation created successfully!',
                reservationTable,
            });
        } catch (error) {
            return res
                .status(500)
                .json({ error: 'Error creating reservation.' });
        }
    },
};
