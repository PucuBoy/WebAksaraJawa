import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const ImageClassifierPage = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [translation, setTranslation] = useState("Klasifikasi");
  const [imageFile, setImageFile] = useState(null);
  const [isWarning, setIsWarning] = useState(false);
  const imageRef = useRef(null);
  const navigate = useNavigate(); 

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setTranslation("Klasifikasi");
      setIsWarning(false);
    }
  };

  const handleReset = () => {
    setImagePreview(null);
    setImageFile(null);
    setTranslation("Klasifikasi");
    setIsWarning(false);
  };

  const handleSubmit = async () => {
    if (!imageFile) {
      setTranslation("❌ Harap unggah gambar terlebih dahulu.");
      setIsWarning(true);
      return;
    }

    setTranslation("🔍 Sedang memproses...");
    setIsWarning(false);

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
        setIsWarning(false);
      } else {
        setTranslation(
          "❌ Gambar yang kamu kirim belum bisa dikenali.\nYuk, coba lagi dengan gambar huruf Aksara Jawa yang lebih jelas, ya!"
        );
        setIsWarning(true);
      }
    } catch (err) {
      console.error(err);
      setTranslation("❌ Terjadi kesalahan saat mengirim gambar.");
      setIsWarning(true);
    }
  };

  return (
    <div style={{ backgroundColor: '#543A14', minHeight: '100vh' }}>
      {/* Tombol Kembali */}
      <div style={{ padding: '20px 30px 0', color: 'white', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => navigate(-1)}>
        ← Kembali
      </div>

      <Container
        style={{
          backgroundColor: '#FAF3D7',
          borderRadius: '10px',
          padding: '40px',
          marginTop: '10px',
          marginBottom: '40px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
        }}
      >
        <Row>
          <Col md={6}>
            <p className="fw-bold mb-3">
              Pastikan gambar terang dan huruf terlihat jelas, ya!
            </p>
            <div className="d-flex gap-3">
              <Form.Group controlId="uploadImage">
                <Form.Control
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
                <Button
                  variant="dark"
                  style={{ backgroundColor: '#4E3912', border: 'none' }}
                  onClick={() => document.getElementById('uploadImage').click()}
                >
                  Unggah gambar
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
                  variant="dark"
                  style={{ backgroundColor: '#4E3912', border: 'none' }}
                  onClick={() => document.getElementById('uploadImageFile').click()}
                >
                  Ambil gambar
                </Button>
              </Form.Group>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-start mt-4">
          {/* Image Preview */}
          <Col md={5} className="mb-4">
            <Card>
              <Card.Header
                style={{
                  backgroundColor: '#A45734',
                  color: '#fff',
                  fontWeight: 'bold',
                }}
              >
                Image Preview
              </Card.Header>
              <Card.Body
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: '250px', backgroundColor: '#e1e1e1' }}
              >
                {imagePreview ? (
                  <Card.Img
                    id="uploadedImage"
                    ref={imageRef}
                    src={imagePreview}
                    alt="Preview"
                    style={{ maxHeight: '200px', objectFit: 'contain' }}
                  />
                ) : (
                  <div className="text-muted">📷 Pratinjau gambar akan muncul di sini</div>
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* Tombol Kirim dan Ulangi */}
          <Col md="auto" className="d-flex flex-column justify-content-center align-items-center gap-3">
            <Button
              variant="dark"
              style={{
                backgroundColor: '#4E3912',
                padding: '8px 30px',
                border: 'none',
                borderRadius: '8px',
              }}
              onClick={handleSubmit}
            >
              Kirim
            </Button>

            {imagePreview && (
              <Button
                variant="secondary"
                style={{
                  padding: '6px 20px',
                  borderRadius: '8px',
                }}
                onClick={handleReset}
              >
                Ulangi
              </Button>
            )}
          </Col>

          {/* Area Klasifikasi */}
          <Col md={5} className="mb-4">
            <Card>
              <Card.Header
                style={{
                  backgroundColor: '#A45734',
                  color: '#fff',
                  fontWeight: 'bold',
                }}
              >
                Klasifikasi
              </Card.Header>
              <Card.Body
                style={{
                  minHeight: '250px',
                  backgroundColor: '#f0ede4',
                  whiteSpace: 'pre-wrap',
                  color: isWarning ? '#C0392B' : 'black',
                  fontWeight: isWarning ? 'bold' : 'normal',
                }}
              >
                {translation}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageClassifierPage;
