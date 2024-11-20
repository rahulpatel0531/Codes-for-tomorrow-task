const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            defaultValue:'admin@codesfortomorrow.com'
            // allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            defaultValue:'Admin123!@#'
            // allowNull: false,
        },
    },
);

module.exports = User
