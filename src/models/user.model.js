const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model { };

User.init({
    first_name: { type: Sequelize.STRING, allowNull: false },
    last_name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    phone: { type: Sequelize.STRING, allowNull: false },
    address: { type: Sequelize.STRING },

}, {
    sequelize,
    timestamps: true,
    modelName: 'user',
});

module.exports = User;
