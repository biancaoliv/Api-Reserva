const { Sequelize } = require('sequelize');
require('dotenv').config();

module.exports = {
    development: {
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        define: {
            timestamp: true,
            underscored: true,
        },
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        port: process.env.DB_PORT,
        define: {
            timestamps: true,
            underscored: true,
        },
    },
};