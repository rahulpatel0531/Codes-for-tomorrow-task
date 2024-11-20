
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('code_for_tomorow_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    logging:false
});

module.exports = sequelize;