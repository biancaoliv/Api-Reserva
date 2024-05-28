const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database/index');

class Reservation extends Model {}
Reservation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        startsAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        durationInMinutes:{ 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        guests: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tableId:{ 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
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