const express = require('express');
const router = express.Router();
const controller = require('../controller/anotacaoController');

router.post('/', controller.criar);
router.put('/:id', controller.atualizar);
router.get('/:id', controller.buscarPorId);
router.get('/', controller.listarTodas);
router.delete('/:id', controller.excluir);

module.exports = router;
