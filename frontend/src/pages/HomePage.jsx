import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import aksarahome from '../assets/aksarahome.png';
import sedangmenulis from '../assets/sedangmenulis.png';

const HomePage = () => {
  const navigate = useNavigate(); 

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
                style={{ maxWidth: '100%', border: 'none', borderRadius: '5px' }}
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

      {/* Card Section */}
      <div style={{ position: 'relative', marginTop: '50px', width: '100%', paddingBottom: '50px' }}>
        <Container>
          <Row className="g-4 justify-content-center">
            {/* Kumpulan Card */}
            {[
              {
                title: 'Mengapa Harus Belajar Aksara Jawa?',
                text: 'Ayo cari tahu!',
                bg: '#F0BB78',
                textColor: '#3E1F1F',
                buttonBg: '#543A14',
                buttonText: '#FFD8A9',
                path: '/why-learn'
              },
              {
                title: 'Sejarah Aksara Jawa',
                text: 'Pelajari asal-usul dan perkembangan aksara Jawa dari masa ke masa.',
                bg: '#543A14',
                textColor: '#FFD8A9',
                buttonBg: '#F0BB78',
                buttonText: '#3E1F1F',
                path: '/history'
              },
              {
                title: 'Aksara Jawa Dalam Kehidupan Sehari-Hari',
                text: 'Temukan bagaimana aksara Jawa digunakan dalam konteks modern.',
                bg: '#F0BB78',
                textColor: '#3E1F1F',
                buttonBg: '#543A14',
                buttonText: '#FFD8A9',
                path: '/daily-life'
              },
              {
                title: 'Keuntungan Belajar Aksara Jawa',
                text: 'Ketahui manfaat mempelajari aksara Jawa bagi diri dan budaya.',                
                bg: '#543A14',
                textColor: '#FFD8A9',
                buttonBg: '#F0BB78',
                buttonText: '#3E1F1F',
                path: '/benefits'
              },
              {
                title: 'Fakta Menarik Aksara Jawa',
                text: 'Jelajahi beberapa fakta menarik tentang aksara Jawa dan keunikannya.',
                bg: '#F0BB78',
                textColor: '#3E1F1F',
                buttonBg: '#543A14',
                buttonText: '#FFD8A9',
                path: '/facts'
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
                  <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', padding: '30px' }}>
                    <Card.Title style={{ fontSize: '1.5rem', fontWeight: '700' }}>{card.title}</Card.Title>
                    <Card.Text style={{ marginTop: '10px', marginBottom: '20px' }}>{card.text}</Card.Text>
                    <Button
                      onClick={() => navigate(card.path)}
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

      <Container className="text-center my-4">
        <h5 className="fw-bold" style={{ color: '#3E1F1F', fontSize: '2.8rem' }}>
          Tentang AksaraKu
        </h5>
        <p style={{
        maxWidth: '700px',
        margin: '0 auto',
        color: '#3E1F1F',
        fontSize: '1.10rem',
        textAlign: 'justify',
        textJustify: 'inter-word',
        }}>
          AksaraKu adalah aplikasi web edukasi untuk mengenal dan mengklasifikasikan aksara Jawa, dengan fitur latihan soal dan klasifikasi gambar berbasis Machine Learning.
          Cocok untuk pelajar yang ingin belajar askara Jawa secara menyenangkan dan interaktif.
        </p>
      </Container>


      <Container className="my-5">
        <Row className="align-items-center text-center text-md-start">
          <Col md={8}>
            <h5 className="fw-bold mb-2">Mari Pelajari Lebih Lanjut Tentang Sejarah Aksara Jawa</h5>
            <p>Klik cuplikan di samping</p>
          </Col>
          <Col md={4}>
            <div className="ratio ratio-16x9" style={{ borderRadius: '8px', overflow: 'hidden' }}>
              <iframe
                src="https://www.youtube.com/embed/NztVQA74iDk"
                title="YouTube video player"
                allowFullScreen
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Kutipan Budaya */}
      <Container className="my-5 p-4" style={{ backgroundColor: '#FFF2DC', borderRadius: '8px' }}>
        <Row>
          <Col md={4}>
            <div style={{ backgroundColor: '#EADBC8', height: '160px', borderRadius: '10px' }} />
          </Col>
          <Col md={8} className="d-flex flex-column justify-content-center">
            <p className="mb-2">Ngèlmu iku kalakone kanthi laku.</p>
            <small>
              Menurut ilmu itu harus diiringi dengan tindakan.
              Meresapi filosofi ini membantu kita memahami aksara Jawa lebih dalam.
              <br /><em>— Ki Hadjar Dewantara</em>
            </small>
          </Col>
        </Row>
      </Container>

      {/* Carousel Testimoni */}
      <Container className="my-5">
        <h5 className="fw-bold">Apa Kata Mereka?</h5>
        <Carousel indicators={false} controls={false} interval={4000}>
          {[[
            { name: 'Nana', text: 'Sangat membantu memahami budaya Jawa.' },
            { name: 'Didi', text: 'Visualnya menarik dan mudah dimengerti.' },
            { name: 'Rani', text: 'Sekarang saya bisa baca aksara Jawa!' }
          ], [
            { name: 'Bimo', text: 'Interaktif dan menyenangkan belajar di sini.' },
            { name: 'Sari', text: 'Kontennya lengkap dan historis.' },
            { name: 'Wira', text: 'User-friendly dan mendidik!' }
          ]].map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center gap-3">
                {group.map((testimonial, idx) => (
                  <Col key={idx} md={3} className="p-2">
                    <Card className="h-100 shadow-sm">
                      <Card.Body>
                        <Card.Text style={{ fontSize: '0.95rem' }}>
                          "{testimonial.text}"
                        </Card.Text>
                        <Card.Footer className="text-end mt-3">
                          <strong>{testimonial.name}</strong>
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* Form Ulasan */}
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <h5 className="fw-bold">Berikan Ulasan Mu</h5>
            <p>Ulasan mu membantu kami mengembangkan platform belajar Aksara Jawa</p>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <form>
                  <div className="mb-2">
                    <label className="form-label">Nama</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Judul Ulasan</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Isi Ulasan</label>
                    <textarea className="form-control" rows="3"></textarea>
                  </div>
                  <Button variant="dark" type="submit">Kirim</Button>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer style={{ backgroundColor: '#D9D9D9', padding: '40px 0', marginTop: '50px' }}>
        <Container>
          <Row className="text-center text-md-start">
            <Col md={4} className="mb-4 mb-md-0">
              <h6 className="fw-bold">Aksaraku</h6>
              <p style={{ fontSize: '0.9rem' }}>
                Platform pembelajaran aksara Jawa secara daring yang interaktif dan mudah digunakan.
              </p>
            </Col>
            <Col md={4} className="mb-4 mb-md-0">
              <h6 className="fw-bold">Tautan</h6>
              <ul className="list-unstyled" style={{ fontSize: '0.9rem' }}>
                <li><a href="/materi" className="text-decoration-none text-dark">Materi</a></li>
                <li><a href="/latihan" className="text-decoration-none text-dark">Latihan</a></li>
                <li><a href="/konversi" className="text-decoration-none text-dark">Konversi</a></li>
                <li><a href="/kuis" className="text-decoration-none text-dark">Kuis</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <h6 className="fw-bold">Kontak</h6>
              <p style={{ fontSize: '0.9rem' }}>Email: aksaraku@email.com</p>
              <p style={{ fontSize: '0.9rem' }}>Instagram: @aksaraku.id</p>
            </Col>
          </Row>
          <hr />
          <p className="text-center" style={{ fontSize: '0.8rem', marginTop: '20px' }}>
            &copy; 2025 Aksaraku. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;
