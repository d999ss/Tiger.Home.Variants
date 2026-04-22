const fs = require('fs');
const path = require('path');

// Image assignments by page type
const imageMap = {
  home: '/images/boredoptimism_close_up_of_Tiger_eye_--ar_169_--raw_--profile__d0b094ae-d672-42f0-b38e-82826641a7d4_2.png',
  company: [
    '/images/boredoptimism_close_up_of_Tiger_eye_--ar_169_--raw_--profile__d0b094ae-d672-42f0-b38e-82826641a7d4_2.png',
    '/images/boredoptimism_close_up_of_Tiger_eye_--ar_169_--raw_--profile__d0b094ae-d672-42f0-b38e-82826641a7d4_3.png',
    '/images/05.png',
    '/images/06.png',
  ],
  solutions: [
    '/images/boredoptimism_human_skin_--ar_169_--raw_--profile_e1dtuj2_--v_350bc8db-8fea-4316-aa3b-ec44b72f8094_1.png',
    '/images/boredoptimism_human_skin_--ar_169_--raw_--profile_e1dtuj2_--v_350bc8db-8fea-4316-aa3b-ec44b72f8094_1.png',
    '/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png',
    '/images/01.png',
    '/images/02.png',
    '/images/03.png',
  ],
};

function addBackgroundImage(filePath, backgroundImage) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if Hero component exists
  if (!content.includes('<Hero')) {
    console.log(`⊘ Skipping ${filePath} - no Hero component`);
    return false;
  }

  // Check if already has backgroundImage
  if (content.includes('backgroundImage=')) {
    console.log(`⊘ Skipping ${filePath} - already has backgroundImage`);
    return false;
  }

  // Add backgroundImage prop to Hero component
  // Match the Hero opening tag and add backgroundImage
  content = content.replace(
    /(<Hero\s*\n[^>]*?)(\n\s*\/>|\n\s*>)/,
    `$1\n        backgroundImage="${backgroundImage}"$2`
  );

  fs.writeFileSync(filePath, content);
  return true;
}

// Process home page
const homePath = path.join(__dirname, '../app/page.tsx');
if (addBackgroundImage(homePath, imageMap.home)) {
  console.log(`✓ Updated home page with ${imageMap.home}`);
}

// Process company pages
let companyIndex = 0;
const companyDir = path.join(__dirname, '../app/company');
const companyPages = fs.readdirSync(companyDir).filter(f => {
  const stat = fs.statSync(path.join(companyDir, f));
  return stat.isDirectory();
});

companyPages.forEach(page => {
  const pagePath = path.join(companyDir, page, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    const img = imageMap.company[companyIndex % imageMap.company.length];
    if (addBackgroundImage(pagePath, img)) {
      console.log(`✓ Updated /company/${page} with ${img}`);
    }
    companyIndex++;
  }
});

// Process solutions pages
let solutionsIndex = 0;
const solutionsDir = path.join(__dirname, '../app/solutions');
if (fs.existsSync(solutionsDir)) {
  const solutionsPages = fs.readdirSync(solutionsDir).filter(f => {
    const stat = fs.statSync(path.join(solutionsDir, f));
    return stat.isDirectory();
  });

  solutionsPages.forEach(page => {
    const pagePath = path.join(solutionsDir, page, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      const img = imageMap.solutions[solutionsIndex % imageMap.solutions.length];
      if (addBackgroundImage(pagePath, img)) {
        console.log(`✓ Updated /solutions/${page} with ${img}`);
      }
      solutionsIndex++;
    }
  });
}

console.log('\nDone! Added background images to all Hero components.');
