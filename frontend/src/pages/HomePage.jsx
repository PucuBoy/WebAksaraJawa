import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import aksarahome from '../assets/aksarahome.png';
import sedangmenulis from '../assets/sedangmenulis.png';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#FFDDAB', position: 'relative' }}>
      {/* Navbar */}
      <div className="d-flex justify-content">
        <Navbar />
      </div>

      {/* Hero Section */}
      <Container className="py-5">
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-center text-md-start">
            <div style={{ position: 'relative', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
              <img
                src={aksarahome}
                alt="Ilustrasi Aksara Jawa"
                className="img-fluid"
                style={{
                  maxWidth: '100%',
                  border: 'none',
                  borderRadius: '5px'
                }}
              />
              <img
                src={sedangmenulis}
                alt="Ilustrasi orang menulis"
                style={{
                  position: 'absolute',
                  bottom: '-10%',
                  left: '-5%',
                  width: '60%',
                  maxWidth: '200px',
                  zIndex: 2,
                }}
              />
            </div>
          </Col>

          <Col md={6} className="mt-4 mt-md-0">
            <h1 style={{ color: '#3E1F1F', fontSize: '2.8rem', fontWeight: '700' }}>
              Pelajari Warisan Budaya Melalui Aksara Jawa
            </h1>
            <p style={{ color: '#3E1F1F', fontSize: '1.2rem' }}>
              Kenali huruf-huruf kuno, dan pahami makna di baliknya.
            </p>
            <Button
              style={{
                backgroundColor: '#945034',
                border: 'none',
                borderRadius: '20px',
                padding: '0.75rem 1.5rem',
                fontWeight: '600'
              }}>
              Mulai Belajar
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Background bawah (warna kedua) */}
      <div style={{
        backgroundColor: '#6B3F31',
        height: '400px',
        marginTop: '120px'
      }}></div>

      {/* Card Section floating di antara dua warna */}
      <div style={{
        position: 'absolute',
        top: 'calc(100vh - 200px)',
        width: '100%',
      }}>
        <Container>
          <Row className="g-4 justify-content-center">
            {[
              {
                title: 'Mengapa Harus Belajar Aksara Jawa?',
                text: 'Ayo cari tahu!',
                bg: '#F0BB78',
                textColor: '#3E1F1F',
                buttonBg: '#543A14',
                buttonText: '#FFD8A9'
              },
              {
                title: 'Sejarah Aksara Jawa',
                text: 'Pelajari asal-usul dan perkembangan aksara Jawa dari masa ke masa.',
                bg: '#543A14',
                textColor: '#FFD8A9',
                buttonBg: '#F0BB78',
                buttonText: '#3E1F1F'
              },
              {
                title: 'Aksara Jawa Dalam Kehidupan Sehari-Hari',
                text: 'Temukan bagaimana aksara Jawa digunakan dalam konteks modern.',
                bg: '#F0BB78',
                textColor: '#3E1F1F',
                buttonBg: '#543A14',
                buttonText: '#FFD8A9'
              },
              {
                title: 'Keuntungan Belajar Aksara Jawa',
                text: 'Ketahui manfaat mempelajari aksara Jawa bagi diri dan budaya.',                
                bg: '#543A14',
                textColor: '#FFD8A9',
                buttonBg: '#F0BB78',
                buttonText: '#3E1F1F'
              },
              {
                title: 'Fakta Menarik Aksara Jawa',
                text: 'Jelajahi beberapa fakta menarik tentang aksara Jawa dan keunikannya.',
                bg: '#F0BB78',
                textColor: '#3E1F1F',
                buttonBg: '#543A14',
                buttonText: '#FFD8A9'
              },
            ].map((card, idx) => (
              <Col key={idx} md={idx < 3 ? 4 : 6}>
                <Card style={{
                  backgroundColor: card.bg,
                  borderRadius: '25px',
                  border: 'none',
                  color: card.textColor,
                  fontSize: '1rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  height: '100%',      
                  minHeight: '200px',   
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  <Card.Body
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                      padding: '30px'
                    }}
                  >
                    <Card.Title style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                      {card.title}
                    </Card.Title>
                    <Card.Text style={{ marginTop: '10px', marginBottom: '20px' }}>
                      {card.text}
                    </Card.Text>
                    <Button
                      style={{
                        backgroundColor: card.buttonBg,
                        border: 'none',
                        color: card.buttonText,
                        fontWeight: '600',
                        alignSelf: 'flex-start',
                        padding: '8px 16px',
                        borderRadius: '8px'
                      }}
                    >
                      Baca Selengkapnya
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
