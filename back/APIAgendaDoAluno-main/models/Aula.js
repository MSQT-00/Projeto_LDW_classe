const { DataTypes } = require('sequelize');const sequelize = require('../config/database');
const Aula = sequelize.define('Aula', {
  id_aula: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  numero_aula: DataTypes.STRING(100),
}, {
  timestamps: false,
  freezeTableName: true,
});
module.exports = Aula;