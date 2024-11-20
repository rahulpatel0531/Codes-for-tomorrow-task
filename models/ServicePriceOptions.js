const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ServicePriceOptions = sequelize.define('ServicePriceOption', {
    service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Duration: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM,
        values: ['Hourly', 'Weekly', 'Monthly'],
    },
});

module.exports = ServicePriceOptions