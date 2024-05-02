const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                name: DataTypes.STRING,
                password: DataTypes.STRING,
                email: DataTypes.STRING,
            },
            {
                sequelize,
                modelName: 'User', 
                tableName: 'users', 
                timestamps: true, 
            },
        );
    }
}

module.exports = User;
