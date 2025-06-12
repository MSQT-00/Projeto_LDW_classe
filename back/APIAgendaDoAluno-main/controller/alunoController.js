const Aluno = require('../models/Aluno');

// Buscar todos os alunos
exports.listarTodos = async (req, res) => {
  try {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  } catch (error) {
    console.error('Erro ao listar alunos:', error);
    res.status(500).json({ mensagem: 'Erro ao listar alunos' });
  }
};

// Buscar aluno por nome
exports.buscarPorNome = async (req, res) => {
  const { nome } = req.query;

  try {
    if (!nome) return res.status(400).json({ mensagem: 'Informe o nome para busca' });

    const alunos = await Aluno.findAll({
      where: {
        nome: {
          [require('sequelize').Op.like]: `%${nome}%`
        }
      }
    });

    res.json(alunos);
  } catch (error) {
    console.error('Erro ao buscar aluno por nome:', error);
    res.status(500).json({ mensagem: 'Erro ao buscar aluno' });
  }
};
