const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../client/src/data/realPortfolioData.js');
let content = fs.readFileSync(targetFile, 'utf8');

// Live projects to add or enrich
const newItems = [
  {
    id: "vidtube-video-streaming-platform",
    title: "VidTube — Video Streaming & Media Discovery Platform",
    category: "website-development",
    categoryLabel: "Interactive Web Application",
    year: "2025",
    image: "/portfolio/web-design/vidtube-video-streaming-platform.webp",
    medium: "Full-stack React & Node.js video streaming platform with YouTube API integration and custom media player",
    dimensions: "Responsive Web Application",
    description: "Responsive video streaming platform featuring dynamic category feeds, instant search suggestions, custom video playback, and responsive sidebar navigation.",
    alt: "VidTube modern video streaming web application interface with responsive video feed and search bar",
    tag: "Video Streaming",
    best: true,
    demoLink: "https://ytclone-ktoy-nbk736dpe-naddo210s-projects.vercel.app/",
    sourceLink: "https://github.com/naddo210/ytclone",
    technologies: ["React", "Node.js", "YouTube API", "Tailwind CSS"]
  },
  {
    id: "islamic-quiz-app-portal",
    title: "Islamic Heritage & Culture Interactive Quiz Platform",
    category: "website-development",
    categoryLabel: "Educational Web Application",
    year: "2025",
    image: "/portfolio/web-design/islamic-quiz-app-portal.webp",
    medium: "Interactive educational quiz engine with multi-tiered difficulty, real-time timer, and score analytics",
    dimensions: "Interactive Web Application",
    description: "Interactive educational portal celebrating Islamic history and culture with timed quiz modules, instant feedback scoring, and progress tracking.",
    alt: "Islamic Quiz App web application interface with interactive questions and progress tracking",
    tag: "Quiz App",
    best: true,
    demoLink: "https://islamic-quiz-786m.netlify.app/",
    sourceLink: "https://github.com/naddo210",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive UI"]
  },
  {
    id: "nadeem-salmani-portfolio-v1",
    title: "Nadeem Salmani — Studio Developer Portfolio V1",
    category: "website-development",
    categoryLabel: "Personal Flagship Portfolio",
    year: "2024",
    image: "/portfolio/web-design/nadeem-salmani-portfolio-v1.webp",
    medium: "Minimalist portfolio website highlighting developer projects, technical skills, and client inquiries",
    dimensions: "Responsive Portfolio Web",
    description: "Creative developer portfolio featuring project showcases, responsive work cards, technical skill matrices, and direct contact integration.",
    alt: "Nadeem Salmani personal developer portfolio website homepage showcasing projects and contact section",
    tag: "Portfolio Web",
    best: false,
    demoLink: "https://nadeport.netlify.app/",
    sourceLink: "https://github.com/naddo210",
    technologies: ["HTML5", "CSS3", "JavaScript"]
  }
];

// Let's load the current array
const portfolioModule = require('../client/src/data/realPortfolioData.js');
let items = portfolioModule.REAL_PORTFOLIO_ITEMS;

// Update existing web items with live links
const existingUpdates = {
  "the-nadeems-gourmet-ordering-web": {
    demoLink: "https://food-res-1frontend1.onrender.com/",
    sourceLink: "https://github.com/naddo210/nadeemp1",
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  },
  "mirza-hajj-umrah-travel-portal": {
    demoLink: "https://www.mirza-hajj-umrah-tours.in/",
    sourceLink: "https://github.com/naddo210/MirzaT",
    technologies: ["React", "Node.js", "MongoDB", "GSAP"]
  },
  "ah-properties-real-estate-portal": {
    demoLink: "https://www.ahproperties.in/",
    sourceLink: "https://github.com/naddo210/property-advisor",
    technologies: ["HTML5", "CSS3", "JavaScript"]
  },
  "greek-automata-techfest-website": {
    demoLink: "https://xgreek-automata.vercel.app/",
    sourceLink: "https://github.com/naddo210",
    technologies: ["React", "GSAP", "Tailwind CSS", "Google Forms"]
  },
  "shikha-singh-luxury-model-portfolio": {
    demoLink: "",
    sourceLink: "https://github.com/naddo210",
    technologies: ["React", "Tailwind CSS", "Vite", "Editorial UI"]
  }
};

items = items.map(item => {
  if (existingUpdates[item.id]) {
    return { ...item, ...existingUpdates[item.id] };
  }
  return item;
});

// Check if new items already exist; if not, add them
newItems.forEach(newItem => {
  const exists = items.some(i => i.id === newItem.id);
  if (!exists) {
    items.push(newItem);
    console.log(`+ Added new project: ${newItem.title}`);
  } else {
    items = items.map(i => i.id === newItem.id ? { ...i, ...newItem } : i);
    console.log(`✓ Updated existing project: ${newItem.title}`);
  }
});

const output = `/**
 * Real HUNAR Studio Portfolio Data
 * Auto-generated from optimized client reference assets.
 * 100% genuine studio commissions, fine art studies, and architectural projects.
 * Featured items (best: true) are prioritized first for peak visual impact.
 * Total authentic studio works: ${items.length}
 */

export const REAL_PORTFOLIO_ITEMS = ${JSON.stringify(items, null, 2)};
`;

fs.writeFileSync(targetFile, output, 'utf8');
console.log(`✓ Saved realPortfolioData.js with ${items.length} total authentic projects.`);
