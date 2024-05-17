const { Op } = require('sequelize');
const Reservation = require('../models/Reservations');
const User = require('../models/User');
const Table = require('../models/Tables');

module.exports = {
    async createReservation(reservationDateTime, guests, userId, tableId) {
        const userExists = await User.findByPk(userId);
        const tableExists = await Table.findByPk(tableId);

        if (!userExists || !tableExists) {
            throw new Error('User or table does not exist.');
        }

        const existingReservation = await Reservation.findOne({
            where: {
                tableId,
                reservationDateTime,
            },
        });

        if (existingReservation) {
            throw new Error('The table is already reserved for the specified time.');
        }

        const reservationTable = await Reservation.create({
            reservationDateTime,
            guests,
            userId,
            tableId,
        });

        return reservationTable;
    },

    async updateReservation(id, reservationDateTime, guests, userId, tableId) {
        const existingReservation = await Reservation.findByPk(id);
        if (!existingReservation) {
            throw new Error('Reservation not found.');
        }

        const conflictingReservation = await Reservation.findOne({
            where: {
                tableId,
                reservationDateTime,
                [Op.not]: { id },
            },
        });

        if (conflictingReservation) {
            throw new Error('The table is already reserved for the specified time.');
        }

        await Reservation.update(
            {
                reservationDateTime,
                guests,
                userId,
                tableId,
            },
            { where: { id } }
        );
    },

    async removeReservation(id) {
        const reservation = await Reservation.findOne({ where: { id } });
        if (!reservation) {
            throw new Error('Reservation not found.');
        }
        await Reservation.destroy({ where: { id } });
    },
};
