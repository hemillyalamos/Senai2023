const express = require("express");
const router = express.Router();

const Concatenar = require('../controllers/controller');

router.get('/', Concatenar.teste);
router.get('/concatenar', Concatenar.concatenar);


module.exports = router