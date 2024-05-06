const { Model, DataTypes } = require('sequelize');

class Tables extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                tableNumber: DataTypes.STRING,
                capacity: DataTypes.INTEGER,
                availability: DataTypes.STRING,
            },
            {
                sequelize,
                modelName: 'Table',
                tableName: 'tables',
                timestamps: true,
            },
        );
    }

    static associate(models) {
        this.belongsTo(models.Restaurant, {
            foreignKey: 'restaurantId',
            onDelete: 'CASCADE',
        });
    }
}

module.exports = Tables;