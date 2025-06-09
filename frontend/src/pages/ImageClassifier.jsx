import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const ImageClassifierPage = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [translation, setTranslation] = useState("Terjemahan");
  const [imageFile, setImageFile] = useState(null);

  const imageRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); 
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const handleSubmit = async () => {
    if (!imageFile) {
      setTranslation("❌ Harap unggah gambar terlebih dahulu.");
      return;
    }

    setTranslation("🔍 Sedang memproses...");

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await fetch("http://localhost:5000/api/classify", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.label) {
        setTranslation(`✅ Hasil klasifikasi: ${data.label}`);
      } else {
        setTranslation("❌ Gagal mendapatkan hasil klasifikasi.");
      }
    } catch (err) {
      console.error(err);
      setTranslation("❌ Terjadi kesalahan saat mengirim gambar.");
    }
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
                <Form.Control 
                  type="file" 
                  accept="image/*" 
                  capture="environment"
                  onChange={handleImageUpload} 
                  style={{ display: 'none' }}
                />
                <Button 
                  variant="secondary" 
                  onClick={() => document.getElementById('uploadImage').click()}
                >
                  Ambil gambar
                </Button>
              </Form.Group>

              <Form.Group controlId="uploadImageFile">
                <Form.Control 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                  style={{ display: 'none' }}
                />
                <Button 
                  variant="light" 
                  className="border"
                  onClick={() => document.getElementById('uploadImageFile').click()}
                >
                  Unggah gambar
                </Button>
              </Form.Group>
            </div>

            <Card className="p-3" style={{ minHeight: '250px' }}>
              {imagePreview ? (
                <Card.Img
                  id="uploadedImage"
                  ref={imageRef}
                  src={imagePreview}
                  alt="Preview"
                />
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
