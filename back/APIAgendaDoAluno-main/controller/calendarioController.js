const Calendario = require('../models/Calendario');
const Aluno = require('../models/Aluno');
const StatusDia = require('../models/StatusDia');

// Listar todos
exports.listarTodos = async (req, res) => {
  try {
    const calendarios = await Calendario.findAll({
      include: [Aluno, StatusDia]
    });
    res.json(calendarios);
  } catch (error) {
    console.error('Erro ao listar calendário:', error);
    res.status(500).json({ mensagem: 'Erro ao listar calendário' });
  }
};

// Buscar por ID
exports.buscarPorId = async (req, res) => {
  try {
    const calendario = await Calendario.findByPk(req.params.id, {
      include: [Aluno, StatusDia]
    });

    if (!calendario) {
      return res.status(404).json({ mensagem: 'Registro não encontrado' });
    }

    res.json(calendario);
  } catch (error) {
    console.error('Erro ao buscar por ID:', error);
    res.status(500).json({ mensagem: 'Erro ao buscar registro' });
  }
};

// Criar
exports.criar = async (req, res) => {
  const { id_status, id_aluno, datas } = req.body;

  try {
    const novo = await Calendario.create({ id_status, id_aluno, datas });
    res.status(201).json(novo);
  } catch (error) {
    console.error('Erro ao criar registro:', error);
    res.status(500).json({ mensagem: 'Erro ao criar registro' });
  }
};

// Atualizar
exports.atualizar = async (req, res) => {
  try {
    const calendario = await Calendario.findByPk(req.params.id);

    if (!calendario) {
      return res.status(404).json({ mensagem: 'Registro não encontrado' });
    }

    await calendario.update(req.body);
    res.json(calendario);
  } catch (error) {
    console.error('Erro ao atualizar registro:', error);
    res.status(500).json({ mensagem: 'Erro ao atualizar' });
  }
};

// Deletar
exports.deletar = async (req, res) => {
  try {
    const calendario = await Calendario.findByPk(req.params.id);

    if (!calendario) {
      return res.status(404).json({ mensagem: 'Registro não encontrado' });
    }

    await calendario.destroy();
    res.json({ mensagem: 'Registro excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar registro:', error);
    res.status(500).json({ mensagem: 'Erro ao excluir' });
  }
};
