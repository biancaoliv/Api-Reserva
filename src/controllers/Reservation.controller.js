const { Op } = require('sequelize');
const Reservation = require('../models/Reservations');
const User = require('../models/User');
const Table = require('../models/Tables');

module.exports = {
    async createReservation(req, res) {
        try {
            const { reservationDateTime, guests, userId, tableId } = req.body;

            const userExists = await User.findByPk(userId);
            const tableExistis = await Table.findByPk(tableId);

            if (!userExists || !tableExistis) {
                return res
                    .status(400)
                    .json({ error: 'User or table does not exist.' });
            }
            const existingReservation = await Reservation.findOne({
                where: {
                    tableId,
                    reservationDateTime,
                },
            });

            if (existingReservation) {
                return res.status(400).json({
                    error: 'The table is already reserved for the specified time.',
                });
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
    async updateReservation(req, res) {
        try {
            const { id } = req.params;
            const { reservationDateTime, guests, userId, tableId } = req.body;

            const existingReservation = await Reservation.findByPk(id);
            if (!existingReservation) {
                return res.status(404).json({ error: 'Reservation not found' });
            }
            const conflictingReservation = await Reservation.findOne({
                where: {
                    tableId,
                    reservationDateTime,
                    [Op.not]: { id },
                },
            });
            if (conflictingReservation) {
                return res.status(400).json({
                    error: 'The table is already reserved for the specified time.',
                });
            }

            await Reservation.update(
                {
                    reservationDateTime,
                    guests,
                    userId,
                    tableId,
                },
                { where: { id } },
            );
            res.status(202).json({
                message: 'Reservation updated successfully.',
            });
        } catch (error) {
            return res
                .status(500)
                .json({ error: 'Error updating reservation.' });
        }
    },
    async removeReservation(req, res) {
        try {
            const { id } = req.params;
            const reservation = await Reservation.findOne({ where: { id } });
            if (!reservation) {
                return res
                    .status(404)
                    .json({ message: 'Reservation not found' });
            }
            await Reservation.destroy({ where: { id } });
            return res
                .status(202)
                .json({ message: 'Reservation deleted successfully' });
        } catch (error) {
            res.status(500).json({ error });
        }
    },
};
