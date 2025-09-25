const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up JavaScript Learning Server...\n');

// Create directories
const directories = [
    'views',
    'public',
    'public/css',
    'public/js',
    'public/images'
];

directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`✅ Created directory: ${dir}`);
    } else {
        console.log(`📁 Directory already exists: ${dir}`);
    }
});

// Check if Modules directory exists and copy it if needed
const modulesPath = path.join(__dirname, 'Modules');
const sourceModulesPath = 'c:\\Users\\rkris\\OneDrive - Illinois Institute of Technology\\FrontEndDevelopment\\Javascript\\Modules';

if (!fs.existsSync(modulesPath)) {
    console.log('\n📚 Setting up Modules directory...');
    console.log('You need to copy your PDF files to the "Modules" directory in your project root.');
    console.log(`Source: ${sourceModulesPath}`);
    console.log(`Destination: ${path.resolve(modulesPath)}`);
    
    // Create the directory
    fs.mkdirSync(modulesPath, { recursive: true });
    console.log('✅ Created Modules directory');
} else {
    console.log('✅ Modules directory already exists');
}

console.log('\n🎯 Setup Instructions:');
console.log('1. Run: npm install');
console.log('2. Copy your PDF files to the "Modules" directory');
console.log('3. Run: npm start (or npm run dev for development)');
console.log('4. Open http://localhost:3000 in your browser');

console.log('\n📋 Required PDF files:');
const requiredFiles = [
    'Module 1_ JavaScript Foundations Presentation.pdf',
    'Module 2_ Control Structures Presentation.pdf',
    'Module 3_ Functions Presentation.pdf',
    'Module 4_ Objects and Arrays Presentation.pdf',
    'Module 5_ DOM Manipulation Presentation.pdf',
    'Module 6_ Asynchronous JavaScript Presentation.pdf',
    'Module 7_ Modern JavaScript Features - Presentation Materials.pdf',
    'Module 8_ Error Handling and Debugging - JavaScript Course Presentation.pdf',
    'Module 9_ Testing JavaScript Code - Presentation Materials.pdf',
    'Module 10_ Final Project - University Management System.pdf'
];

requiredFiles.forEach((file, index) => {
    console.log(`${index + 1}. ${file}`);
});

console.log('\n✨ Setup complete! Your JavaScript Learning Server is ready to use.');