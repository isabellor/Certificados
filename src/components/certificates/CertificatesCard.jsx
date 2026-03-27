import React from 'react';
import './CertificatesCard.css';

const CertificatesCard = ({ cert }) => {
  const isBadgeOnly = cert.type.toLowerCase() === 'badge';

  const CardContent = (
    <>
      {/* Contenedor de la Imagen principal del certificado o del badge */}
      {(cert.image || cert.badge) && (
        <div className="cert-image-container">
          {cert.image ? (
             <img src={cert.image} alt={`Certificado visual de ${cert.title}`} className="cert-image" />
          ) : (
             <img src={cert.badge} alt={`Badge de ${cert.title}`} className="cert-badge-image" />
          )}

          {/* Si tiene ambos, el badge se superpone en la esquina derecha de la imagen principal */}
          {cert.image && cert.badge && (
            <div className="cert-badge-overlay">
               <img src={cert.badge} alt="Badge" className="cert-badge-image" />
            </div>
          )}
        </div>
      )}

      <div className="cert-content-wrapper">
        <div className={`cert-type-pill ${isBadgeOnly ? 'cert-type-badge' : ''}`}>
          {cert.type}
        </div>
        
        <div className="cert-header">
          <h3 className="cert-title">{cert.title}</h3>
          <p className="cert-issuer">
            En <strong>{cert.issuer}</strong> • {cert.date}
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
      </div>
    </>
  );

  // Si hay un enlace, renderizamos un <a>
  if (cert.link) {
    return (
      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-card">
        {CardContent}
      </a>
    );
  }

  // De otra forma un div normal
  return (
    <div className="cert-card">
      {CardContent}
    </div>
  );
};

export default CertificatesCard;
