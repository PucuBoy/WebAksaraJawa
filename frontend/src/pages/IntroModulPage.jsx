import React from "react";
import Navbar from "../components/Navbar";
import OrangAngkatTangan from "../assets/orang-angkat-tangan.png";
import AksaraSwara from "../assets/aksara-swara.jpg";
import AksaraRekan from "../assets/aksara-rekan.jpg";
import AksaraAngka from "../assets/aksara-angka.jpg";
import AksaraMurda from "../assets/aksara-murda.jpg";
import Ilustrasimasjawa1 from "../assets/ilustrasimasjawa1.png";
import Sandangan from "../assets/sandangan.jpg";
import Gabungan from "../assets/gabungan.jpg";

import Ha from "../assets/ha.jpg";
import Na from "../assets/na.png";
import Ca from "../assets/ca.png";
import Ra from "../assets/ra.png";
import Ka from "../assets/ka.png";
import Da from "../assets/da.png";
import Ta from "../assets/ta.png";
import Sa from "../assets/sa.png";
import Wa from "../assets/wa.png";
import La from "../assets/la.jpg";
import Pa from "../assets/pa.jpg";
import Dha from "../assets/dha.jpg";
import Ja from "../assets/ja.jpg";
import Ya from "../assets/ya.jpg";
import Nya from "../assets/nya.jpg";
import Ma from "../assets/ma.jpg";
import Ga from "../assets/ga.jpg";
import Ba from "../assets/ba.jpg";
import Tha from "../assets/tha.jpg";
import Nga from "../assets/nga.jpg";

import { Container, Row, Col, Button, Card } from "react-bootstrap";

const aksaraNglegena = [
  { huruf: "HA", gambar: Ha },
  { huruf: "NA", gambar: Na },
  { huruf: "CA", gambar: Ca },
  { huruf: "RA", gambar: Ra },
  { huruf: "KA", gambar: Ka },
  { huruf: "DA", gambar: Da },
  { huruf: "TA", gambar: Ta },
  { huruf: "SA", gambar: Sa },
  { huruf: "WA", gambar: Wa },
  { huruf: "LA", gambar: La },
  { huruf: "PA", gambar: Pa },
  { huruf: "DHA", gambar: Dha },
  { huruf: "JA", gambar: Ja },
  { huruf: "YA", gambar: Ya },
  { huruf: "NYA", gambar: Nya },
  { huruf: "MA", gambar: Ma },
  { huruf: "GA", gambar: Ga },
  { huruf: "BA", gambar: Ba },
  { huruf: "THA", gambar: Tha },
  { huruf: "NGA", gambar: Nga },
];

const sectionStyle = {
  backgroundColor: "#543A14",
  color: "#fff8f0",
  paddingBottom: "2rem",
  minHeight: "100vh",
  fontFamily: "Segoe UI, sans-serif",
};

const IntroModulPage = () => {
  return (
    <div style={sectionStyle}>
      <Navbar />
      <Container>
        {/* Hero Section */}
        <div
          style={{
            backgroundColor: "#8B4513",
            borderRadius: "1rem",
            marginBottom: "2rem",
          }}
        >
          <Row
            style={{ backgroundColor: "#FFDDAB" }}
            className="rounded p-4 align-items-center"
          >
            <Col md={7}>
              <h1 style={{ color: "#543A14", fontWeight: "bold" }}>
                Pengenalan Aksara Jawa
              </h1>
              <p style={{ color: "#543A14" }}>
                Yuk berkenalan dengan aksara HaNaCaRaKa, huruf tradisional dari
                tanah Jawa.
              </p>
              <Button
                style={{ backgroundColor: "#543A14", borderColor: "#543A14" }}
                href="/"
              >
                Kembali ke Beranda
              </Button>
            </Col>
            <Col md={5} className="text-center">
              <img
                src={OrangAngkatTangan}
                alt="Karakter Anak"
                style={{ width: "280px" }}
              />
            </Col>
          </Row>
        </div>

        {/* Navigasi Internal */}
        <div className="mb-4">
          <style>
            {`
              .custom-rounded-btn {
                background-color: #FFDDAB;
                color: #543A14;
                border: 2px solid #FFDDAB;
                border-radius: 100px;
                padding: 8px 20px;
                margin-right: 10px;
                font-weight: 500;
                transition: all 0.3s ease;
              }

              .custom-rounded-btn:hover,
              .custom-rounded-btn:active,
              .custom-rounded-btn:focus {
                background-color: #ffffff !important;
                color: #543A14 !important;
                border-color: #FFDDAB !important;
              }
            `}
          </style>

          <Button className="custom-rounded-btn" href="#pengenalan">
            Pengenalan
          </Button>
          <Button className="custom-rounded-btn" href="#gabungan">
            Gabungan
          </Button>
          <Button className="custom-rounded-btn" href="#sandangan">
            Sandangan
          </Button>
        </div>

        {/* Pengenalan Section */}
        <div id="pengenalan">
          {/* Aksara Nglegena */}
          <Row className="mb-5">
            <Col>
              <Row className="align-items-center mb-5">
                <Col md={5} className="text-center">
                  <img
                    src={Ilustrasimasjawa1}
                    alt="Ilustrasi 1"
                    style={{ width: "280px" }}
                  />
                </Col>
                <Col md={6}>
                  <h3>Apa itu aksara nglegena?</h3>
                  <p>
                    Aksara nglegena adalah aksara dasar yang terdiri dari 20
                    huruf utama.
                  </p>
                </Col>
              </Row>

              <Row xs={2} sm={3} md={4} lg={5} className="g-4">
                {aksaraNglegena.map((aksara, index) => (
                  <Col key={index}>
                    <Card className="text-center shadow">
                      <Card.Img
                        variant="top"
                        src={aksara.gambar}
                        style={{
                          height: "100px",
                          objectFit: "contain",
                          padding: "1rem",
                        }}
                      />
                      <Card.Body>
                        <Card.Title>{aksara.huruf}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          {/* Aksara Swara */}
          <Row className="mb-5">
            <Col md={6}>
              <h3>Apa itu aksara swara?</h3>
              <p>
                Aksara swara digunakan untuk melambangkan vokal awal seperti A,
                I, U, E, O.
              </p>
            </Col>
            <Col md={5} className="text-center">
              <img
                src={Ilustrasimasjawa1}
                alt="Ilustrasi 1"
                style={{ width: "280px" }}
              />
            </Col>
            <Col md={6}>
              <img
                src={AksaraSwara}
                alt="Aksara Swara"
                className="img-fluid rounded"
                style={{ width: "100%", maxWidth: "600px" }}
              />
            </Col>
          </Row>

          {/* Aksara Rekan */}
          <Row className="mb-5">
            <Col md={5} className="text-center">
              <img
                src={Ilustrasimasjawa1}
                alt="Ilustrasi 1"
                style={{ width: "280px" }}
              />
            </Col>
            <Col md={6}>
              <h3>Apa itu aksara rekan?</h3>
              <p>
                Aksara rekan digunakan untuk menulis huruf dari bahasa Arab
                seperti kha, dzha, dza, fa.
              </p>
            </Col>
            <Col md={6}>
              <img
                src={AksaraRekan}
                alt="Aksara Rekan"
                className="img-fluid rounded"
                style={{ width: "100%", maxWidth: "600px" }}
              />
            </Col>
          </Row>

          {/* Aksara Angka */}
          <Row className="mb-5">
            <Col md={6}>
              <h3>Apa itu aksara angka?</h3>
              <p>Digunakan untuk menulis angka dalam aksara Jawa.</p>
            </Col>
            <Col md={5} className="text-center">
              <img
                src={Ilustrasimasjawa1}
                alt="Ilustrasi 1"
                style={{ width: "280px" }}
              />
            </Col>
            <Col md={6}>
              <img
                src={AksaraAngka}
                alt="Aksara Angka"
                className="img-fluid rounded"
                style={{ width: "100%", maxWidth: "600px" }}
              />
            </Col>
          </Row>

          {/* Aksara Murda */}
          <Row className="mb-5">
            <Col md={5} className="text-center">
              <img
                src={Ilustrasimasjawa1}
                alt="Ilustrasi"
                style={{ width: "280px" }}
              />
            </Col>
            <Col md={6}>
              <h3>Apa itu aksara murda?</h3>
              <p>
                Aksara murda adalah versi kapital dari aksara Jawa, digunakan
                untuk nama penting dan penghormatan.
              </p>
            </Col>
            <Col md={6}>
              <img
                src={AksaraMurda}
                alt="Aksara Murda"
                className="img-fluid rounded"
                style={{ width: "100%", maxWidth: "600px" }}
              />
            </Col>
          </Row>
        </div>

        {/* Gabungan Section */}
        <Row id="gabungan" className="mb-5">
          <Col>
            <h2 className="mb-4">Apa itu Gabungan Aksara Jawa?</h2>
            <p>
              Aksara Nglegéna adalah huruf-huruf dasar dalam aksara Jawa.
              Disebut nglegéna karena bentuknya berdiri sendiri tanpa tambahan
              apa pun. Terdiri dari 20 aksara pokok yang masing-masing mewakili
              satu konsonan dan vokal inheren /a/.
            </p>
            <p>
              Contohnya: kata <strong>"mangan"</strong> ditulis dengan kombinasi{" "}
              <strong>MA + NGA + sandangan N</strong>.
            </p>
            <div className="text-center">
              <img
                src={Gabungan}
                alt="Contoh Gabungan Aksara"
                style={{ width: "300px" }}
              />
            </div>
          </Col>
        </Row>

        {/* Sandangan Section */}
        <Row id="sandangan" className="mb-5">
          <Col>
            <h2 className="mb-4">Apa itu Sandangan?</h2>
            <p>
              Sandhangan adalah tanda di Aksara Jawa yang berfungsi seperti
              vokal dan bunyi tambahan dalam huruf Latin. Kalau aksara utama
              menyatakan konsonan dasar, maka sandhangan melengkapinya dengan
              bunyi vokal atau pelafalan khusus.
            </p>
            <ul>
              <li>
                <strong>Pasangan:</strong> Ditempatkan di bawah aksara
                sebelumnya.
              </li>
              <li>
                <strong>Sandhangan Swara:</strong> Mengubah vokal aksara utama.
              </li>
              <li>
                <strong>Contoh:</strong> pasangan dari KA adalah bentuk kecil
                yang diletakkan di bawah aksara sebelumnya.
              </li>
            </ul>
            <div className="text-center">
              <img
                src={Sandangan}
                alt="Contoh Sandangan"
                style={{ width: "300px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IntroModulPage;
