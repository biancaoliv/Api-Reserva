const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database/index');

class Reservation extends Model {}
Reservation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        reservationDateTime: DataTypes.DATE,
        guests: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        tableId: DataTypes.INTEGER,
        endTime: DataTypes.DATE,
    },
    {
        sequelize,
        modelName: 'Reservation',
        tableName: 'reservations',
        timestamps: true,
    },
);

Reservation.associate = function (models) {
    this.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
    this.belongsTo(models.Table, {
        foreignKey: 'tableId',
        onDelete: 'CASCADE',
    });
};

module.exports = Reservation;
