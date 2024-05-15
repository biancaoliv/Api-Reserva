const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database/index');

class Tables extends Model {}
Tables.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        table: DataTypes.STRING,
        capacity: DataTypes.INTEGER,
        availability: DataTypes.STRING,
        restaurantId: DataTypes.INTEGER,
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
