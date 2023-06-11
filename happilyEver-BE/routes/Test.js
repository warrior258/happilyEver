const express = require('express');
const router = express.Router();
const test = require('../controllers/Test')

router.get('/', test);

module.exports = router