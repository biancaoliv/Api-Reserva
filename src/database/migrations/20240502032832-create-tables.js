'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('tables', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            table: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            restaurant_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'restaurants',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            capacity: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            availability: {
                type: Sequelize.STRING,
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
        return queryInterface.dropTable('tables');
    },
};
