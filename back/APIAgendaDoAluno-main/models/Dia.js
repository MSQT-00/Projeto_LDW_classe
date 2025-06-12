const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Dia = sequelize.define('Dia', {
  id_dia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  dia_semana: DataTypes.STRING(100),
}, {
  timestamps: false,
  freezeTableName: true,
});

module.exports = Dia;
