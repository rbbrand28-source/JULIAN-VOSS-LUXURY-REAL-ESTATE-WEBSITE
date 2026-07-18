import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LuxuryHome from './components/LuxuryHome';
import Properties from './components/Properties';
import PropertyDetail from './components/PropertyDetail';
import Advisor from './components/Advisor';
import Collections from './components/Collections';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LuxuryHome />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/advisor" element={<Advisor />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;