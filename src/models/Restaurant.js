const { Model, DataTypes } = require('sequelize');

class Restaurant extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                name: DataTypes.STRING,
                address: DataTypes.STRING,
                cellPhone: DataTypes.STRING,
                typeOfRestaurant: DataTypes.STRING,
            },
            {
                sequelize,
                modelName: 'Restaurant',
                tableName: 'restaurants',
                timestamps: true,
            },
        );
    }
    static associate(models) {
        this.hasMany(models.Table, { foreignKey: 'restaurantId' });
    }
}

module.exports = Restaurant;
