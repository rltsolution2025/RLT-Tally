const express = require('express');
const router = express.Router();
const { createRegister, getRegisters } = require('../controllers/registerController');

router.post('/register', createRegister);
router.get('/register', getRegisters);

module.exports = router;