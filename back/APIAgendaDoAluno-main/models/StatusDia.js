const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const StatusDia = sequelize.define('StatusDia', {
  id_status: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Ou false, dependendo de como você gerencia os IDs
  },
  // Renomeie de 'status_dia' para 'descricao' aqui
  descricao: DataTypes.STRING(20), // Ajuste o tamanho conforme necessário
}, {
  timestamps: false,
  freezeTableName: true,
});
module.exports = StatusDia;