'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('reservations', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            starts_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            duration_in_minutes: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            guests: {
                type: Sequelize.INTEGER,
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
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
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
        return queryInterface.dropTable('reservations');
    },
};
