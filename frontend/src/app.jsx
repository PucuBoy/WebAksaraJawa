import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WhyLearnPage from './pages/WhyLearnPage';
import HistoryPage from './pages/HistoryPage';
import DailyLifePage from './pages/DailyLifePage';
import BenefitsPage from './pages/BenefitsPage';
import FactsPage from './pages/FactsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/why-learn" element={<WhyLearnPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/daily-life" element={<DailyLifePage />} />
        <Route path="/benefits" element={<BenefitsPage />} />
        <Route path="/facts" element={<FactsPage />} />
      </Routes>
    </Router>
  );
}

export default App;