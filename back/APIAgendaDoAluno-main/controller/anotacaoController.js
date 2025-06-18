const Anotacao = require('../models/Anotacao');
const Aluno = require('../models/Aluno');

// Criar uma nova anotação
exports.criar = async (req, res) => {
  const { id_aluno, data_anotacao, anotacao } = req.body;

  try {
    if (!id_aluno || !data_anotacao || !anotacao) {
      return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }

    const novaAnotacao = await Anotacao.create({
      id_aluno,
      data_anotacao,
      anotacao,
    });

    res.status(201).json(novaAnotacao);
  } catch (error) {
    console.error('Erro ao criar anotação:', error);
    res.status(500).json({ mensagem: 'Erro ao criar anotação' });
  }
};

// Atualizar uma anotação existente
exports.atualizar = async (req, res) => {
  const { id } = req.params;
  const { id_aluno, data_anotacao, anotacao } = req.body;

  try {
    const anotacaoExistente = await Anotacao.findByPk(id);

    if (!anotacaoExistente) {
      return res.status(404).json({ mensagem: 'Anotação não encontrada' });
    }

    await anotacaoExistente.update({
      id_aluno,
      data_anotacao,
      anotacao,
    });

    res.json(anotacaoExistente);
  } catch (error) {
    console.error('Erro ao atualizar anotação:', error);
    res.status(500).json({ mensagem: 'Erro ao atualizar anotação' });
  }
};

// Buscar uma anotação por ID
exports.buscarPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const anotacao = await Anotacao.findByPk(id, {
      include: {
        model: Aluno,
        attributes: ['id_aluno', 'nome'],
      },
    });

    if (!anotacao) {
      return res.status(404).json({ mensagem: 'Anotação não encontrada' });
    }

    res.json(anotacao);
  } catch (error) {
    console.error('Erro ao buscar anotação:', error);
    res.status(500).json({ mensagem: 'Erro ao buscar anotação' });
  }
};

// Listar todas as anotações
exports.listarTodas = async (req, res) => {
  try {
    const anotacoes = await Anotacao.findAll({
      include: {
        model: Aluno,
        attributes: ['id_aluno', 'nome'],
      },
      order: [['data_anotacao', 'DESC']],
    });

    res.json(anotacoes);
  } catch (error) {
    console.error('Erro ao listar anotações:', error);
    res.status(500).json({ mensagem: 'Erro ao listar anotações' });
  }
};

exports.excluir = async (req, res) => {
  const { id } = req.params; // O ID da anotação virá da URL

  // ADICIONE ESTAS LINHAS:
  console.log(`[BACKEND] Recebida requisição DELETE para anotação com ID: ${id}`);

  try {
    const anotacaoExistente = await Anotacao.findByPk(id);

    if (!anotacaoExistente) {
      // ADICIONE ESTA LINHA:
      console.log(`[BACKEND] Anotação com ID ${id} NÃO encontrada no banco de dados.`);
      return res.status(404).json({ mensagem: 'Anotação não encontrada' });
    }

    await anotacaoExistente.destroy(); // Método para excluir do banco de dados

    // ADICIONE ESTA LINHA:
    console.log(`[BACKEND] Anotação com ID ${id} excluída com sucesso.`);
    res.status(200).json({ mensagem: 'Anotação excluída com sucesso!' });
  } catch (error) {
    console.error('[BACKEND] Erro ao excluir anotação:', error);
    res.status(500).json({ mensagem: 'Erro ao excluir anotação' });
  }
};
