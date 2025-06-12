const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Professor = require('./Professor');

const Disciplina = sequelize.define('Disciplina', {
  id_disciplina: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_professor: {
    type: DataTypes.INTEGER,
    references: {
      model: Professor,
      key: 'id_professor',
    },
  },
  nome_disciplina: DataTypes.STRING(100),
}, {
  timestamps: false,
  freezeTableName: true,
});

Disciplina.belongsTo(Professor, { foreignKey: 'id_professor' });
Professor.hasMany(Disciplina, { foreignKey: 'id_professor' });

module.exports = Disciplina;
