const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

router.get('/buscar', professorController.buscarPorNome);

module.exports = router;