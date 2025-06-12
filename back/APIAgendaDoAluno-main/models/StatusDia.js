const { DataTypes } = require('sequelize');const sequelize = require('../config/database');
const StatusDia = sequelize.define('StatusDia', {
  id_status: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  status_dia: DataTypes.STRING(20),
}, {
  timestamps: false,
  freezeTableName: true,
});
module.exports = StatusDia;