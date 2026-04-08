import React from 'react';
import './CertificatesCard.css';

const CertificatesCard = ({ cert }) => {
  return (
    <div className="cert-card">
      


      <div className="cert-content-wrapper">
        <div className="cert-header">
          <h3 className="cert-title">{cert.title}</h3>
          <p className="cert-issuer">
            En <strong>{cert.issuer}</strong> • {cert.date}
            {cert.hours && <span className="cert-hours"> • {cert.hours}</span>}
          </p>
        </div>

        <p className="cert-description">{cert.description}</p>

        {cert.skills && cert.skills.length > 0 && (
          <div className="cert-skills-area">
            <div className="skills-title">Tecnologías</div>
            <div className="skills-list">
              {cert.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill.icon && <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Botón Ver Certificado */}
        {cert.link && (
          <div className="cert-action">
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-button">
              Ver Certificado
            </a>
          </div>
        )}

      </div>
    </div>
  );
};

export default CertificatesCard;
