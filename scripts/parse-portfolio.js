const fs = require('fs');

const code = fs.readFileSync('scripts/portfolio-bundle.js', 'utf-8');

// Let's search for keywords like "github", "live", "demo", "title", "category"
// Often projects are an array of objects
const projectMatches = [];

// Look for patterns like {title:..., description:..., or id:..., title:...}
// Let's search for occurrences of "github" or "live" or "vercel" or "http"
const regex = /{[^{}]*(?:title|name)[^{}]*(?:github|live|demo|link|image)[^{}]*}/gi;
let match;
while ((match = regex.exec(code)) !== null) {
  projectMatches.push(match[0]);
}

console.log('Regex matches count:', projectMatches.length);

// Let's also inspect strings around "projects" or project arrays
const pIdx = code.indexOf('projects');
console.log('Index of "projects":', pIdx);

// Search for all occurrences of github.com
const ghMatches = code.match(/https:\/\/github\.com\/[a-zA-Z0-9_\-\.\/]+/g);
console.log('GitHub URLs:', Array.from(new Set(ghMatches || [])));

// Search for all vercel.app or netlify.app or live demo links
const liveMatches = code.match(/https:\/\/[a-zA-Z0-9_\-]+\.(?:vercel|netlify)\.app[a-zA-Z0-9_\-\.\/]*/g);
console.log('Live Demo URLs:', Array.from(new Set(liveMatches || [])));
