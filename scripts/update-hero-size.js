const fs = require('fs');
const path = require('path');

const solutionPages = [
  'app/solutions/biocare/page.tsx',
  'app/solutions/reconstruction/page.tsx',
  'app/solutions/dressings/page.tsx',
  'app/solutions/birth-tissue/page.tsx',
  'app/solutions/regentx-labs/page.tsx',
  'app/solutions/regenerative/page.tsx',
  'app/solutions/volume/page.tsx',
  'app/solutions/wound/page.tsx',
  'app/solutions/shape/page.tsx',
  'app/solutions/renewal/page.tsx',
];

function addSizeProp(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  let content = fs.readFileSync(fullPath, 'utf8');

  // Check if Hero component exists
  if (!content.includes('<Hero')) {
    console.log(`⊘ Skipping ${filePath} - no Hero component`);
    return false;
  }

  // Check if already has size prop
  if (content.includes('size=')) {
    console.log(`⊘ Skipping ${filePath} - already has size prop`);
    return false;
  }

  // Add size="large" prop to Hero component
  // Match Hero with backgroundImage and add size prop after it
  content = content.replace(
    /(backgroundImage="[^"]*")(\n\s*\/>)/,
    '$1\n        size="large"$2'
  );

  fs.writeFileSync(fullPath, content);
  return true;
}

solutionPages.forEach(page => {
  if (addSizeProp(page)) {
    console.log(`✓ Updated ${page} with size="large"`);
  }
});

console.log('\nDone! Added size="large" to all solutions page Hero components.');
