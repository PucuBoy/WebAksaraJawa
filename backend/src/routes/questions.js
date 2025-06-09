const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Helper untuk load soal
const loadQuestions = (category) => {
  const filePath = path.join(__dirname, `../data/${category}.json`);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

// Route berdasarkan kategori
router.get('/:category', (req, res) => {
  const { category } = req.params;
  try {
    const questions = loadQuestions(category);
    res.json(questions);
  } catch (err) {
    res.status(404).json({ message: 'Kategori tidak ditemukan' });
  }
});

module.exports = router;