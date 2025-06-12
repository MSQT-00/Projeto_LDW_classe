const express = require('express');
const router = express.Router();
const controller = require('../controllers/alunoController');

router.get('/', controller.listarTodos);        // GET /api/alunos
router.get('/buscar', controller.buscarPorNome); // GET /api/alunos/buscar?nome=João

module.exports = router;
