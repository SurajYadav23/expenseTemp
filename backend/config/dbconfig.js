const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense', 'root', 'Sk@123123', {
    host: 'localhost',
    dialect: 'mysql',

});

module.exports = sequelize;