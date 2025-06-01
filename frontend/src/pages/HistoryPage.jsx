import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HistoryPage = () => {
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
          <Col>
            <div style={{ color: '#FFFFFF' }}>
              <h1 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700',
                textAlign: 'center',
                marginBottom: '20px'
              }}>
                SEJARAH AKSARA JAWA
              </h1>

              <p style={{ textAlign: 'center', marginBottom: '40px' }}>
                Aksara Jawa atau seringkali disebut Hanacaraka adalah salah satu aksara 
                tradisional Indonesia yang memiliki sejarah panjang dan kaya, 
                baik dari sisi fakta historis maupun legenda yang mengiringinya.
              </p>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Asal-Usul Histroris</h2>
                <p>
                  Aksara Jawa berasal dari keluarga aksara Brahmi di India, yang merupakan salah satu sistem 
                  tulisan tertua di dunia. Dari aksara Brahmi, perkembangan aksara Pallawa di India Selatan yang 
                  kemudian menyebar ke Asia Tenggara hingga Nusantara bersamaan dengan masuknya agama 
                  Hindu dan Buddha.
                </p>
                <p>
                  Aksara Pallawa kemudian bertransformasi menjadi aksara Kawi, yang digunakan dari masa 
                  kerajaan-kerajaan Hindu-Buddha di Jawa sampai abad ke-13 hingga ke-15. Dari aksara Kawi 
                  inilah aksara Jawa mulai mengambil bentuk. Aksara Jawa mencapai puncaknya pada masa kerajaan-kerajaan besar 
                  seperti Majapahit dan kemudian di lingkungan keraton Yogyakarta dan Surakarta.
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Perkembangan dan Penggunaan</h2>
                <p>
                  Aksara Jawa digunakan secara resmi untuk penulisan surat-menyurat dan dokumen pemerintahan 
                  sejak masa Majapahit, dan semakin meluas pada abad ke-17 hingga ke-19. Pada abad ke-19, 
                  aksara Jawa mulai dicetak secara massal setelah digunakannya tata cetak oleh Paco Roorda pada 
                  tahun 1839. Hingga pertengahan abad ke-20, sebelum penggunaan huruf Latin semakin meluas. Saat 
                  ini, aksara Jawa digunakan dalam berbagai media, mulai dari surat kabar, buku pelajaran, hingga 
                  uang kertas.
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Legenda Aji Saka</h2>
                <p>
                  Selain bukti sejarah, asal-usul aksara Jawa juga sangat lekat dengan legenda Aji Saka. Menurut 
                  cerita rakyat, Aji Saka adalah seorang tokoh dari India yang datang ke Jawa dan berhasil 
                  mengalahkan raja simo bernama Dewatacengkar. Dalam kisah ini, Aji Saka memiliki dua abdi setia, 
                  Dora dan Sembada, yang kesetiahan mereka, melalui kisah keduanya berkaitan hingga 
                  tewas. Untuk mengenang mereka, Aji Saka menciptakan deretan aksara hanacaraka, yang setiap 
                  suku katanya dipercaya mengandung makna filosofis mengenai kejadian tersebut.
                </p>
                <p>Urutan aksara hanacaraka:</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>Ha-Na-Ca-Ra-Ka</li>
                  <li>Da-Ta-Sa-Wa-La</li>
                  <li>Pa-Dha-Ja-Ya-Nya</li>
                  <li>Ma-Ga-Ba-Tha-Nga</li>
                </ul>
                <p>Setiap baris dipercaya melambangkan kisah dan nilai moral dari peristiwa antara Dora dan Sembada.</p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Pengaruh dan Pelestarian</h2>
                <p>
                  Aksara Jawa tidak hanya digunakan di Jawa Tengah dan Yogyakarta, tetapi juga pernah digunakan 
                  di Jawa Barat dan kaum ningrat Sunda. Namun, seiring perkembangan zaman dan masuknya 
                  aksara Latin, penggunaan aksara Jawa mulai menurun. Meski hingga kini masih dijajarkan di 
                  sekolah sekolah dan digunakan dalam berbagai upacara, adat serta dokumen budaya.
                </p>
                <p>
                  Aksara Jawa tetap menjadi bagian penting dari warisan budaya Indonesia yang tidak hanya 
                  kaya akan nilai filosofis dan estetika, serta menjadi simbol identitas masyarakat Jawa hingga 
                  saat ini.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HistoryPage;