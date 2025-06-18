const express = require('express');
const router = express.Router();
const { Falta } = require('../models/Falta');

// Professor POST - registrar falta
router.post('/', async (req, res) => {
  const { alunoId, turmaId, data, motivo } = req.body;

  try {
    const falta = await Falta.create({ alunoId, turmaId, data, motivo });
    res.status(201).json(falta);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// Aluno GET - ver faltas no mês
router.get('/aluno/:id', async (req, res) => {
  const alunoId = req.params.id;
  const { mes, ano } = req.query;

  const inicio = `${ano}-${String(mes).padStart(2, '0')}-01`;
  const fim = `${ano}-${String(mes).padStart(2, '0')}-31`;

  try {
    const faltas = await Falta.findAll({
      where: {
        alunoId,
        data: {
          [require('sequelize').Op.between]: [inicio, fim]
        }
      }
    });
    res.json(faltas);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});


// GET – Percentual de faltas do aluno
router.get('/aluno/:id/percentual', async (req, res) => {
  const alunoId = req.params.id;
  const DIAS_LETIVOS = 200;

  try {
    const totalFaltas = await Falta.count({
      where: { alunoId }
    });

    const percentual = (totalFaltas / DIAS_LETIVOS) * 100;

    res.json({
      alunoId,
      totalFaltas,
      percentual: percentual.toFixed(2) + '%',
      diasLetivos: DIAS_LETIVOS
    });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});


module.exports = router;
