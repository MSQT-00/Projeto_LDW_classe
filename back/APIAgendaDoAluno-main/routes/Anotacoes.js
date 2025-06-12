const express = require('express');
const router = express.Router();
const controller = require('../controllers/anotacaoController');

router.post('/', controller.criar);
router.put('/:id', controller.atualizar);
router.get('/:id', controller.buscarPorId);
router.get('/', controller.listarTodas);

module.exports = router;
