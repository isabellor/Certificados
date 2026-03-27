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
        <span className="hero-greeting">¡Hola! Soy</span>
        <h1 className="hero-name">Isabel Lorite</h1>
        <h2 className="hero-title">Frontend Developer & QA Tester (In Progress)</h2>
        <p className="hero-description">
          Bienvenido a mi espacio. Aquí documento mi recorrido de aprendizaje y las habilidades 
          técnicas que he ido construyendo paso a paso.
        </p>
      </header>

      <main className="container">
        <h2 className="section-title">Certificaciones & Badges</h2>
        <CertificatesList certificates={certificatesData} />
      </main>
    </div>
  );
}

export default App;
