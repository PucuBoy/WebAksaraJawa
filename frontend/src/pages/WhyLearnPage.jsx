import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import orangmengapa from '../assets/orangmengapa.png';

const WhyLearnPage = () => {
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
          <Col className="d-flex align-items-start">
            <div style={{ color: '#FFFFFF' }}>
              {/* Header */}
              <div className="d-flex flex-column flex-md-row align-items-center mb-4 text-center text-md-start">
                <img
                  src={orangmengapa}
                  alt="Maskot Aksara Jawa"
                  style={{ width: '150px', marginBottom: '15px', marginRight: '0', marginRight: '20px' }}
                  className="me-md-3"
                />
                <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#fff' }}>
                  PENTINGNYA BELAJAR<br />AKSARA JAWA
                </h1>
              </div>


              {/* Introduction */}
              <p className="mb-4">
                Belajar aksara Jawa penting karena memberikan manfaat yang luas, baik dari segi budaya, pengetahuan,
                ekonomi, hingga penguatan identitas. Berikut alasan utama mengapa kita harus belajar aksara Jawa:
              </p>

              {/* Bullet Points */}
              <div style={{ marginLeft: '20px' }}>
                {[
                  {
                    title: 'Melestarikan Warisan Budaya dan Identitas',
                    text: 'Aksara Jawa adalah bagian penting dari kekayaan budaya Indonesia, khususnya masyarakat Jawa. Dengan mempelajarinya, kita ikut menjaga dan melestarikan warisan leluhur agar tidak punah di tengah arus globalisasi.'
                  },
                  {
                    title: 'Mengakses Naskah Klasik dan Pengetahuan Masa Lalu',
                    text: 'Banyak naskah kuno, sastra klasik, dan dokumen sejarah ditulis dalam aksara Jawa. Kemampuan membaca aksara ini memungkinkan kita memahami nilai-nilai, filosofi, dan sejarah yang diwariskan nenek moyang.'
                  },
                  {
                    title: 'Nilai Filosofis dan Moral',
                    text: 'Aksara Jawa tidak hanya sekadar tulisan, tetapi juga sarat dengan filosofi dan nilai-nilai luhur yang dapat memperkaya wawasan dan membentuk karakter.'
                  },
                  {
                    title: 'Peluang Ekonomi dan Profesi',
                    text: 'Keahlian dalam aksara Jawa membuka peluang menjadi transliterator atau pengalih aksara, yang saat ini cukup dibutuhkan dan dihargai tinggi. Selain itu, aksara Jawa juga dapat digunakan sebagai ragam hias atau kaligrafi bernilai ekonomi.'
                  },
                  {
                    title: 'Mendorong Kreativitas dan Seni',
                    text: 'Aksara Jawa dapat diaplikasikan dalam seni lukis, desain grafis, dan kerajinan tangan, memperkaya dunia seni dan kreativitas dengan sentuhan budaya lokal.'
                  },
                  {
                    title: 'Menghormati Tradisi dan Upacara Adat',
                    text: 'Dalam banyak upacara adat dan kegiatan spiritual masyarakat Jawa, aksara Jawa masih digunakan untuk menulis mantra, doa, dan teks sakral. Memahami aksara ini berarti ikut menghormati dan melestarikan tradisi tersebut.'
                  },
                  {
                    title: 'Membangun Jembatan Antar Generasi',
                    text: 'Mengajarkan dan mempelajari aksara Jawa membantu meneruskan nilai-nilai budaya dan tradisi dari generasi tua ke generasi muda, memperkuat kohesi sosial dan penghargaan terhadap warisan leluhur.'
                  }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <span style={{ marginRight: '10px', fontSize: '20px' }}>•</span>
                    <div>
                      <h3 style={{ margin: 0 }}>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Conclusion */}
              <p className="mt-4">
                Singkatnya, belajar aksara Jawa bukan hanya soal kemampuan membaca dan menulis, tetapi juga tentang 
                menghargai, melestarikan, dan mengembangkan kekayaan budaya bangsa serta membuka peluang di bidang 
                ekonomi, seni, dan pendidikan.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyLearnPage;
