const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Module data structure
const modules = [
    {
        id: 1,
        title: "JavaScript Foundations",
        description: "Learn the basics of JavaScript including variables, data types, and syntax",
        filename: "Module 1_ JavaScript Foundations Presentation.pdf",
        topics: ["Variables", "Data Types", "Operators", "Basic Syntax"]
    },
    {
        id: 2,
        title: "Control Structures",
        description: "Master conditional statements and loops in JavaScript",
        filename: "Module 2_ Control Structures Presentation.pdf",
        topics: ["If/Else Statements", "Switch Cases", "For Loops", "While Loops"]
    },
    {
        id: 3,
        title: "Functions",
        description: "Understand function declarations, expressions, and arrow functions",
        filename: "Module 3_ Functions Presentation.pdf",
        topics: ["Function Declaration", "Function Expression", "Arrow Functions", "Parameters & Arguments"]
    },
    {
        id: 4,
        title: "Objects and Arrays",
        description: "Work with complex data structures in JavaScript",
        filename: "Module 4_ Objects and Arrays Presentation.pdf",
        topics: ["Object Literals", "Array Methods", "Object Methods", "Destructuring"]
    },
    {
        id: 5,
        title: "DOM Manipulation",
        description: "Learn to interact with web page elements dynamically",
        filename: "Module 5_ DOM Manipulation Presentation.pdf",
        topics: ["Selecting Elements", "Event Handling", "Modifying Content", "CSS Manipulation"]
    },
    {
        id: 6,
        title: "Asynchronous JavaScript",
        description: "Master promises, async/await, and handling asynchronous operations",
        filename: "Module 6_ Asynchronous JavaScript Presentation.pdf",
        topics: ["Callbacks", "Promises", "Async/Await", "Fetch API"]
    },
    {
        id: 7,
        title: "Modern JavaScript Features",
        description: "Explore ES6+ features and modern JavaScript syntax",
        filename: "Module 7_ Modern JavaScript Features - Presentation Materials.pdf",
        topics: ["Let/Const", "Template Literals", "Spread Operator", "Modules"]
    },
    {
        id: 8,
        title: "Error Handling and Debugging",
        description: "Learn to handle errors gracefully and debug JavaScript code",
        filename: "Module 8_ Error Handling and Debugging - JavaScript Course Presentation.pdf",
        topics: ["Try/Catch", "Error Types", "Debugging Tools", "Best Practices"]
    },
    {
        id: 9,
        title: "Testing JavaScript Code",
        description: "Introduction to testing frameworks and writing testable code",
        filename: "Module 9_ Testing JavaScript Code - Presentation Materials.pdf",
        topics: ["Unit Testing", "Integration Testing", "Testing Frameworks", "Mocking"]
    },
    {
        id: 10,
        title: "Final Project - University Management System",
        description: "Apply all learned concepts in a comprehensive project",
        filename: "Module 10_ Final Project - University Management System.pdf",
        topics: ["Project Planning", "Implementation", "Testing", "Deployment"]
    }
];

// Routes
app.get('/', (req, res) => {
    res.render('index', { modules });
});

app.get('/module/:id', (req, res) => {
    const moduleId = parseInt(req.params.id);
    const module = modules.find(m => m.id === moduleId);
    
    if (!module) {
        return res.status(404).render('error', { message: 'Module not found' });
    }
    
    res.render('module', { module });
});

// Demo routes - handle each module specifically
app.get('/demo/:id', (req, res) => {
    const moduleId = parseInt(req.params.id);
    const module = modules.find(m => m.id === moduleId);
    
    if (!module) {
        return res.status(404).render('error', { message: 'Module not found' });
    }
    
    // Check which modules have demos available
    const availableDemos = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // UPDATED: Added Module 6, 7, 8, and 9
    
    if (availableDemos.includes(moduleId)) {
        try {
            res.render(`demo-module-${moduleId}`, { module });
        } catch (error) {
            console.error(`Demo template not found for module ${moduleId}:`, error.message);
            res.status(404).render('error', { 
                message: `Demo template for Module ${moduleId} is being prepared. Please check back later!` 
            });
        }
    } else {
        res.status(404).render('error', { 
            message: `Interactive demo for Module ${moduleId}: ${module.title} is coming soon! Currently available: Modules 1, 2, and 3.` 
        });
    }
});

app.get('/download/:id', (req, res) => {
    const moduleId = parseInt(req.params.id);
    const module = modules.find(m => m.id === moduleId);
    
    if (!module) {
        return res.status(404).json({ error: 'Module not found' });
    }
    
    const filePath = path.join(__dirname, 'Modules', module.filename);
    
    // Check if file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).json({ error: 'File not found' });
        }
        
        res.download(filePath, module.filename);
    });
});

app.get('/api/modules', (req, res) => {
    res.json(modules);
});

app.get('/api/module/:id', (req, res) => {
    const moduleId = parseInt(req.params.id);
    const module = modules.find(m => m.id === moduleId);
    
    if (!module) {
        return res.status(404).json({ error: 'Module not found' });
    }
    
    res.json(module);
});

// Start server
app.listen(PORT, () => {
    console.log(`JavaScript Learning Server running on http://localhost:${PORT}`);
    console.log('Available modules:');
    modules.forEach(module => {
        console.log(`  ${module.id}. ${module.title}`);
    });
    console.log('\nAvailable demos:');
    console.log('  1. JavaScript Foundations');
    console.log('  2. Control Structures');
    console.log('  3. Functions');
    console.log('  4. Objects and Arrays');
    console.log('  5. DOM Manipulation');
    console.log('  6. Asynchronous JavaScript');
    console.log('  7. Modern JavaScript Features');
    console.log('  8. Error Handling and Debugging');
    console.log('  9. Testing JavaScript');
});