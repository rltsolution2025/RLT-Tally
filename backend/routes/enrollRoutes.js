const express = require('express');
const router = express.Router();

const { createEnroll, getEnrolls } = require('../controllers/enrollController');

router.post('/enroll', createEnroll);
router.get('/enroll', getEnrolls);

module.exports = router;