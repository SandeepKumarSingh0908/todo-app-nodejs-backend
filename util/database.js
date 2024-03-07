const Sequelize = require('sequelize');
const config = require("../config/configResolver");

const sequelize = new Sequelize(config.config.db_name, config.config.db_username, config.config.db_password, {
    host: config.config.db_host,
    dialect: config.config.db_dialect
});

module.exports = sequelize;