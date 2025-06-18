const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Aluno = require('./Aluno');
const Disciplina = require('./Disciplina');

const Aluno_Disciplina = sequelize.define('Aluno_Disciplina', {
  id_alunodisc: {
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
  id_disciplina: {
    type: DataTypes.INTEGER,
    references: {
      model: Disciplina,
      key: 'id_disciplina',
    },
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

Aluno_Disciplina.belongsTo(Aluno, { foreignKey: 'id_aluno' });
Aluno.hasMany(Aluno_Disciplina, { foreignKey: 'id_aluno' });

Aluno_Disciplina.belongsTo(Disciplina, { foreignKey: 'id_disciplina' });
Disciplina.hasMany(Aluno_Disciplina, { foreignKey: 'id_disciplina' });

module.exports = Aluno_Disciplina;
