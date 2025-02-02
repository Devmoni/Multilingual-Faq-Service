const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const FAQ = sequelize.define('FAQ', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true, 
    allowNull: false
  },
  question: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  answer: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  language: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
}, {
  tableName: 'FAQs',
  timestamps: true, // Ensure timestamps are handled
});

module.exports = FAQ;
