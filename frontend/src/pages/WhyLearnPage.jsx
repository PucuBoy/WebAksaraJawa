import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import orangmengapa from '../assets/orangmengapa.png';

const WhyLearnPage = () => {
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
          <Col className="d-flex align-items-start">
            <div style={{ color: '#FFFFFF' }}>
              <div className="d-flex align-items-center mb-4">
                <img
                  src={orangmengapa}
                  alt="Maskot Aksara Jawa"
                  style={{
                    width: '150px',
                    marginRight: '20px'
                  }}
                />
                <h1 style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '700',
                  color: '#FFFFFF'
                }}>
                  PENTINGNYA BELAJAR<br />
                  AKSARA JAWA
                </h1>
              </div>

              <p style={{ color: '#FFFFFF', marginBottom: '20px' }}>
                Belajar aksara Jawa penting karena memberikan manfaat yang luas, baik dari segi budaya, pengetahuan, ekonomi, 
                hingga penguatan identitas. Berikut alasan utama mengapa kita harus belajar aksara Jawa:
              </p>

              <div style={{ color: '#FFFFFF' }}>
                <div style={{ marginLeft: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <span style={{ marginRight: '10px', fontSize: '20px' }}>•</span>
                    <div>
                      <h3 style={{ margin: 0 }}>Melestarikan Warisan Budaya dan Identitas</h3>
                      <p>Aksara Jawa adalah bagian penting dari kekayaan budaya Indonesia, khususnya masyarakat Jawa. Dengan 
                      mempelajarinya, kita ikut menjaga dan melestarikan warisan leluhur agar tidak punah di tengah arus globalisasi.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <span style={{ marginRight: '10px', fontSize: '20px' }}>•</span>
                    <div>
                      <h3 style={{ margin: 0 }}>Mengakses Naskah Klasik dan Pengetahuan Masa Lalu</h3>
                      <p>Banyak naskah kuno, sastra klasik, dan dokumen sejarah ditulis dalam aksara Jawa. Kemampuan membaca 
                      aksara ini memungkinkan kita memahami nilai-nilai, filosofi, dan sejarah yang diwariskan nenek moyang.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <span style={{ marginRight: '10px', fontSize: '20px' }}>•</span>
                    <div>
                      <h3 style={{ margin: 0 }}>Nilai Filosofis dan Moral</h3>
                      <p>Aksara Jawa tidak hanya sekadar tulisan, tetapi juga sarat dengan filosofi dan nilai-nilai luhur yang dapat 
                      memperkaya wawasan dan membentuk karakter.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <span style={{ marginRight: '10px', fontSize: '20px' }}>•</span>
                    <div>
                      <h3 style={{ margin: 0 }}>Peluang Ekonomi dan Profesi</h3>
                      <p>Keahlian dalam aksara Jawa membuka peluang menjadi transliterator atau pengalih aksara, yang saat ini cukup 
                      dibutuhkan dan dihargai tinggi. Selain itu, aksara Jawa juga dapat digunakan sebagai ragam hias atau kaligrafi 
                      bernilai ekonomi.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <span style={{ marginRight: '10px', fontSize: '20px' }}>•</span>
                    <div>
                      <h3 style={{ margin: 0 }}>Mendorong Kreativitas dan Seni</h3>
                      <p>Aksara Jawa dapat diaplikasikan dalam seni lukis, desain grafis, dan kerajinan tangan, memperkaya dunia seni 
                      dan kreativitas dengan sentuhan budaya lokal.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <span style={{ marginRight: '10px', fontSize: '20px' }}>•</span>
                    <div>
                      <h3 style={{ margin: 0 }}>Menghormati Tradisi dan Upacara Adat</h3>
                      <p>Dalam banyak upacara adat dan kegiatan spiritual masyarakat Jawa, aksara Jawa masih digunakan untuk 
                      menulis mantra, doa, dan teks sakral. Memahami aksara ini berarti ikut menghormati dan melestarikan tradisi 
                      tersebut.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <span style={{ marginRight: '10px', fontSize: '20px' }}>•</span>
                    <div>
                      <h3 style={{ margin: 0 }}>Membangun Jembatan Antar Generasi</h3>
                      <p>Mengajarkan dan mempelajari aksara Jawa membantu meneruskan nilai-nilai budaya dan tradisi dari generasi 
                      tua ke generasi muda, memperkuat kohesi sosial dan penghargaan terhadap warisan leluhur.</p>
                    </div>
                  </div>
                </div>

                <p style={{ marginTop: '20px' }}>
                  Singkatnya, belajar aksara Jawa bukan hanya soal kemampuan membaca dan menulis, tetapi juga tentang 
                  menghargai, melestarikan, dan mengembangkan kekayaan budaya bangsa serta membuka peluang di bidang 
                  ekonomi, seni, dan pendidikan.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyLearnPage;