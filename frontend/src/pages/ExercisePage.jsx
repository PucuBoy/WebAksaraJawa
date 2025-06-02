import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import OrangAngkatTangan from '../assets/orang-angkat-tangan.png'; 

const ExercisePage = () => {
  return (
    <div style={{ backgroundColor: '#543A14', minHeight: '100vh', color: '#000' }}>
      <Navbar />
      <Container
        style={{
          backgroundColor: '#FFDDAB',
          borderRadius: '10px',
          padding: '40px',
          maxWidth: '90%',
          marginTop: '20px',
          marginBottom: '40px',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
        }}
      >
        <Row>
          <Col md={8}>
            <h4><strong>Sudah siap untuk latihan? Yuk, asah kemampuanmu!</strong></h4>
            <p>
              Di sini kamu akan menjawab pertanyaan-pertanyaan seru tentang semua
              yang sudah kamu pelajari. Kamu bisa pilih materi yang ingin kamu coba
              terlebih dahulu untuk melihat seberapa hebat kamu belajar.
            </p>
            <p>Jangan takut salah, yang penting berani mencoba!</p>
            <p>Yuk, semangat terus, dan selamat mengerjakan!</p>
          </Col>
          <Col md={4} className="text-center">
            <img
              src={OrangAngkatTangan}
              alt="Karakter Latihan"
              style={{ maxWidth: '200px', height: 'auto' }}
            />
          </Col>
        </Row>

        <Row className="mt-4 justify-content-center" style={{ gap: '20px' }}>
          <Card style={{ width: '18rem', padding: '20px', textAlign: 'center', boxShadow: '2px 2px 6px rgba(0,0,0,0.2)' }}>
            <Card.Body>
              <Card.Title><strong>Materi Pengenalan</strong></Card.Title>
              <Button variant="dark" className="mt-3">Mulai</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', padding: '20px', textAlign: 'center', boxShadow: '2px 2px 6px rgba(0,0,0,0.2)' }}>
            <Card.Body>
              <Card.Title><strong>Materi Gabungan</strong></Card.Title>
              <Button variant="dark" className="mt-3">Mulai</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', padding: '20px', textAlign: 'center', boxShadow: '2px 2px 6px rgba(0,0,0,0.2)' }}>
            <Card.Body>
              <Card.Title><strong>Materi Sandangan</strong></Card.Title>
              <Button variant="dark" className="mt-3">Mulai</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default ExercisePage;
