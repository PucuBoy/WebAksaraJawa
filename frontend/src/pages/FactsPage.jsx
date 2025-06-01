import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import masblangkon from '../assets/masblangkon.png';

const FactsPage = () => {
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
          <Col md={4}>
            <img
              src={masblangkon}
              alt="mas blangkon"
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </Col>
          <Col md={8}>
            <div style={{ color: '#FFFFFF' }}>
              <h1 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700',
                textAlign: 'right',
                marginBottom: '20px'
              }}>
                FAKTA MENARIK<br />
                AKSARA JAWA
              </h1>

              <p style={{ marginBottom: '30px', textAlign: 'right' }}>
                Berikut beberapa fakta menarik tentang aksara Jawa yang jarang diketahui:
              </p>

              <div style={{ marginBottom: '20px' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#FFFFFF' }}>• Turunan dari Aksara Brahmi India</h3>
                    <p>Aksara Jawa merupakan turunan dari aksara Brahmi India, yang masuk ke Nusantara melalui 
                    aksara Pallawa dan berkembang menjadi aksara Kawi sebelum akhirnya menjadi aksara Jawa 
                    modern. Aksara ini juga berkerabat dekat dengan aksara Bali.</p>
                  </li>

                  <li style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#FFFFFF' }}>• Digunakan untuk Banyak Bahasa</h3>
                    <p>Selain untuk menulis bahasa Jawa, aksara ini juga digunakan untuk menulis bahasa Sunda, 
                    Madura, Sasak, Melayu, serta bahasa historis seperti Sanskerta dan Kawi.</p>
                  </li>

                  <li style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#FFFFFF' }}>• Sistem Penulisan Abugida</h3>
                    <p>Aksara Jawa adalah sistem abugida, artinya setiap huruf dasar mewakili satu suku kata dengan 
                    vokal bawaan /a/ atau /ɔ/. Vokal tersebut bisa diubah dengan tanda diakritik (sandhangan).</p>
                  </li>

                  <li style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#FFFFFF' }}>• Memiliki Struktur dan Simbol Khusus</h3>
                    <p>Aksara Jawa terdiri dari 20 aksara dasar (nglegena), simbol pasangan untuk menghilangkan 
                    vokal bawaan, serta sandhangan untuk mengubah bunyi vokal atau menambah konsonan 
                    tertentu. Selain itu, ada juga angka Jawa yang digunakan dalam dokumen kuno.</p>
                  </li>

                  <li style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#FFFFFF' }}>• Filosofi dan Legenda</h3>
                    <p>Susunan aksara Jawa (hanacaraka) dipercaya mengandung filosofi dan kisah legenda Aji Saka, 
                    yang menceritakan tentang dua abdi setia dan nilai-nilai moral di balik urutan hurufnya.</p>
                  </li>

                  <li style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#FFFFFF' }}>• Media Penulisan yang Beragam</h3>
                    <p>Sepanjang sejarahnya, aksara Jawa pernah ditulis di batu, logam, daun lontar, dan kertas. 
                    Penggunaan kertas mulai meluas sejak abad ke-13 seiring penyebaran Islam di Jawa.</p>
                  </li>

                  <li style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#FFFFFF' }}>• Pernah Digunakan di Media Massa dan Uang Kertas</h3>
                    <p>Aksara Jawa pernah digunakan dalam surat kabar, buku pelajaran, hingga uang kertas pada 
                    masa kolonial Belanda. Surat kabar pertama yang menggunakan aksara Jawa cetak 
                    adalah Bataviaasch Courant pada tahun 1825.</p>
                  </li>

                  <li style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#FFFFFF' }}>• Masuk ke Unicode dan Google Translate</h3>
                    <p>Aksara Jawa kini sudah masuk dalam standar Unicode, sehingga bisa digunakan di komputer 
                    dan perangkat digital. Bahkan, aksara Jawa juga sudah tersedia di Google Translate, 
                    menandakan pengakuan global terhadap kekayaan budaya ini.</p>
                  </li>

                  <li style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#FFFFFF' }}>• Masih Diajarkan di Sekolah</h3>
                    <p>Aksara Jawa tetap diajarkan sebagai muatan lokal di sekolah-sekolah di Yogyakarta, Jawa 
                    Tengah, Jawa Timur, dan sebagian Jawa Barat, meski penerapannya dalam kehidupan sehari-
                    hari semakin terbatas.</p>
                  </li>
                </ul>

                <p style={{ marginTop: '30px' }}>
                  Aksara Jawa bukan hanya sistem tulisan, tetapi juga cerminan sejarah, filosofi, dan kekayaan 
                  budaya yang terus dijaga dan diadaptasi hingga era digital saat ini.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FactsPage;