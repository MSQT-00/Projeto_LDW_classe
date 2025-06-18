const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Aluno_Disciplina = require('./Aluno_Disciplina');
const Dia = require('./Dia');
const Aula = require('./Aula');

const Horario = sequelize.define('Horario', {
  id_horario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_alunodisc: {
    type: DataTypes.INTEGER,
    references: {
      model: Aluno_Disciplina,
      key: 'id_alunodisc',
    },
  },
  id_dia: {
    type: DataTypes.INTEGER,
    references: {
      model: Dia,
      key: 'id_dia',
    },
  },
  id_aula: {
    type: DataTypes.INTEGER,
    references: {
      model: Aula,
      key: 'id_aula',
    },
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

Horario.belongsTo(Aluno_Disciplina, { foreignKey: 'id_alunodisc' });
Aluno_Disciplina.hasMany(Horario, { foreignKey: 'id_alunodisc' });

Horario.belongsTo(Dia, { foreignKey: 'id_dia' });
Dia.hasMany(Horario, { foreignKey: 'id_dia' });

Horario.belongsTo(Aula, { foreignKey: 'id_aula' });
Aula.hasMany(Horario, { foreignKey: 'id_aula' });

module.exports = Horario;
