const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Professor = sequelize.define('Professor', {
  id_professor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_professor: DataTypes.STRING(100),
  email_professor: DataTypes.STRING(100),
}, {
  timestamps: false,
  freezeTableName: true,
});

module.exports = Professor;
