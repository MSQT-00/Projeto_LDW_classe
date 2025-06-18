const { DataTypes } = require('sequelize');const sequelize = require('../config/database');const Aluno = require('./Aluno');
const Colega = sequelize.define('Colega', {
  id_colega: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_aluno: {
    type: DataTypes.INTEGER,
    references: {
      model: Aluno,
      key: 'id_aluno',
    },
  },
}, {
  timestamps: false,
  freezeTableName: true,
});
Colega.belongsTo(Aluno, { foreignKey: 'id_aluno' });Aluno.hasMany(Colega, { foreignKey: 'id_aluno' });
module.exports = Colega;