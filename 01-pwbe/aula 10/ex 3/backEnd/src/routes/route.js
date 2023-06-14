const express = require("express");
const router = express.Router();

const Random = require('../controllers/controller');

router.get('/', Random.teste);
router.get('/random', Random.random);

module.exports = router