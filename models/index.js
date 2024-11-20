const { Sequelize, Model } = require('sequelize');
const sequelize = require('../config/db')

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

//  Add Schema to db object
db.users = require('./User')
db.categories = require('./Category')
db.services = require('./Service')
db.servicePriceOprion = require('./ServicePriceOptions')

module.exports = db;

