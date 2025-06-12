const { DataTypes } = require('sequelize');const sequelize = require('../config/database');const Aluno = require('./Aluno');
const Anotacao = sequelize.define('Anotacao', {
  id_anotacao: {
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
  data_anotacao: DataTypes.DATEONLY,
  anotacao: DataTypes.STRING(155),
}, {
  timestamps: false,
  freezeTableName: true,
});
Anotacao.belongsTo(Aluno, { foreignKey: 'id_aluno' });Aluno.hasMany(Anotacao, { foreignKey: 'id_aluno' });
module.exports = Anotacao;