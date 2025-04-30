import React from 'react';
import { createRoot } from 'react-dom/client';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.scss'

// Importation des pages
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Error from './pages/Error/Error.jsx';
import Location from './pages/Location/Location.jsx'

// Importation des components
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/location/:id' element={<Location />} />
        <Route path='/404' element={<Error />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
