const express = require("express");
const router = express.Router();

const Nome = require('../controllers/controller');

router.get('/', Nome.teste);
router.get('/nome', Nome.nome);

module.exports = router