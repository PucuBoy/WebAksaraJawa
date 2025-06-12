import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import IntroModulPage from './pages/IntroModulPage';
import WhyLearnPage from './pages/WhyLearnPage';
import HistoryPage from './pages/HistoryPage';
import DailyLifePage from './pages/DailyLifePage';
import BenefitsPage from './pages/BenefitsPage';
import FactsPage from './pages/FactsPage';
import ExercisePage from './pages/ExercisePage';
import MateriPengenalan from './pages/MateriPengenalan';
import MateriGabungan from './pages/MateriGabungan';
import MateriSandangan from './pages/MateriSandangan';
import KlasifikasiGambarPage from './pages/KlasifikasiGambarPage';
import ImageClassifier from './pages/ImageClassifierPage';

function AnimatedRoutes(){
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/intro-modul" element={<IntroModulPage />} />
          <Route path="/why-learn" element={<WhyLearnPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/daily-life" element={<DailyLifePage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/facts" element={<FactsPage />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/exercise/pengenalan" element={<MateriPengenalan />} />
          <Route path="/exercise/gabungan" element={<MateriGabungan />} />
          <Route path="/exercise/sandangan" element={<MateriSandangan />} />
          <Route path="/klasifikasi-gambar" element={<KlasifikasiGambarPage />} />
          <Route path="/klasifikasi/ImageClassifierPage" element={<ImageClassifier />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
