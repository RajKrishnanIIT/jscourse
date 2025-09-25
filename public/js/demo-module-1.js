// Utility function to scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Variables Section
let createdVariables = {};

function createVariable() {
    const varName = document.getElementById('varName').value.trim();
    const varValue = document.getElementById('varValue').value;
    const varType = document.querySelector('input[name="varType"]:checked').value;
    
    if (!varName) {
        showResult('variableResult', 'Please enter a variable name', 'alert-warning');
        return;
    }
    
    if (!isValidVariableName(varName)) {
        showResult('variableResult', 'Invalid variable name! Use letters, numbers, $ and _ only. Cannot start with a number.', 'alert-warning');
        return;
    }
    
    // Determine the actual data type of the value
    let actualValue = parseValue(varValue);
    let valueString = typeof actualValue === 'string' ? `"${actualValue}"` : actualValue;
    
    // Store the variable
    createdVariables[varName] = {
        type: varType,
        value: actualValue,
        valueString: valueString
    };
    
    // Update the code display
    updateVariableCode();
    
    // Show result
    const resultMessage = `
        <strong>Variable Created:</strong><br>
        <code>${varType} ${varName} = ${valueString};</code><br>
        <strong>Type:</strong> ${typeof actualValue}<br>
        <strong>Value:</strong> ${actualValue}
    `;
    
    showResult('variableResult', resultMessage, 'alert-success');
    
    // Clear inputs
    document.getElementById('varName').value = '';
    document.getElementById('varValue').value = '';
}

function clearVariables() {
    createdVariables = {};
    document.getElementById('variableCode').textContent = '// Your variable declarations will appear here\nlet myVariable = "Hello World";\nconsole.log(myVariable);';
    showResult('variableResult', 'All variables cleared', 'alert-info');
}

function updateVariableCode() {
    let code = '// Your created variables:\n';
    
    for (const [name, info] of Object.entries(createdVariables)) {
        code += `${info.type} ${name} = ${info.valueString};\n`;
    }
    
    if (Object.keys(createdVariables).length > 0) {
        code += '\n// Display variables:\n';
        for (const [name] of Object.entries(createdVariables)) {
            code += `console.log("${name}:", ${name}, "Type:", typeof ${name});\n`;
        }
    }
    
    document.getElementById('variableCode').textContent = code;
}

function isValidVariableName(name) {
    // JavaScript variable name rules
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    const reserved = ['var', 'let', 'const', 'function', 'return', 'if', 'else', 'for', 'while', 'do', 'break', 'continue', 'switch', 'case', 'default', 'try', 'catch', 'finally', 'throw', 'new', 'this', 'typeof', 'instanceof', 'in', 'delete', 'void'];
    
    return regex.test(name) && !reserved.includes(name.toLowerCase());
}

function parseValue(value) {
    if (value === '') return '';
    if (value === 'true') return true;
    if (value === 'false') return false;
    if (value === 'null') return null;
    if (value === 'undefined') return undefined;
    
    // Try to parse as number
    if (!isNaN(value) && !isNaN(parseFloat(value))) {
        return parseFloat(value);
    }
    
    // Return as string
    return value;
}

// Data Types Section
function checkDataType() {
    const input = document.getElementById('dataInput').value;
    
    if (input === '') {
        showResult('dataTypeResult', 'Please enter a value to check', 'alert-warning');
        return;
    }
    
    const value = parseValue(input);
    const type = typeof value;
    
    let typeDescription = '';
    let examples = '';
    
    switch (type) {
        case 'string':
            typeDescription = 'Text data enclosed in quotes';
            examples = 'Examples: "Hello", \'World\', `Template`';
            break;
        case 'number':
            typeDescription = 'Numeric data (integers and decimals)';
            examples = 'Examples: 42, 3.14, -10, Infinity';
            break;
        case 'boolean':
            typeDescription = 'True or false values';
            examples = 'Examples: true, false';
            break;
        case 'object':
            if (value === null) {
                typeDescription = 'Represents "no value"';
                examples = 'Example: null';
            } else if (Array.isArray(value)) {
                typeDescription = 'Ordered list of values';
                examples = 'Examples: [1, 2, 3], ["a", "b"]';
            } else {
                typeDescription = 'Collection of key-value pairs';
                examples = 'Examples: {name: "John"}, {}';
            }
            break;
        case 'undefined':
            typeDescription = 'Variable declared but not assigned';
            examples = 'Example: undefined';
            break;
        default:
            typeDescription = 'Other data type';
    }
    
    const result = `
        <strong>Input:</strong> ${input}<br>
        <strong>Parsed Value:</strong> ${typeof value === 'string' && value !== input ? '"' + value + '"' : value}<br>
        <strong>Data Type:</strong> <span class="badge bg-primary">${type}</span><br>
        <strong>Description:</strong> ${typeDescription}<br>
        <strong>${examples}</strong>
    `;
    
    showResult('dataTypeResult', result, 'alert-success');
}

function showExamples() {
    const examples = `
        <strong>Data Type Examples:</strong><br><br>
        <strong>String:</strong> "Hello", 'World', \`Template\`<br>
        <strong>Number:</strong> 42, 3.14, -10, 0<br>
        <strong>Boolean:</strong> true, false<br>
        <strong>Null:</strong> null<br>
        <strong>Undefined:</strong> undefined<br>
        <strong>Object:</strong> {name: "John", age: 25}<br>
        <strong>Array:</strong> [1, 2, 3, "hello"]<br><br>
        <em>Try typing any of these values above!</em>
    `;
    
    showResult('dataTypeResult', examples, 'alert-info');
}

// Operators Section
function performOperation() {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);
    const operator = document.getElementById('operator').value;
    
    if (isNaN(operand1) || isNaN(operand2)) {
        showResult('operatorResult', 'Please enter valid numbers', 'alert-warning');
        return;
    }
    
    let result;
    let explanation = '';
    
    try {
        switch (operator) {
            case '+':
                result = operand1 + operand2;
                explanation = 'Addition adds two numbers together';
                break;
            case '-':
                result = operand1 - operand2;
                explanation = 'Subtraction finds the difference between two numbers';
                break;
            case '*':
                result = operand1 * operand2;
                explanation = 'Multiplication finds the product of two numbers';
                break;
            case '/':
                if (operand2 === 0) {
                    result = 'Infinity';
                    explanation = 'Division by zero results in Infinity';
                } else {
                    result = operand1 / operand2;
                    explanation = 'Division finds how many times one number fits into another';
                }
                break;
            case '%':
                result = operand1 % operand2;
                explanation = 'Modulus finds the remainder after division';
                break;
            case '**':
                result = operand1 ** operand2;
                explanation = 'Exponentiation raises the first number to the power of the second';
                break;
        }
        
        const resultMessage = `
            <strong>Calculation:</strong> ${operand1} ${operator} ${operand2} = <span class="badge bg-success">${result}</span><br>
            <strong>Explanation:</strong> ${explanation}<br>
            <strong>JavaScript Code:</strong> <code>let result = ${operand1} ${operator} ${operand2};</code>
        `;
        
        showResult('operatorResult', resultMessage, 'alert-success');
        
    } catch (error) {
        showResult('operatorResult', `Error: ${error.message}`, 'alert-danger');
    }
}

function performComparison() {
    const value1 = document.getElementById('compare1').value;
    const value2 = document.getElementById('compare2').value;
    const operator = document.getElementById('comparison').value;
    
    // Parse values intelligently
    const parsed1 = parseValue(value1);
    const parsed2 = parseValue(value2);
    
    let result;
    let explanation = '';
    
    try {
        switch (operator) {
            case '==':
                result = parsed1 == parsed2;
                explanation = 'Loose equality checks if values are equal (with type conversion)';
                break;
            case '===':
                result = parsed1 === parsed2;
                explanation = 'Strict equality checks if values and types are equal';
                break;
            case '!=':
                result = parsed1 != parsed2;
                explanation = 'Loose inequality checks if values are not equal (with type conversion)';
                break;
            case '!==':
                result = parsed1 !== parsed2;
                explanation = 'Strict inequality checks if values or types are not equal';
                break;
            case '<':
                result = parsed1 < parsed2;
                explanation = 'Less than comparison';
                break;
            case '>':
                result = parsed1 > parsed2;
                explanation = 'Greater than comparison';
                break;
            case '<=':
                result = parsed1 <= parsed2;
                explanation = 'Less than or equal comparison';
                break;
            case '>=':
                result = parsed1 >= parsed2;
                explanation = 'Greater than or equal comparison';
                break;
        }
        
        const resultMessage = `
            <strong>Comparison:</strong> ${value1} (${typeof parsed1}) ${operator} ${value2} (${typeof parsed2}) = <span class="badge bg-${result ? 'success' : 'danger'}">${result}</span><br>
            <strong>Explanation:</strong> ${explanation}<br>
            <strong>JavaScript Code:</strong> <code>${value1} ${operator} ${value2}</code>
        `;
        
        showResult('comparisonResult', resultMessage, 'alert-success');
        
    } catch (error) {
        showResult('comparisonResult', `Error: ${error.message}`, 'alert-danger');
    }
}

// Code Execution Section
function executeCode() {
    const code = document.getElementById('codeInput').value;
    const consoleOutput = document.getElementById('consoleOutput');
    
    if (!code.trim()) {
        consoleOutput.innerHTML = 'No code to execute...';
        return;
    }
    
    // Clear previous output
    consoleOutput.innerHTML = '';
    
    // Override console.log to capture output
    const originalLog = console.log;
    const outputs = [];
    
    console.log = function(...args) {
        outputs.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' '));
        originalLog.apply(console, args);
    };
    
    try {
        // Execute the code
        eval(code);
        
        // Display output
        if (outputs.length === 0) {
            consoleOutput.innerHTML = '<span class="text-muted">Code executed (no console output)</span>';
        } else {
            consoleOutput.innerHTML = outputs.map(output => 
                `<div>${escapeHtml(output)}</div>`
            ).join('');
        }
        
    } catch (error) {
        consoleOutput.innerHTML = `<div class="text-danger">Error: ${escapeHtml(error.message)}</div>`;
    } finally {
        // Restore original console.log
        console.log = originalLog;
    }
}

function clearCode() {
    document.getElementById('codeInput').value = '';
    document.getElementById('consoleOutput').innerHTML = 'Ready to run your code...';
}

function loadExample() {
    const example = `// JavaScript Basics Example
let name = "JavaScript";
let version = 2025;
let isAwesome = true;

console.log("Welcome to " + name + "!");
console.log("Current year: " + version);
console.log("Is JavaScript awesome? " + isAwesome);

// Data type checking
console.log("Type of name:", typeof name);
console.log("Type of version:", typeof version);
console.log("Type of isAwesome:", typeof isAwesome);

// Simple calculation
let sum = 10 + 5;
console.log("10 + 5 =", sum);`;

    document.getElementById('codeInput').value = example;
}

// Practice Exercise Section
function createPersonProfile() {
    const name = document.getElementById('personName').value.trim();
    const age = parseInt(document.getElementById('personAge').value);
    const city = document.getElementById('personCity').value.trim();
    const isStudent = document.getElementById('personStudent').checked;
    
    if (!name || !city || isNaN(age)) {
        showResult('profileResult', 'Please fill in all fields correctly', 'alert-warning');
        return;
    }
    
    // Generate code
    const code = `// Personal Information Variables
let name = "${name}";
let age = ${age};
let city = "${city}";
let isStudent = ${isStudent};

// Display information
console.log(\`Hello, I'm \${name}, \${age} years old\`);
console.log(\`I live in \${city}\`);
console.log(\`Student: \${isStudent}\`);

// Data types
console.log("Name type:", typeof name);
console.log("Age type:", typeof age);
console.log("City type:", typeof city);
console.log("Student type:", typeof isStudent);`;

    document.getElementById('profileCode').textContent = code;
    
    // Show result
    const result = `
        <strong>Profile Created Successfully!</strong><br><br>
        <strong>Name:</strong> ${name} (${typeof name})<br>
        <strong>Age:</strong> ${age} (${typeof age})<br>
        <strong>City:</strong> ${city} (${typeof city})<br>
        <strong>Student:</strong> ${isStudent} (${typeof isStudent})<br><br>
        <em>Check the generated code on the right! ➡️</em>
    `;
    
    showResult('profileResult', result, 'alert-success');
}

// Utility functions
function showResult(elementId, content, alertClass) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id '${elementId}' not found`);
        return;
    }
    element.innerHTML = content;
    element.className = `alert ${alertClass} show-result`;
    element.style.display = 'block';
    
    // Add some visual feedback
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Demo Module 1 JavaScript loaded');
    
    // Add Enter key support for inputs
    document.getElementById('dataInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') checkDataType();
    });
    
    document.getElementById('operand1').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performOperation();
    });
    
    document.getElementById('operand2').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performOperation();
    });
    
    document.getElementById('compare1').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performComparison();
    });
    
    document.getElementById('compare2').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performComparison();
    });
});