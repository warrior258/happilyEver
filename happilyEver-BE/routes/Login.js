const express = require('express');
const { studentLogin, deanLogin } = require('../controllers/Login');
const router = express.Router();

router.post('/studentLogin', studentLogin);
router.post('/deanLogin', deanLogin);

module.exports = router