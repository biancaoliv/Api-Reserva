const Sequelize = require('sequelize');
const configDB = require('../config/database');
const { ENV } = require('../config/constants');
const config = configDB[ENV] || configDB.development;

const sequelize = new Sequelize(config);


module.exports = {sequelize};
