console.log('🚀 Module 3 Simple Demo Loading...');

// Utility function to show results
function showResult(elementId, content, alertClass = '') {
    console.log('showResult called for:', elementId);
    
    const element = document.getElementById(elementId);
    if (!element) {
        console.error('Element not found:', elementId);
        alert('Debug: Element not found: ' + elementId);
        return false;
    }
    
    // Clear any existing classes and add new content
    element.className = '';
    element.innerHTML = content;
    
    // Add some basic styling
    element.style.display = 'block';
    element.style.padding = '15px';
    element.style.border = '1px solid #ddd';
    element.style.borderRadius = '5px';
    element.style.backgroundColor = '#f8f9fa';
    element.style.minHeight = '60px';
    
    // Scroll to result for visibility
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    console.log('✅ Result displayed successfully');
    return true;
}

// Quick test function
function quickTest() {
    console.log('🧪 Quick test running...');
    
    const result = document.getElementById('quickTestResult');
    if (result) {
        result.innerHTML = '<span style="color: green; font-weight: bold;">✅ JavaScript is working perfectly!</span>';
        result.style.fontSize = '16px';
        console.log('✅ Quick test passed');
    } else {
        alert('Quick test element not found!');
        console.error('quickTestResult element not found');
    }
}

// 1. Function Declaration Demo
function runDeclarationDemo() {
    console.log('🔧 Running declaration demo...');
    
    try {
        // Function Declaration (this is hoisted)
        function greetUser(name) {
            return "Hello, " + name + "! Welcome to our JavaScript course! 👋";
        }
        
        const userName = document.getElementById('userName').value.trim() || 'Student';
        const result = greetUser(userName);
        
        console.log('Declaration demo result:', result);
        
        const output = `
            <div style="background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🎯 FUNCTION DECLARATION DEMO</strong>
            </div>
            
            <div style="background: #e3f2fd; padding: 12px; border-left: 4px solid #2196f3; margin: 10px 0;">
                <strong>📝 Function Code:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px;">
                function greetUser(name) { return "Hello, " + name + "! Welcome!"; }
                </code>
            </div>
            
            <div style="background: #f3e5f5; padding: 12px; border-left: 4px solid #9c27b0; margin: 10px 0;">
                <strong>⚡ Execution:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px;">
                greetUser("${userName}")
                </code>
            </div>
            
            <div style="background: #c8e6c9; padding: 15px; border-left: 4px solid #4caf50; margin: 10px 0;">
                <strong>📺 OUTPUT:</strong><br>
                <div style="font-size: 18px; color: #2e7d32; font-weight: bold; margin-top: 8px;">
                    ${result}
                </div>
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <small><em>✨ Function declarations are hoisted - they can be called before their definition!</em></small>
            </div>
        `;
        
        showResult('declarationResult', output);
        
    } catch (error) {
        console.error('Declaration demo error:', error);
        showResult('declarationResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

// 2. Function Expression Demo  
function runExpressionDemo() {
    console.log('🔧 Running expression demo...');
    
    try {
        // Function Expression (assigned to variable)
        const multiply = function(a, b) {
            return a * b;
        };
        
        const num1 = parseFloat(document.getElementById('num1').value) || 5;
        const num2 = parseFloat(document.getElementById('num2').value) || 3;
        const result = multiply(num1, num2);
        
        console.log('Expression demo result:', result);
        
        const output = `
            <div style="background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🧮 FUNCTION EXPRESSION DEMO</strong>
            </div>
            
            <div style="background: #e8f5e8; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>📝 Function Code:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px;">
                const multiply = function(a, b) { return a * b; };
                </code>
            </div>
            
            <div style="background: #f3e5f5; padding: 12px; border-left: 4px solid #9c27b0; margin: 10px 0;">
                <strong>⚡ Execution:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px;">
                multiply(${num1}, ${num2})
                </code>
            </div>
            
            <div style="background: #c8e6c9; padding: 15px; border-left: 4px solid #4caf50; margin: 10px 0;">
                <strong>📺 OUTPUT:</strong><br>
                <div style="font-size: 18px; color: #2e7d32; font-weight: bold; margin-top: 8px;">
                    ${num1} × ${num2} = ${result}
                </div>
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <small><em>📝 Function expressions are NOT hoisted - must declare before use!</em></small>
            </div>
        `;
        
        showResult('expressionResult', output);
        
    } catch (error) {
        console.error('Expression demo error:', error);
        showResult('expressionResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

// 3. Arrow Function Demo
function runArrowDemo() {
    console.log('🔧 Running arrow function demo...');
    
    try {
        // Arrow Function (modern ES6 syntax)  
        const double = arr => arr.map(n => n * 2);
        
        const input = document.getElementById('numbers').value || '1, 2, 3, 4, 5';
        const numbers = input.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
        
        if (numbers.length === 0) {
            showResult('arrowResult', '<div style="color: orange;">⚠️ Please enter valid numbers separated by commas</div>');
            return;
        }
        
        const doubled = double(numbers);
        
        console.log('Arrow function result:', doubled);
        
        const output = `
            <div style="background: linear-gradient(135deg, #ffc107, #ff8f00); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🏹 ARROW FUNCTION DEMO</strong>
            </div>
            
            <div style="background: #fff8e1; padding: 12px; border-left: 4px solid #ffc107; margin: 10px 0;">
                <strong>📝 Function Code:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px;">
                const double = arr => arr.map(n => n * 2);
                </code>
            </div>
            
            <div style="background: #f3e5f5; padding: 12px; border-left: 4px solid #9c27b0; margin: 10px 0;">
                <strong>⚡ Execution:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px;">
                double([${numbers.join(', ')}])
                </code>
            </div>
            
            <div style="background: #c8e6c9; padding: 15px; border-left: 4px solid #4caf50; margin: 10px 0;">
                <strong>📺 OUTPUT:</strong><br>
                <div style="margin-top: 8px;">
                    <strong>Original Array:</strong> [${numbers.join(', ')}]<br>
                    <strong style="color: #f57f17; font-size: 16px;">Doubled Array: [${doubled.join(', ')}]</strong>
                </div>
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <small><em>⚡ Arrow functions are perfect for array methods like map(), filter(), reduce()!</em></small>
            </div>
        `;
        
        showResult('arrowResult', output);
        
    } catch (error) {
        console.error('Arrow function demo error:', error);
        showResult('arrowResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

// 4. Parameters Demo
function runParametersDemo() {
    console.log('🔧 Running parameters demo...');
    
    try {
        // Function with default parameters
        function introduce(name, age = "unknown") {
            if (age === "unknown") {
                return `Hi, I'm ${name} and my age is not specified.`;
            } else {
                return `Hi, I'm ${name} and I'm ${age} years old.`;
            }
        }
        
        // Rest parameters example
        function sum(...numbers) {
            return numbers.reduce((total, num) => total + num, 0);
        }
        
        const name = document.getElementById('personName').value.trim() || 'Anonymous';
        const ageInput = document.getElementById('personAge').value.trim();
        const age = ageInput ? parseInt(ageInput) : undefined;
        
        const introResult = introduce(name, age);
        const sumResult = sum(1, 2, 3, 4, 5);
        
        console.log('Parameters demo results:', { introResult, sumResult });
        
        const output = `
            <div style="background: linear-gradient(135deg, #dc3545, #c82333); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>⚙️ FUNCTION PARAMETERS DEMO</strong>
            </div>
            
            <div style="background: #f8d7da; padding: 12px; border-left: 4px solid #dc3545; margin: 10px 0;">
                <strong>📝 Functions Used:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px; display: block; margin: 4px 0;">
                function introduce(name, age = "unknown") { ... }
                </code>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px; display: block; margin: 4px 0;">
                function sum(...numbers) { ... }
                </code>
            </div>
            
            <div style="background: #c8e6c9; padding: 15px; border-left: 4px solid #4caf50; margin: 10px 0;">
                <strong>📺 OUTPUT:</strong><br>
                <div style="margin-top: 8px;">
                    <strong>Default Parameters:</strong><br>
                    <div style="color: #d32f2f; margin: 5px 0; font-weight: bold;">
                        introduce("${name}"${age ? ', ' + age : ''}) → "${introResult}"
                    </div>
                    <br>
                    <strong>Rest Parameters:</strong><br>
                    <div style="color: #d32f2f; margin: 5px 0; font-weight: bold;">
                        sum(1, 2, 3, 4, 5) → ${sumResult}
                    </div>
                </div>
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <small><em>🎯 Default parameters provide fallback values, rest parameters collect multiple arguments!</em></small>
            </div>
        `;
        
        showResult('parametersResult', output);
        
    } catch (error) {
        console.error('Parameters demo error:', error);
        showResult('parametersResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

// 5. Calculator Practice
function runCalculator() {
    console.log('🔧 Running calculator...');
    
    try {
        // Function Declaration
        function add(a, b) {
            return a + b;
        }
        
        // Function Expression
        const subtract = function(a, b) {
            return a - b;
        };
        
        // Arrow Function
        const multiply = (a, b) => a * b;
        
        const a = parseFloat(document.getElementById('calcA').value) || 10;
        const b = parseFloat(document.getElementById('calcB').value) || 5;
        const operation = document.getElementById('calcOp').value;
        
        let result;
        let funcType;
        let symbol;
        let functionCode;
        
        switch(operation) {
            case 'add':
                result = add(a, b);
                funcType = 'Function Declaration';
                symbol = '+';
                functionCode = 'function add(a, b) { return a + b; }';
                break;
            case 'subtract':
                result = subtract(a, b);
                funcType = 'Function Expression';
                symbol = '-';
                functionCode = 'const subtract = function(a, b) { return a - b; };';
                break;
            case 'multiply':
                result = multiply(a, b);
                funcType = 'Arrow Function';
                symbol = '×';
                functionCode = 'const multiply = (a, b) => a * b;';
                break;
            default:
                result = 'Error';
                funcType = 'Unknown';
                symbol = '?';
                functionCode = 'Unknown function';
        }
        
        console.log('Calculator result:', result);
        
        const output = `
            <div style="background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🧮 CALCULATOR DEMO</strong>
            </div>
            
            <div style="background: #d4edda; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>📝 Function Used (${funcType}):</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px;">
                ${functionCode}
                </code>
            </div>
            
            <div style="background: #f3e5f5; padding: 12px; border-left: 4px solid #9c27b0; margin: 10px 0;">
                <strong>⚡ Execution:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px;">
                ${operation}(${a}, ${b})
                </code>
            </div>
            
            <div style="background: #c8e6c9; padding: 20px; border-left: 4px solid #4caf50; margin: 10px 0; text-align: center;">
                <strong>📺 CALCULATION RESULT:</strong><br>
                <div style="font-size: 24px; color: #2e7d32; font-weight: bold; margin-top: 10px; background: white; padding: 15px; border-radius: 5px;">
                    ${a} ${symbol} ${b} = ${result}
                </div>
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <small><em>🎉 Each operation demonstrates a different function type working together!</em></small>
            </div>
        `;
        
        showResult('calculatorResult', output);
        
    } catch (error) {
        console.error('Calculator error:', error);
        showResult('calculatorResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Module 3 Simple Demo Initialized!');
    
    // Test that critical elements exist
    const criticalElements = ['quickTestResult', 'userName', 'declarationResult', 'num1', 'expressionResult'];
    console.log('Checking critical elements:');
    criticalElements.forEach(id => {
        const element = document.getElementById(id);
        console.log(`  ${id}: ${element ? '✅ Found' : '❌ Missing'}`);
    });
    
    // Run quick test after a short delay
    setTimeout(() => {
        console.log('Running initialization quick test...');
        quickTest();
        
        // Show welcome message in first output area
        const welcomeMsg = `
            <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #17a2b8, #138496); color: white; border-radius: 8px;">
                <strong>🎉 Welcome to Module 3: Functions Demo!</strong><br>
                <p style="margin: 10px 0;">Enter your name above and click "Run Function Declaration" to get started!</p>
                <small><em>All outputs will appear in the bordered areas below each section.</em></small>
            </div>
        `;
        showResult('declarationResult', welcomeMsg);
        
    }, 1000);
    
    // Add Enter key support for all inputs
    const inputHandlers = [
        { id: 'userName', handler: runDeclarationDemo },
        { id: 'num1', handler: runExpressionDemo },
        { id: 'num2', handler: runExpressionDemo },
        { id: 'numbers', handler: runArrowDemo },
        { id: 'personName', handler: runParametersDemo },
        { id: 'personAge', handler: runParametersDemo },
        { id: 'calcA', handler: runCalculator },
        { id: 'calcB', handler: runCalculator }
    ];
    
    inputHandlers.forEach(({ id, handler }) => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    console.log(`Enter key pressed on ${id}, calling ${handler.name}`);
                    handler();
                }
            });
            console.log(`✅ Enter key handler added to ${id}`);
        } else {
            console.warn(`⚠️ Input element ${id} not found for event handler`);
        }
    });
    
    console.log('✅ Module 3 Simple Demo Ready!');
});

// Make functions globally available
window.quickTest = quickTest;
window.runDeclarationDemo = runDeclarationDemo;
window.runExpressionDemo = runExpressionDemo;
window.runArrowDemo = runArrowDemo;
window.runParametersDemo = runParametersDemo;
window.runCalculator = runCalculator;

console.log('🎯 Module 3 Simple Demo Loaded Successfully!');