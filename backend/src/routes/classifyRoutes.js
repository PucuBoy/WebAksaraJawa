const express = require('express');
const router = express.Router();
const { classifyImage } = require('../controllers/classifyController');

router.post('/', classifyImage);

module.exports = router;
