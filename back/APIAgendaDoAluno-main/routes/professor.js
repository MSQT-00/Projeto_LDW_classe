const express = require('express');
const router = express.Router();
const professorController = require('../controller/professorController');

router.get('/buscar', professorController.buscarPorNome);

module.exports = router;