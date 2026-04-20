import certNode from '../../assets/certificates/2026-01-26_desarrollo-backend-con-node-js-talento-tech-es.pdf';
import certReact from '../../assets/certificates/2025-08-25_react-js-talento-tech-es.pdf';
import certIA from '../../assets/certificates/2025-09-16_introduccion-a-la-inteligencia-artificial-es.pdf';
import certFrontEnd from '../../assets/certificates/certificado front end engineer.pdf';
import certTestAuto from '../../assets/certificates/fundamentos de test automation.pdf';
import certGit from '../../assets/certificates/git certificado.pdf';
import certQA from '../../assets/certificates/qa automations engineer.pdf';
import certAppWebNode from '../../assets/certificates/2026-04-10_talento-tech-desarrollo-de-aplicaciones-web-node-js-es.pdf';
import certInterfaces from '../../assets/certificates/2026-04-14_talento-tech-desarrollo-de-interfaces-web-es.pdf';

// Helper function to get simple devicon URLs
const getIcon = (name) => {
  const iconMap = {
    html: 'html5/html5-original.svg',
    css: 'css3/css3-original.svg',
    javascript: 'javascript/javascript-original.svg',
    node: 'nodejs/nodejs-original.svg',
    react: 'react/react-original.svg',
    express: 'express/express-original.svg',
    vite: 'vitejs/vitejs-original.svg',
    git: 'git/git-original.svg',
    github: 'github/github-original.svg',
    cypress: 'cypressio/cypressio-original.svg',
    selenium: 'selenium/selenium-original.svg',
    postman: 'postman/postman-original.svg',
    playwright: 'playwright/playwright-original.svg',
    trello: 'trello/trello-plain.svg',
    'github actions': 'githubactions/githubactions-original.svg',
    
    // Some custom fallbacks
    newman: 'postman/postman-original.svg',
    appium: 'android/android-original.svg',
    gherkin: 'cucumber/cucumber-plain.svg'
  };

  const path = iconMap[name.toLowerCase()];
  return path 
    ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}` 
    : ''; // Empty string if no icon found
};

export const certificatesData = [
  {
    id: 8,
    title: 'QA Manual',
    issuer: 'Talento Tech',
    type: 'En progreso',
    date: 'Julio 2026',
    hours: 'En curso',
    description: 'Bases teóricas y prácticas del aseguramiento de calidad, creación de casos de prueba, reporte de bugs y metodologías ágiles.',
    skills: [
      { name: 'Trello', icon: getIcon('trello') }
    ],
    link: null
  },
  {
    id: 10,
    title: 'Desarrollo de Interfaces Web',
    issuer: 'Talento Tech',
    type: 'Insignia',
    date: 'Abril 2026',
    hours: '80 horas',
    description: 'Insignia obtenida por la habilidad y capacidad técnica para el diseño y construcción de interfaces web modernas, interactivas y responsivas.',
    skills: [
      { name: 'React', icon: getIcon('react') },
      { name: 'JavaScript', icon: getIcon('javascript') },
      { name: 'HTML', icon: getIcon('html') },
      { name: 'CSS', icon: getIcon('css') }
    ],
    link: certInterfaces
  },
  {
    id: 9,
    title: 'Desarrollo de Aplicaciones Web (Node.js)',
    issuer: 'Talento Tech',
    type: 'Insignia',
    date: 'Abril 2026',
    hours: '80 horas',
    description: 'Insignia otorgada por el dominio en la construcción de aplicaciones web y backend robustas en el entorno de ejecución de Node.js.',
    skills: [
      { name: 'Node.js', icon: getIcon('node') },
      { name: 'Express', icon: getIcon('express') },
      { name: 'JavaScript', icon: getIcon('javascript') }
    ],
    link: certAppWebNode
  },
  {
    id: 4,
    title: 'QA Automation Engineer',
    issuer: 'Desafío Latam',
    type: 'Certificado',
    date: '2026',
    hours: '400 horas',
    description: 'Especialización en automatización de pruebas de software, cubriendo herramientas líder en la industria para pruebas E2E, API y móviles.',
    skills: [
      { name: 'Cypress', icon: getIcon('cypress') },
      { name: 'Selenium', icon: getIcon('selenium') },
      { name: 'Postman', icon: getIcon('postman') },
      { name: 'Newman', icon: getIcon('newman') },
      { name: 'Playwright', icon: getIcon('playwright') },
      { name: 'Appium', icon: getIcon('appium') },
      { name: 'Gherkin', icon: getIcon('gherkin') },
      { name: 'GitHub Actions', icon: getIcon('github actions') },
      { name: 'Trello', icon: getIcon('trello') }
    ],
    link: certQA
  },
  {
    id: 6,
    title: 'Fundamentos de Test Automation',
    issuer: 'Desafío Latam',
    type: 'Certificado',
    date: '2026',
    hours: '58 horas',
    description: 'Introducción y bases del testing automatizado de software.',
    skills: [
      { name: 'Cypress', icon: getIcon('cypress') },
      { name: 'Postman', icon: getIcon('postman') }
    ],
    link: certTestAuto
  },
  {
    id: 7,
    title: 'Git y GitHub',
    issuer: 'Ministerio de Educación CABA - Talento Tech',
    type: 'Certificado',
    date: 'Febrero 2026',
    description: 'Control de versiones, trabajo colaborativo y manejo de repositorios de código.',
    skills: [
      { name: 'Git', icon: getIcon('git') },
      { name: 'GitHub', icon: getIcon('github') }
    ],
    link: certGit
  },
  {
    id: 3,
    title: 'Node.js',
    issuer: 'Talento Tech',
    type: 'Certificado',
    date: 'Enero 2026',
    hours: '80 horas',
    description: 'Desarrollo backend con JavaScript, creación de APIs RESTful robustas y seguras mediante Express, manejo de rutas, bases de datos y lógica del servidor.',
    skills: [
      { name: 'Node.js', icon: getIcon('node') },
      { name: 'Express', icon: getIcon('express') }
    ],
    link: certNode
  },
  {
    id: 5,
    title: 'Transformación Digital con IA y Automatización',
    issuer: 'Desafío Latam',
    type: 'Certificado',
    date: 'Septiembre 2025',
    hours: '150 horas',
    description: 'Fundamentos de la Inteligencia Artificial y su aplicación en la industria tecnológica.',
    skills: [],
    link: certIA
  },
  {
    id: 2,
    title: 'React JS',
    issuer: 'Talento Tech',
    type: 'Certificado',
    date: 'Agosto 2025',
    hours: '80 horas',
    description: 'Construcción avanzada de interfaces interactivas, manejo del estado global, hooks y creación de SPA (Single Page Applications) modernas y escalables.',
    skills: [
      { name: 'React', icon: getIcon('react') },
      { name: 'Vite', icon: getIcon('vite') }
    ],
    link: certReact
  },
  {
    id: 1,
    title: 'Front-End Engineer Career Path',
    issuer: 'Codecademy',
    type: 'Certificado',
    date: '2025',
    hours: '145 horas',
    description: 'Programa completo de Front End Engineering cubriendo desde los fundamentos de la web hasta frameworks modernos y arquitecturas de aplicaciones.',
    skills: [
      { name: 'HTML', icon: getIcon('html') },
      { name: 'CSS', icon: getIcon('css') },
      { name: 'JavaScript', icon: getIcon('javascript') },
      { name: 'React', icon: getIcon('react') },
      { name: 'Git', icon: getIcon('git') },
      { name: 'GitHub', icon: getIcon('github') }
    ],
    link: certFrontEnd
  }
];
