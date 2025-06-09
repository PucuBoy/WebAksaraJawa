import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';

const questions = [
  {
    id: 1,
    text: 'Apa bentuk gabungan aksara untuk suku kata "bra"?',
    options: ['ꦧꦿ', 'ꦧꦽ', 'ꦧꦫ', 'ꦧꦔ'],
    answer: 'ꦧꦿ',
  },
  {
    id: 2,
    text: 'Gabungan huruf apa yang membentuk suku kata "kra"?',
    options: ['ꦏꦫ', 'ꦏꦥ', 'ꦏꦿ', 'ꦏꦽ'],
    answer: 'ꦏꦿ',
  },
  {
    id: 3,
    text: 'Tulisan aksara Jawa untuk "kya" yang benar adalah?',
    options: ['ꦏꦪ', 'ꦏꦽ', 'ꦏꦗ', 'ꦏꦾ'],
    answer: 'ꦏꦾ',
  },
  {
    id: 4,
    text: 'Bagaimana menulis "gla" dalam aksara Jawa gabungan?',
    options: ['ꦒ꧀ꦭ', 'ꦒꦭ','ꦒꦺꦭ', 'ꦒ꧀ꦊ'],
    answer: 'ꦒ꧀ꦭ',
  },
  {
    id: 5,
    text: 'Gabungan aksara untuk "sna" ditulis dengan?',
    options: ['ꦱꦤ','ꦱ꧀ꦤ', 'ꦱꦟ', 'ꦱꦔ'],
    answer: 'ꦱ꧀ꦤ',
  },
  {
    id: 6,
    text: 'Tulisan aksara Jawa gabungan untuk "mbu" adalah?',
    options: ['ꦩꦧꦸ', 'ꦩ꧀ꦧꦸ', 'ꦩꦸꦧ', 'ꦩꦧꦺ'],
    answer: 'ꦩ꧀ꦧꦸ',
  },
  {
    id: 7,
    text: 'Bagaimana cara menulis gabungan "ndr" dalam aksara Jawa?',
    options: ['ꦤꦢꦫ', 'ꦤ꧀ꦢꦫ', 'ꦤ꧀ꦢ꧀ꦉ', 'ꦤ꧀ꦢ꧀ꦫ'],
    answer: 'ꦤ꧀ꦢ꧀ꦫ',
  },
  {
    id: 8,
    text: 'Gabungan konsonan untuk "cya" dalam aksara Jawa ditulis?',
    options: ['ꦕꦪ', 'ꦕꦚ','ꦕꦾ', 'ꦕꦿ'],
    answer: 'ꦕꦾ',
  },
  {
    id: 9,
    text: 'Gabungan huruf "sma" dalam aksara Jawa adalah?',
    options: ['ꦱ꧀ꦩ', 'ꦱꦩ', 'ꦱꦶꦩ', 'ꦱꦺꦩ'],
    answer: 'ꦱ꧀ꦩ',
  },
  {
    id: 10,
    text: 'Apa bentuk yang benar untuk menulis "nya" dalam bentuk pasangan atau gabungan?',
    options: ['ꦚꦾ', 'ꦚ꧀ꦪ', 'ꦚꦁ', 'ꦚꦪ'],
    answer: 'ꦚ꧀ꦪ',
  },
];


const MateriGabungan = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = answer;
    setUserAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    return userAnswers.filter((ans, i) => ans === questions[i].answer).length;
  };

  const handleConfirmFinish = () => {
    setShowModal(false);
    setShowResult(true);
  };

  const handleCancelFinish = () => {
    setShowModal(false);
  };

  const current = questions[currentQuestion];

  if (showResult) {
    const score = calculateScore();
    const total = questions.length;
    const percentage = (score / total) * 100;
  
    let message;
    let borderColor;
  
    if (percentage === 100) {
      message = 'Luar biasa! Kamu dapat nilai 100! Wah, kamu benar-benar jago belajar Aksara Jawa! Terus pertahankan semangat belajarnya, ya. Kamu keren banget!';
      borderColor = 'green';
    } else if (percentage < 70) {
      message = 'Pelajari kembali materi gabungan aksara Jawa nya, ya!';
      borderColor = 'red';
    } else {
      message = 'Masih ada yang salah nih, tapi kamu sudah hebat! Yuk, pelajari lagi supaya makin jago baca dan nulis Aksara Jawa! Terus semangat belajarnya ya, kamu pasti bisa!';
      borderColor = 'orange';
    }
  
    return (
      <div style={{ backgroundColor: '#543A14', minHeight: '100vh', padding: '20px', color: '#000' }}>
        <Button
          variant="secondary"
          onClick={() => navigate('/exercise')}
        >
          Kembali ke latihan soal
        </Button>
  
        <Container style={{ backgroundColor: '#FFE3B3', borderRadius: '10px', padding: '30px', marginTop: '20px' }}>
          <Card className="p-4 mb-4" style={{ backgroundColor: '#fff', borderLeft: `10px solid ${borderColor}` }}>
            <h3 style={{ color: borderColor, fontWeight: 'bold' }}>Nilai {score * 10}</h3>
            <p style={{ marginBottom: '0' }}>{message}</p>
            <strong>Total soal: {total}</strong>
          </Card>
  
          {questions.map((q, i) => (
            <Card className="mb-3" key={i}>
              <Card.Body>
                <Card.Title><strong>{q.text}</strong></Card.Title>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {q.options.map((opt, idx) => {
                    const isCorrect = q.answer === opt;
                    const isSelected = userAnswers[i] === opt;
                    const bg = isCorrect ? '#d4edda' : isSelected ? '#f8d7da' : '#fff';
                    return (
                      <li key={idx} style={{ backgroundColor: bg, padding: '10px', borderRadius: '5px', marginBottom: '5px' }}>
                        {opt} {isCorrect ? '✅' : isSelected ? '❌' : ''}
                      </li>
                    );
                  })}
                </ul>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#543A14', minHeight: '100vh', padding: '20px', color: '#000' }}>
      <Button
        variant="link"
        onClick={() => navigate('/exercise')}
        style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}
      >
        <FaArrowLeft /> Kembali
      </Button>

      <h4 className="mt-3" style={{ color: '#fff', fontWeight: 'bold' }}>
        Latihan Soal Materi Gabungan
      </h4>
      <hr style={{ borderColor: '#fff' }} />

      <Container style={{ backgroundColor: '#FFDDAB', borderRadius: '10px', padding: '30px', maxWidth: '90%', marginTop: '20px', marginBottom: '40px', boxShadow: '2px 2px 10px rgba(0,0,0,0.3)' }}>
        <Row className="mb-4 justify-content-center">
          {questions.map((_, index) => (
            <Button
              key={index}
              variant={index === currentQuestion ? 'dark' : 'outline-dark'}
              onClick={() => setCurrentQuestion(index)}
              style={{ borderRadius: '50%', width: '40px', height: '40px', margin: '5px' }}
            >
              {index + 1}
            </Button>
          ))}
        </Row>

        <h4><strong>Soal {current.id}</strong></h4>
        <p>{current.text}</p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {current.options.map((option, idx) => (
            <li key={idx} style={{ marginBottom: '10px' }}>
              <Button
                variant={userAnswers[currentQuestion] === option ? 'dark' : 'outline-dark'}
                style={{ width: '100%', textAlign: 'left' }}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </Button>
            </li>
          ))}
        </ul>

        <Row className="mt-4 justify-content-between">
          <Col>
            {currentQuestion > 0 && (
              <Button variant="secondary" onClick={() => setCurrentQuestion(currentQuestion - 1)}>
                Soal Sebelumnya
              </Button>
            )}
          </Col>
          <Col className="text-end">
            {currentQuestion < questions.length - 1 ? (
              <Button variant="primary" onClick={() => setCurrentQuestion(currentQuestion + 1)}>
                Selanjutnya
              </Button>
            ) : (
              <Button variant="success" onClick={() => setShowModal(true)}>
                Selesai
              </Button>
            )}
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCancelFinish} centered>
        <Modal.Body className="text-center">
          <h5><strong>Sudah yakin dengan jawabanmu?</strong></h5>
          <p>Kalau sudah siap, klik “Ya” untuk mengakhiri latihan ya!</p>
          <div className="d-flex justify-content-center gap-2 mt-3">
            <Button variant="dark" onClick={handleConfirmFinish}>Ya</Button>
            <Button variant="light" onClick={handleCancelFinish}>Tidak</Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MateriGabungan;
