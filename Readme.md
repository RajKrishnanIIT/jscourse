# JavaScript Learning Server

A Node.js Express server application for teaching JavaScript through an interactive web platform.

## Features

- 📚 10 comprehensive JavaScript modules
- 🎯 Progressive learning path from basics to advanced topics
- 📄 PDF download functionality for all presentations
- 📱 Responsive design with Bootstrap
- 🔍 Module navigation and progress tracking
- 🎨 Modern, clean user interface
- 📊 RESTful API for module data

## Quick Start

1. **Install Dependencies**

   ```powershell
   npm install
   ```

2. **Setup Directories and Files**

   ```powershell
   node setup.js
   ```

3. **Copy Your PDF Files**
   Copy all your PDF presentation files to the `Modules/` directory

4. **Start the Server**

   ```powershell
   npm start
   ```

   Or for development with auto-reload:

   ```powershell
   npm run dev
   ```

5. **Open in Browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
javascript-learning-server/
├── server.js              # Main Express server
├── package.json           # Project dependencies
├── setup.js              # Setup script
├── views/                # EJS templates
│   ├── layout.ejs        # Main layout template
│   ├── index.ejs         # Homepage
│   ├── module.ejs        # Module detail page
│   └── error.ejs         # Error page
├── public/               # Static assets
│   ├── css/
│   │   └── style.css     # Custom styles
│   └── js/
│       └── main.js       # Client-side JavaScript
└── Modules/              # PDF presentation files
    ├── Module 1_ JavaScript Foundations Presentation.pdf
    ├── Module 2_ Control Structures Presentation.pdf
    └── ... (all other module PDFs)
```

## API Endpoints

- `GET /` - Homepage with all modules
- `GET /module/:id` - Individual module page
- `GET /download/:id` - Download module PDF
- `GET /api/modules` - JSON API for all modules
- `GET /api/module/:id` - JSON API for specific module

## Modules Covered

1. **JavaScript Foundations** - Variables, data types, operators, basic syntax
2. **Control Structures** - If/else, switch, loops
3. **Functions** - Declaration, expression, arrow functions
4. **Objects and Arrays** - Complex data structures
5. **DOM Manipulation** - Interactive web elements
6. **Asynchronous JavaScript** - Promises, async/await, callbacks
7. **Modern JavaScript Features** - ES6+ syntax and features
8. **Error Handling and Debugging** - Best practices and tools
9. **Testing JavaScript Code** - Unit testing and frameworks
10. **Final Project** - University Management System

## Technologies Used

- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **Frontend**: Bootstrap 5, Font Awesome, Custom CSS/JS
- **File Handling**: Node.js fs module for PDF serving

## Development

To run in development mode with automatic restarts:

```powershell
npm run dev
```

## Customization

- Modify `server.js` to add new routes or functionality
- Update templates in `views/` directory for UI changes
- Add custom styles in `public/css/style.css`
- Extend client-side functionality in `public/js/main.js`

## License

MIT License
