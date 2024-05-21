'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable('simpleReservations', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            simple_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            simple_phone: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            starts_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            ends_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            table_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'tables',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            duration_in_minutes: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            guests: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('simpleReservations');
    },
};
