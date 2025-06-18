const { DataTypes } = require('sequelize');const sequelize = require('../config/database');const StatusDia = require('./StatusDia');const Aluno = require('./Aluno');
const Calendario = sequelize.define('Calendario', {
  id_calendario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_status: {
    type: DataTypes.INTEGER,
    references: {
      model: StatusDia,
      key: 'id_status',
    },
  },
  id_aluno: {
    type: DataTypes.INTEGER,
    references: {
      model: Aluno,
      key: 'id_aluno',
    },
  },
  datas: DataTypes.DATEONLY,
}, {
  timestamps: false,
  freezeTableName: true,
});
Calendario.belongsTo(StatusDia, { foreignKey: 'id_status' });StatusDia.hasMany(Calendario, { foreignKey: 'id_status' });
Calendario.belongsTo(Aluno, { foreignKey: 'id_aluno' });Aluno.hasMany(Calendario, { foreignKey: 'id_aluno' });
module.exports = Calendario;