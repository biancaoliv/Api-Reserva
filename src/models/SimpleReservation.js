const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database/index');

class SimpleReservation extends Model {}
SimpleReservation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        simpleName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        simplePhone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startsAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        endsAt: {
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
        tableId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tables',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },

    },
    {
        sequelize,
        modelName: 'SimpleReservation',
        tableName: 'simpleReservations',
        timestamps: true,
    },
);

SimpleReservation.associate = function (models) {
    this.belongsTo(models.Table, { foreignKey: 'tableId', onDelete: 'CASCADE' });
};

module.exports = SimpleReservation;