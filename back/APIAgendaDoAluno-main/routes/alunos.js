const express = require('express');
const router = express.Router();
const Aluno = require('../models/Aluno');

// 🔹 GET - Listar todos os alunos
router.get('/', async (req, res) => {
  try {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 GET - Obter um aluno por ID
router.get('/:id', async (req, res) => {
  try {
    const aluno = await Aluno.findByPk(req.params.id);
    if (!aluno) return res.status(404).json({ message: 'Aluno não encontrado' });
    res.json(aluno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 POST - Criar novo aluno
router.post('/', async (req, res) => {
  try {
    const aluno = await Aluno.create(req.body);
    res.status(201).json(aluno);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔹 PUT - Atualizar aluno por ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Aluno.update(req.body, {
      where: { id_aluno: req.params.id }
    });

    if (!updated) return res.status(404).json({ message: 'Aluno não encontrado' });

    const alunoAtualizado = await Aluno.findByPk(req.params.id);
    res.json(alunoAtualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔹 DELETE - Remover aluno por ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Aluno.destroy({
      where: { id_aluno: req.params.id }
    });

    if (!deleted) return res.status(404).json({ message: 'Aluno não encontrado' });

    res.status(204).send(); // No Content
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
