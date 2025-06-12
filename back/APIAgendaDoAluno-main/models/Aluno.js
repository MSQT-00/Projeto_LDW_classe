const { DataTypes } = require('sequelize');const sequelize = require('../config/database');
const Aluno = sequelize.define('Aluno', {
  id_aluno: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ra: DataTypes.STRING(200),
  nome: DataTypes.STRING(100),
  email: DataTypes.STRING(100),
  instituicao: DataTypes.STRING(100),
  senha: DataTypes.STRING(255),
  contato: DataTypes.STRING(20),
  curso: DataTypes.STRING(100),
  nivel: DataTypes.STRING(100),
  idade: DataTypes.INTEGER,
}, {
  timestamps: false,
  freezeTableName: true,
});
module.exports = Aluno;