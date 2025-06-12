module.exports = (sequelize, DataTypes) => {
  const Falta = sequelize.define('Falta', {
    alunoId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    turmaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    motivo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Falta;
};
