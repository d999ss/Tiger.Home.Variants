const fs = require('fs');
const path = require('path');

// Image assignments by division
const imageMap = {
  wound: [
    '/images/boredoptimism_human_skin_--ar_169_--raw_--profile_e1dtuj2_--v_350bc8db-8fea-4316-aa3b-ec44b72f8094_1.png',
    '/images/boredoptimism_human_skin_--ar_169_--raw_--profile_e1dtuj2_--v_350bc8db-8fea-4316-aa3b-ec44b72f8094_1.png',
    '/images/boredoptimism_human_skin_--ar_169_--raw_--profile_e1dtuj2_--v_350bc8db-8fea-4316-aa3b-ec44b72f8094_2.png',
    '/images/01.png',
    '/images/02.png',
  ],
  aesthetics: [
    '/images/boredoptimism_close_up_of_a_man_eye_--ar_9151_--raw_--v_7_6e1ef8a8-f234-4f8d-b09d-ab30df60ec89_0.png',
    '/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_6fbaafb0-1d29-4a2a-8229-3c226e2218c3_3.png',
    '/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_8b4c0ea2-d5a3-49a0-8000-f376fcb4ea78_1.png',
    '/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png',
    '/images/03.png',
  ],
  regentx: [
    '/images/boredoptimism_close_up_of_Tiger_eye_--ar_169_--raw_--profile__d0b094ae-d672-42f0-b38e-82826641a7d4_2.png',
    '/images/boredoptimism_close_up_of_Tiger_eye_--ar_169_--raw_--profile__d0b094ae-d672-42f0-b38e-82826641a7d4_3.png',
    '/images/05.png',
    '/images/06.png',
  ],
  international: [
    '/images/boredoptimism_close_up_of_a_man_eye_--ar_9151_--raw_--v_7_6e1ef8a8-f234-4f8d-b09d-ab30df60ec89_0.png',
    '/images/boredoptimism_close_up_of_a_man_eye_--ar_9151_--raw_--v_7_6e1ef8a8-f234-4f8d-b09d-ab30df60ec89_2.png',
    '/images/boredoptimism_close_up_of_eye_--ar_169_--raw_--profile_e1dtuj_de8adb74-d527-4570-b80d-18c28ad61f2d_0.png',
    '/images/boredoptimism_close_up_of_metal_--ar_169_--raw_--profile_e1dt_64d8410a-e155-4116-93eb-fbb6afaf6260_2.png',
    '/images/06.png',
  ],
};

const productsDir = path.join(__dirname, '../content/products');
const files = fs.readdirSync(productsDir).filter(f => f.endsWith('.mdx'));

let imageCounters = {
  wound: 0,
  aesthetics: 0,
  regentx: 0,
  international: 0,
};

files.forEach(file => {
  const filePath = path.join(productsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Extract division from frontmatter
  const divisionMatch = content.match(/division:\s*["']?(wound|aesthetics|regentx|international)["']?/);
  if (!divisionMatch) {
    console.log(`Skipping ${file} - no division found`);
    return;
  }

  const division = divisionMatch[1];
  const images = imageMap[division] || imageMap.wound;
  const imageIndex = imageCounters[division] % images.length;
  const heroImage = images[imageIndex];

  imageCounters[division]++;

  // Update heroImage field
  if (content.includes('heroImage: ""')) {
    content = content.replace('heroImage: ""', `heroImage: "${heroImage}"`);
  } else if (content.includes('heroImage:')) {
    content = content.replace(/heroImage:\s*["'][^"']*["']/, `heroImage: "${heroImage}"`);
  } else {
    // Add heroImage field after company field
    content = content.replace(
      /(company:\s*["'][^"']*["'],?)/,
      `$1\n  heroImage: "${heroImage}",`
    );
  }

  fs.writeFileSync(filePath, content);
  console.log(`✓ Updated ${file} with ${heroImage}`);
});

console.log('\nDone! Updated all product hero images.');
