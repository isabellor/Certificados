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
    id: 1,
    title: 'Front-End Engineer Career Path',
    issuer: 'Codecademy',
    type: 'Cert. & Badge',
    date: '2025',
    description: 'Programa completo de Front End Engineering cubriendo desde los fundamentos de la web hasta frameworks modernos y arquitecturas de aplicaciones.',
    skills: [
      { name: 'HTML', icon: getIcon('html') },
      { name: 'CSS', icon: getIcon('css') },
      { name: 'JavaScript', icon: getIcon('javascript') },
      { name: 'React', icon: getIcon('react') },
      { name: 'Git', icon: getIcon('git') },
      { name: 'GitHub', icon: getIcon('github') }
    ],
    image: 'https://placehold.co/600x400/e2a694/ffffff?text=Certificado+Placeholder', // Reemplazar con la ruta de tu imagen real en /assets
    badge: 'https://placehold.co/100x100/4a4543/ffffff?text=Badge', // Reemplazar con el badge real
    link: '#', // Reemplaza esto con el link a tu certificado (credly, web, pdf, etc)
    hasImage: true
  },
  {
    id: 2,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    type: 'Certificado',
    date: '2024',
    description: 'Desarrollo de páginas web responsivas y accesibles utilizando las mejores prácticas de semántica y estilización avanzada.',
    skills: [
      { name: 'HTML', icon: getIcon('html') },
      { name: 'CSS', icon: getIcon('css') }
    ],
    image: 'https://placehold.co/600x400/f5ddd6/4a4543?text=Certificado+FCC',
    badge: null,
    link: '#',
    hasImage: true
  },
  {
    id: 3,
    title: 'React y Node.js',
    issuer: 'Talento Tech',
    type: 'Badge',
    date: '2025',
    description: 'Construcción de aplicaciones web Full Stack modernas y escalables.',
    skills: [
      { name: 'React', icon: getIcon('react') },
      { name: 'Node.js', icon: getIcon('node') },
      { name: 'Express', icon: getIcon('express') },
      { name: 'Vite', icon: getIcon('vite') }
    ],
    image: null,
    badge: 'https://placehold.co/100x100/e2a694/fff?text=Badge',
    link: '#',
    hasImage: false
  },
  {
    id: 4,
    title: 'QA Automation',
    issuer: 'Desafío Latam',
    type: 'Cert. & Badge',
    date: '2024',
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
    image: 'https://placehold.co/600x400/4a4543/ffffff?text=Certificado+QA',
    badge: 'https://placehold.co/100x100/f5ddd6/4a4543?text=Badge',
    link: '#',
    hasImage: true
  },
  {
    id: 5,
    title: 'Inteligencia Artificial',
    issuer: 'Desafío Latam',
    type: 'Badge',
    date: '2025',
    description: 'Fundamentos de la Inteligencia Artificial y su aplicación en la industria tecnológica.',
    skills: [],
    image: null,
    badge: 'https://placehold.co/100x100/fdf5f3/4a4543?text=Badge',
    link: '#',
    hasImage: false
  }
];
