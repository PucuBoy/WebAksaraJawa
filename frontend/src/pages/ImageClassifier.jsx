import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const ImageClassifierPage = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [translation, setTranslation] = useState("Terjemahan");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    setTranslation("Contoh hasil klasifikasi: ꦧ (ba)");
  };

  return (
    <div style={{ backgroundColor: '#543A14', minHeight: '100vh' }}>
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
        <Row className="mb-4">
          <Col md={8}>
            <h4><strong>Yuk, unggah atau foto huruf aksara Jawa kamu!</strong></h4>
            <p>Nanti kami bantu tebak itu huruf apa!</p>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <div className="mb-3 d-flex gap-2">
              <Form.Group controlId="uploadImage">
                <Form.Label>
                  <Button variant="secondary">Ambil gambar</Button>
                </Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handleImageUpload} hidden />
              </Form.Group>

              <Form.Group controlId="uploadImageFile">
                <Form.Label>
                  <Button variant="light" className="border">Unggah gambar</Button>
                </Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handleImageUpload} hidden />
              </Form.Group>
            </div>

            <Card className="p-3" style={{ minHeight: '250px' }}>
              {imagePreview ? (
                <Card.Img variant="top" src={imagePreview} />
              ) : (
                <div className="text-center text-muted">📷 Pratinjau gambar akan muncul di sini</div>
              )}
            </Card>

            <Button variant="dark" className="mt-3 w-100" onClick={handleSubmit}>
              Kirim
            </Button>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Hasil Terjemahan:</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                value={translation}
                readOnly
                style={{ backgroundColor: '#e8e6e1' }}
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageClassifierPage;
