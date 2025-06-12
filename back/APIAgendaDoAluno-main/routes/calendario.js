const express = require('express');
const router = express.Router();
const controller = require('../controllers/calendarioController');

router.get('/', controller.listarTodos);          // GET /api/calendario
router.get('/:id', controller.buscarPorId);       // GET /api/calendario/5
router.post('/', controller.criar);               // POST /api/calendario
router.put('/:id', controller.atualizar);         // PUT /api/calendario/5
router.delete('/:id', controller.deletar);        // DELETE /api/calendario/5

module.exports = router;
