const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Aluno_Disciplina = require('./Aluno_Disciplina');

const Nota = sequelize.define('Nota', {
  id_nota: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nota: DataTypes.INTEGER,
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

Nota.belongsTo(Aluno_Disciplina, { foreignKey: 'id_alunodisc' });
Aluno_Disciplina.hasMany(Nota, { foreignKey: 'id_alunodisc' });

module.exports = Nota;
