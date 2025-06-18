const Anotacao = require('../models/Anotacao');
const Aluno = require('../models/Aluno');

// Criar anotação
exports.criar = async (req, res) => {
  const { id_aluno, data_anotacao, anotacao } = req.body;

  try {
    const novaAnotacao = await Anotacao.create({
      id_aluno,
      data_anotacao,
      anotacao
    });

    res.status(201).json(novaAnotacao);
  } catch (error) {
    console.error('Erro ao criar anotação:', error);
    res.status(500).json({ mensagem: 'Erro ao criar anotação' });
  }
};

// Alterar anotação
exports.atualizar = async (req, res) => {
  const { id } = req.params;
  const { id_aluno, data_anotacao, anotacao } = req.body;

  try {
    const anot = await Anotacao.findByPk(id);
    if (!anot) return res.status(404).json({ mensagem: 'Anotação não encontrada' });

    anot.id_aluno = id_aluno;
    anot.data_anotacao = data_anotacao;
    anot.anotacao = anotacao;

    await anot.save();
    res.json(anot);
  } catch (error) {
    console.error('Erro ao atualizar anotação:', error);
    res.status(500).json({ mensagem: 'Erro ao atualizar anotação' });
  }
};

// Buscar anotação por ID
exports.buscarPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const anot = await Anotacao.findByPk(id, {
      include: Aluno
    });

    if (!anot) return res.status(404).json({ mensagem: 'Anotação não encontrada' });

    res.json(anot);
  } catch (error) {
    console.error('Erro ao buscar anotação:', error);
    res.status(500).json({ mensagem: 'Erro ao buscar anotação' });
  }
};

// Listar todas
exports.listarTodas = async (req, res) => {
  try {
    const anotacoes = await Anotacao.findAll({
      include: Aluno,
      order: [['data_anotacao', 'DESC']]
    });

    res.json(anotacoes);
  } catch (error) {
    console.error('Erro ao listar anotações:', error);
    res.status(500).json({ mensagem: 'Erro ao listar anotações' });
  }
};
