/*const mysql = require("mysql2");

const pool = mysql.createPool({
    host: '127.0.0.1', 
    user: 'root',
    database: 'node-complete', 
    password: 'hmlDoUrden'
});

module.exports = pool.promise();*/

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root', 'hmlDoUrden', 
{ dialect: 'mysql', host: '127.0.0.1'});

module.exports = sequelize;