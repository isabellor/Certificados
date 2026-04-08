import React from 'react';
import CertificatesList from './components/certificates/CertificatesList';
import { certificatesData } from './components/data/certificates';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Background Decor */}
      <div className="decor-circle decor-1"></div>
      <div className="decor-circle decor-2"></div>

      <header className="hero-section">
        <div className="typewriter-container">
          <h1 className="hero-name">Hola, soy <span className="accent-name">Isabel Lorite</span>.</h1>
        </div>
        <h2 className="hero-title">Frontend Developer & QA Tester (In Training)</h2>
        <p className="hero-description">
          Bienvenido. En esta página documento los certificados y competencias prácticas que voy
          obteniendo durante mi formación en IT.
        </p>
      </header>

      <main className="container">
        <h2 className="section-title">Certificados</h2>
        <CertificatesList certificates={certificatesData} />
      </main>
    </div>
  );
}

export default App;
