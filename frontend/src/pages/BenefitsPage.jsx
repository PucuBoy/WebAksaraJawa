import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ibuibu from '../assets/ibuibu.png';

const BenefitsPage = () => {
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
                marginBottom: '20px'
              }}>
                KEUNTUNGAN BELAJAR<br />
                AKSARA JAWA
              </h1>

              <p style={{ marginBottom: '30px' }}>
                Belajar aksara Jawa memberikan berbagai keuntungan yang meliputi aspek budaya, ekonomi, pendidikan,
                dan kepribadian. Berikut ini adalah manfaat utamanya:
              </p>

              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#FFFFFF' }}>Melestarikan Warisan Budaya dan Identitas</h3>
                <p>Dengan mempelajari aksara Jawa, kita turut menjaga dan melestarikan warisan budaya yang kaya dan unik.
                Hal ini membantu masyarakat Jawa tetap di menjaga jembatan penghubung antara generasi saat ini dengan
                masa lalu, sehingga nilai-nilai dan kearifan lokal tetap terjaga dan dilestarikan.</p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#FFFFFF' }}>Membuka Akses Klasik dan Sastra Tradisional</h3>
                <p>Banyak naskah kuno, sastra klasik, dan dokumen sejarah ditulis dalam aksara Jawa. Kemampuan
                membaca aksara ini memungkinkan kita memahami nilai-nilai, filosofi, dan pesan sejarah yang
                terkandung dalam karya-karya tersebut.</p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#FFFFFF' }}>Nilai Filosofis dan Spiritual</h3>
                <p>Aksara Jawa mengandung nilai-nilai filosofis yang mendalam, seperti yang tampak di setiap gaya
                penulisan dan huruf-hurufnya. Mempelajari aksara ini juga berarti mengenalkan kebijaksanaan dan
                pandangan hidup masyarakat Jawa, yang dapat memperkaya wawasan dan karakter kita.</p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#FFFFFF' }}>Peluang Ekonomi dan Profesi</h3>
                <p>Keahlian dalam aksara Jawa bisa membuka peluang menjadi transliterator (pengalih aksara) dan dan
                sebaliknya. Jasa alih tulis aksara Jawa dihargai cukup tinggi dan dapat menjadi sumber penghasilan
                yang menjanjikan, terutama dalam dunia seni.</p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#FFFFFF' }}>Pengembangan Seni dan Kreativitas</h3>
                <p>Aksara Jawa dapat diaplikasikan dalam seni lukis dan kaligrafi yang memiliki nilai artistik tinggi. Penggunaan,
                aksara dalam desain modern, dekorasi, dan kerajinan tangan membuka peluang kreatif dan nilai
                ekonomi di bidang seni budaya.</p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#FFFFFF' }}>Membangun Jembatan Antar Generasi</h3>
                <p>Mempelajari dan mengajarkan aksara Jawa membantu membangun kohesi sosial dan pemahaman budaya antar
                generasi tua ke generasi muda, memperkuat identitas budaya.</p>
              </div>

              <p>
                Secara keseluruhan, belajar aksara Jawa bukan hanya soal kemampuan membaca dan menulis, tetapi juga
                sebuah cara untuk menghargai, melestarikan, dan mengembangkan kekayaan budaya Indonesia sekaligus
                membuka peluang di bidang ekonomi dan seni.
              </p>
            </div>
          </Col>
          <Col md={4} className="d-flex align-items-center">
            <img
              src={ibuibu}
              alt="ibu ibu"
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

export default BenefitsPage;