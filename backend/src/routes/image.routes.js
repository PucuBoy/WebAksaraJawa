const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Image route working' });
});

module.exports = router;
