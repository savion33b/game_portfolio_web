const fs = require('fs');
const path = require('path');

const placeholderImages = [
  {
    name: 'placeholder-game1.jpg',
    text: 'San Andreas Unity',
    color: '#3B82F6'
  },
  {
    name: 'placeholder-game2.jpg',
    text: 'Boat Attack',
    color: '#10B981'
  },
  {
    name: 'placeholder-game3.jpg',
    text: 'Megacity Metro',
    color: '#8B5CF6'
  },
  {
    name: 'placeholder-game4.jpg',
    text: 'Chop Chop',
    color: '#F59E0B'
  },
  {
    name: 'placeholder-game5.jpg',
    text: 'Darkest Dungeon',
    color: '#EF4444'
  }
];

const svgTemplate = (text, color) => `
<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}"/>
  <text x="50%" y="50%" font-family="Arial" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>
`;

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Generate placeholder images
placeholderImages.forEach(image => {
  const svg = svgTemplate(image.text, image.color);
  fs.writeFileSync(path.join(publicDir, image.name), svg);
  console.log(`Generated ${image.name}`);
}); 