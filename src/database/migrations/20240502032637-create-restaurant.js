'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('restaurants', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            address: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cellPhone: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            typeOfRestaurant: {
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
        return queryInterface.dropTable('restaurants');
    },
};
