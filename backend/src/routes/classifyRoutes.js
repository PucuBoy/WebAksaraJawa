const express = require('express');
const multer = require('multer');
const { handleClassification } = require('../controllers/classifyController');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('image'), handleClassification);

module.exports = router;
