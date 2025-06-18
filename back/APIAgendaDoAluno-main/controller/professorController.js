const Professor = require('../models/Professor');

exports.buscarPorNome = async (req, res) => {
  const { nome } = req.query;

  if (!nome) {
    return res.status(400).json({ mensagem: 'Nome do professor é obrigatório' });
  }

  try {
    const professores = await Professor.findAll({
      where: {
        nome_professor: {
          [require('sequelize').Op.like]: `%${nome}%`,
        },
      },
    });

    res.json(professores);
  } catch (error) {
    console.error('Erro ao buscar professor:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};
