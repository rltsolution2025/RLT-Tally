const express = require('express');
const router = express.Router();
const { createCareer, getCareers } = require('../controllers/careerController');

router.post('/career', createCareer);
router.get('/career', getCareers);

module.exports = router;