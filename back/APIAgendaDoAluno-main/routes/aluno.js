const express = require('express');
const router = express.Router();
const controller = require('../controller/alunoController');

router.get('/', controller.listarTodos);        // GET /api/alunos
router.get('/buscar', controller.buscarPorNome); // GET /api/alunos/buscar?nome=João
router.post('/', controller.criar);           // POST /api/alunos


module.exports = router;
