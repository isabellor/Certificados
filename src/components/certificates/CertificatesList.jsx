import React from 'react';
import CertificatesCard from './CertificatesCard';
import './CertificatesList.css';

const CertificatesList = ({ certificates }) => {
  return (
    <div className="certificates-grid">
      {certificates.map((cert) => (
        <CertificatesCard key={cert.id} cert={cert} />
      ))}
    </div>
  );
};

export default CertificatesList;
