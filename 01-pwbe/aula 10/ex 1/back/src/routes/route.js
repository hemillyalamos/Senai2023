const express = require("express");
const router = express.Router();

const calculatora = require('../controllers/controller');

router.get('/', calculatora.teste);
router.get('/calcular/:operacao', calculatora.operacao);

module.exports = router