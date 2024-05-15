const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database/index');

class Restaurant extends Model {}
Restaurant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Restaurant',
        tableName: 'restaurants',
        timestamps: true,
    },
);

Restaurant.associate = function (models) {
    this.hasMany(models.Table, { foreignKey: 'restaurantId' });
};

module.exports = Restaurant;
