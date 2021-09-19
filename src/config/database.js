const Sequelize = require('sequelize');
const {db} = require('./config');

const sequelize = new Sequelize(db.dbname, db.username, db.password, {
    host: db.host,
    dialect: db.dialect
});

module.exports = sequelize;