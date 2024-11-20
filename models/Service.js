const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Service = sequelize.define('Service', {

    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    service_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM,
        values: ['Normal', 'VIP'],
    },
    price_options:{
        type: DataTypes.JSON,
        allowNull: false,
    }
});

module.exports = Service