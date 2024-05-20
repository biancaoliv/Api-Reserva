'use strict';

const { sequelize } = require('..');

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
            reservation_Date_Time: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            end_Time: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            guests: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            table_Id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'tables',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            user_Id: {
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
