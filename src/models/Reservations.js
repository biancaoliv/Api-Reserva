const { Model, DataTypes } = require('sequelize');

class Reservation extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                reservationDateTime: DataTypes.DATE,
                numberOfPeople: DataTypes.INTEGER,
                tableId: DataTypes.INTEGER,
            },
            {
                sequelize,
                modelName: 'Reservation',
                tableName: 'reservations',
                timestamps: true,
            },
        );
    }
        static associate(models) {
            this.belongsTo(models.User, { foreignKey: 'userId' });
            this.belongsTo(models.Table, { foreignKey: 'tableId' });
        }
}

module.exports = Reservation;
