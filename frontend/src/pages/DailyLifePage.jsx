import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import orangberdua from '../assets/orangberdua.png';

const DailyLifePage = () => {
  return (
    <div style={{ backgroundColor: '#543A14', minHeight: '100vh' }}>
      <Button 
        href="/"
        style={{ 
          backgroundColor: '#F0BB78', 
          border: 'none',
          margin: '20px',
          color: '#3E1F1F',
          fontWeight: '600'
        }}
      >
        Kembali
      </Button>

      <Container className="py-3">
        <Row>
          <Col md={8}>
            <div style={{ color: '#FFFFFF' }}>
              <h1 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700',
                textAlign: 'center',
                marginBottom: '40px'
              }}>
                AKSARA JAWA DALAM<br />
                KEHIDUPAN SEHARI-HARI
              </h1>

              <div style={{ marginBottom: '30px' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
                  Penggunaan Tradisional dan Upacara Adat
                </h2>
                <p>Digunakan dalam berbagai upacara adat seperti:</p>
                <ul>
                  <li>Pernikahan</li>
                  <li>Pertunangan</li>
                  <li>Khitanan</li>
                  <li>Kegiatan keagamaan sebagai bagian dari pelestarian budaya.</li>
                </ul>
                <p>Dalam konteks ini, aksara Jawa berfungsi sebagai simbol identitas dan 
                penghormatan terhadap tradisi leluhur.</p>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
                  Media Massa dan Ruang Publik
                </h2>
                <p>Penggunaan aksara Jawa dalam:</p>
                <ul>
                  <li>Surat-menyurat</li>
                  <li>Papan nama jalan</li>
                  <li>Gedung</li>
                  <li>Spanduk</li>
                </ul>
                <p>Masih bisa ditemukan di beberapa daerah, khususnya di Jawa Tengah dan 
                Yogyakarta. Namun, penggunaannya dalam komunikasi sehari-hari dan 
                media massa sudah sangat terbatas dan cenderung simbolik.</p>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
                  Relevansi dengan Teknologi Modern
                </h2>
                <p>Aksara Jawa kini mulai diadaptasi ke dalam teknologi digital. Berbagai 
                aplikasi dan situs web dibuat untuk pembelajaran dan 
                penulisan aksara Jawa secara interaktif, seperti aplikasi keyboard 
                aksara Jawa dan konverter tulisan Latin ke aksara Jawa.</p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
                  Aksara Jawa di Media Sosial dan Platform Digital
                </h2>
                <p>Penggunaan aksara Jawa di media sosial mulai menjadi tren, terutama 
                di kalangan generasi muda dan pegiat budaya. Mereka menggunakan 
                aksara Jawa untuk menulis status, membuat meme, atau konten kreatif 
                lain yang menarik perhatian dan memperkuat identitas budaya melalui 
                platform digital.</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="d-flex align-items-center">
            <img
              src={orangberdua}
              alt="orang berdua"
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DailyLifePage;