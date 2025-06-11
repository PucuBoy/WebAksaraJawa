import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../assets/bg-klasifikasi.png'; 

const KlasifikasiGambarPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '40px 0',
        color: '#000',
      }}
    >
      <Navbar /> 

      <Container
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '12px',
          padding: '50px 30px',
          maxWidth: '80%',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <h2 className="fw-bold mb-4">Yuk, kenali huruf Aksara Jawa lewat gambar!</h2>
            <p style={{ fontSize: '1.1rem' }}>
              Di halaman ini kamu bisa mengunggah atau memotret gambar huruf Aksara Jawa, lalu sistem akan menebak huruf dan pelafalannya untukmu.
              <br />
              Untuk hasil terbaik, pastikan gambar terang dan huruf terlihat jelas, ya!
            </p>
            <Button
              variant="dark"
              className="mt-4 px-4 py-2"
              onClick={() => navigate('/klasifikasi/ImageClassifierPage')} 
            >
              Mulai
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default KlasifikasiGambarPage;
