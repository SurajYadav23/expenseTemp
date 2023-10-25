const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbconfig');

const Item = sequelize.define('Item', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    desc: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.STRING,
    },
    quantity: {
        type: DataTypes.INTEGER,
    }

});

module.exports = Item;