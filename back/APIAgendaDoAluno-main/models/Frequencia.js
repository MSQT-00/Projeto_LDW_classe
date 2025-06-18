const { DataTypes } = require('sequelize');const sequelize = require('../config/database');const Aluno_Disciplina = require('./Aluno_Disciplina');
const Frequencia = sequelize.define('Frequencia', {
  id_frequencia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  frequencia: DataTypes.INTEGER,
  dataF: DataTypes.DATEONLY,
  id_alunodisc: {
    type: DataTypes.INTEGER,
    references: {
      model: Aluno_Disciplina,
      key: 'id_alunodisc',
    },
  },
}, {
  timestamps: false,
  freezeTableName: true,
});
Frequencia.belongsTo(Aluno_Disciplina, { foreignKey: 'id_alunodisc' });Aluno_Disciplina.hasMany(Frequencia, { foreignKey: 'id_alunodisc' });
module.exports = Frequencia;