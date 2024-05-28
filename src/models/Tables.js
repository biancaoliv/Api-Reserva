const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database/index');

class Tables extends Model {}
Tables.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        table: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        availability: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        restaurantId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },

    {
        sequelize,
        modelName: 'Table',
        tableName: 'tables',
        timestamps: true,
    },
);

Tables.associate = function (models) {
    this.belongsTo(models.Restaurant, {
        foreignKey: 'restaurantId',
        onDelete: 'CASCADE',
    });
};

module.exports = Tables;