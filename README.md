# Web Aksara Jawa

Aplikasi web edukasi untuk mengenal dan mengklasifikasikan **Aksara Jawa**, dengan fitur latihan soal dan klasifikasi gambar berbasis Machine Learning.

---

## 🚀 Fitur Utama 

- 📚 Latihan soal aksara:
  - Pengenalan Aksara
  - Gabungan Aksara
  - Aksara Sandangan
- 🖼️ Klasifikasi gambar aksara menggunakan model ML (TensorFlow.js)
- 🔗 Backend REST API dengan Express.js
- 💡 Tampilan frontend modern menggunakan React dan React Bootstrap

---

## 📂 Struktur Proyek

```bash
WebAksaraJawa/
├── backend/             # Server Express.js dan logic klasifikasi
│   └── src/
│       ├── model/       # Model klasifikasi (.json, .bin)
│       ├── services/    # Logic klasifikasi ML
│       └── controllers/ # Controller untuk routing API
├── frontend/            # Aplikasi frontend React
│   └── public/
│   └── src/
│       ├── components/
│       └── pages/
├── .gitignore
├── package.json
├── README.md
```

## Cara Menjalankan Proyek via Lokal
### Persiapan
Pastikan Node.js dan npm sudah terinstall. Kemudian install semua dependensi:

```bash
# Masuk ke folder proyek
cd WebAksaraJawa

# Install dependencies backend
cd backend
npm install

# Install dependencies frontend
cd ../frontend
npm install
```

# Jalankan Backend saja
```bash
cd backend
npm run start
```

# Jalankan Frontend saja
```bash
cd frontend
npm run start
```

# Jalankan Keseluruhan Web
```bash
#jalankan di root project
npm run dev
```
# Dependencies Utama
Backend
  - Express.js
  - Multer (untuk upload gambar)
  - @tensorflow/tfjs-node

Frontend
  - React
  - React Bootstrap
  - Webpack

# Tentang Model ML
Model klasifikasi Aksara Jawa dibuat dengan TensorFlow dan dijalankan di backend (Node.js). Model diload dari file model.json dan shard.bin dan menerima input gambar melalui endpoint /api/classify.

