const { classifyImage } = require('../services/classifyService');

const handleClassification = async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'Tidak ada file gambar dikirim' });
      }
  
      console.log('📸 File diterima:', req.file.originalname);
      const imageBuffer = req.file.buffer;
  
      const result = await classifyImage(imageBuffer);
      console.log('✅ Hasil klasifikasi:', result);
  
      res.json(result);
    } catch (err) {
      console.error('❌ Error saat klasifikasi:', err.message);
      res.status(500).json({ error: 'Gagal memproses gambar' });
    }
  };

module.exports = {
  handleClassification
};
