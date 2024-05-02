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
            reservationDateTime: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            numberOfPeople: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            tableId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Tables',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('reservations');
    },
};
