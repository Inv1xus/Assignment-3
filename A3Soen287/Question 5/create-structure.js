const fs = require('fs');
const path = require('path');

// Define the directory structure
const structure = {
  'server.js': '',
  'views': {
    'partials': {
      'header.ejs': '',
      'footer.ejs': ''
    },
    'home.html': '',
    'browse.html': '',
    'find.html': '',
    'dogCare.html': '',
    'catCare.html': '',
    'register.html': '',
    'login.html': '',
    'logout.html': '',
    'petGiveaway.html': '',
    'privacy.html': '',
    'about.html': ''
  },
  'public': {
    'css': {
      'style.css': ''
    },
    'js': {
      'main.js': ''
    }
  },
  'data': {
    'login.txt': '',
    'petData.txt': ''
  }
};

// Function to create directories and files recursively
function createStructure(base, struct) {
  for (const key in struct) {
    const fullPath = path.join(base, key);
    if (typeof struct[key] === 'string') {
      // Write file
      try {
        fs.writeFileSync(fullPath, struct[key]);
      } catch (err) {
        console.error(`Error creating file ${fullPath}: ${err}`);
      }
    } else {
      // Create directory
      try {
        if (!fs.existsSync(fullPath)) {
          fs.mkdirSync(fullPath, { recursive: true });
        }
        createStructure(fullPath, struct[key]);
      } catch (err) {
        console.error(`Error creating directory ${fullPath}: ${err}`);
      }
    }
  }
}

// Ensure the base directory exists
const baseDir = 'Question 4';
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

// Create the directory structure inside the base directory
createStructure(baseDir, structure);

console.log('Directory structure created successfully');
