import React from 'react';
import CertificatesList from './components/certificates/CertificatesList';
import { certificatesData } from './components/data/certificates';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <nav className="top-nav">
        <span className="nav-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          loriteisabel@gmail.com
        </span>
        <a href="https://wa.me/5491167932488" target="_blank" rel="noopener noreferrer" className="nav-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
          </svg>
          WhatsApp me
        </a>
      </nav>

      <header className="hero-section">
        <div className="hero-content">
          <div className="typewriter-container">
            <h1 className="hero-name">Hola, soy <span className="accent-name">Isabel Lorite</span>.</h1>
          </div>
          <h2 className="hero-title">Frontend Developer & QA Tester (In Training)</h2>
          <p className="hero-description">
            ¡Hola! En este espacio comparto las certificaciones y badges que validan mis habilidades como desarrolladora. Cada credencial representa proyectos prácticos, horas de código y un compromiso constante con el aprendizaje tecnológico.
          </p>
        </div>

        <a href="#certificados" className="scroll-indicator">
          <span>Explorar mis certificados</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </header>

      <main id="certificados" className="container">
        <CertificatesList certificates={certificatesData} />
      </main>
    </div>
  );
}

export default App;
