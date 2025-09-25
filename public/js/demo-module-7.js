console.log('🚀 Module 7: Modern JavaScript Features Demo Loading...');

// Utility function to show results with better error handling
function showResult(elementId, content) {
    console.log('showResult called for:', elementId);
    
    try {
        const element = document.getElementById(elementId);
        if (!element) {
            console.error('Element not found:', elementId);
            return false;
        }
        
        element.className = '';
        element.innerHTML = content;
        element.style.display = 'block';
        element.style.padding = '15px';
        element.style.border = '1px solid #ddd';
        element.style.borderRadius = '5px';
        element.style.backgroundColor = '#f8f9fa';
        element.style.minHeight = '60px';
        
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        console.log('✅ Result displayed successfully');
        return true;
    } catch (error) {
        console.error('showResult error:', error);
        return false;
    }
}

// Quick test function
function quickTest() {
    console.log('🧪 Quick test running...');
    
    try {
        const result = document.getElementById('quickTestResult');
        if (result) {
            result.innerHTML = '<span style="color: green; font-weight: bold;">✅ Modern JavaScript features ready!</span>';
            result.style.fontSize = '16px';
            console.log('✅ Quick test passed');
        } else {
            console.error('quickTestResult element not found');
        }
    } catch (error) {
        console.error('quickTest error:', error);
    }
}

// 1. Let/Const Demo - Fixed Element IDs
function runLetConstDemo() {
    console.log('🔒 Running let/const demo...');
    
    try {
        // Get form values with correct IDs from HTML template
        const demoTypeElement = document.getElementById('varType');
        const varNameElement = document.getElementById('varName7');
        const varValueElement = document.getElementById('varValue7');
        
        if (!demoTypeElement || !varNameElement || !varValueElement) {
            showResult('letConstResult', '<div style="color: red;">❌ Form elements not found. Please check the HTML template.</div>');
            return;
        }
        
        const demoType = demoTypeElement.value || 'let';
        const varName = varNameElement.value.trim() || 'myVariable';
        const varValue = varValueElement.value.trim() || 'Hello World';
        
        // Validate variable name
        if (!isValidVariableName(varName)) {
            showResult('letConstResult', '<div style="color: orange;">⚠️ Invalid variable name. Use letters, numbers, $ and _ only.</div>');
            return;
        }
        
        const output = `
            <div style="background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🔒 LET/CONST/VAR DEMO</strong>
            </div>
            
            <div style="background: #e3f2fd; padding: 12px; border-left: 4px solid #2196f3; margin: 10px 0;">
                <strong>📝 Variable Declaration:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px;">
                ${demoType} ${varName} = "${varValue}";
                </code>
            </div>
            
            <div style="background: #c8e6c9; padding: 15px; border-left: 4px solid #4caf50; margin: 10px 0;">
                <strong>📺 VARIABLE CREATED:</strong><br>
                <div style="margin: 10px 0;">
                    <strong>Type:</strong> ${demoType.toUpperCase()}<br>
                    <strong>Name:</strong> ${varName}<br>
                    <strong>Value:</strong> "${varValue}"<br>
                    <strong>Data Type:</strong> ${typeof varValue}
                </div>
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <strong>💡 ${demoType.toUpperCase()} Features:</strong><br>
                ${getVariableTypeInfo(demoType)}
            </div>
        `;
        
        showResult('letConstResult', output);
        
    } catch (error) {
        console.error('runLetConstDemo error:', error);
        showResult('letConstResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function getVariableTypeInfo(type) {
    const info = {
        'var': '• Function-scoped<br>• Can be redeclared<br>• Hoisted with undefined<br>• ⚠️ Use with caution',
        'let': '• Block-scoped<br>• Can be reassigned<br>• Not hoisted<br>• ✅ Recommended for changing values',
        'const': '• Block-scoped<br>• Cannot be reassigned<br>• Not hoisted<br>• ✅ Recommended for constants'
    };
    
    return info[type] || 'Unknown variable type';
}

function isValidVariableName(name) {
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    const reserved = ['var', 'let', 'const', 'function', 'return', 'if', 'else', 'for', 'while'];
    return regex.test(name) && !reserved.includes(name.toLowerCase());
}

// Additional functions for let/const section
function testReassignment() {
    console.log('🔄 Testing reassignment...');
    
    try {
        const output = `
            <div style="background: linear-gradient(135deg, #ffc107, #ff8f00); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🔄 REASSIGNMENT TEST</strong>
            </div>
            
            <div style="background: #fff3e0; padding: 12px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <strong>🧪 Reassignment Examples:</strong><br><br>
                
                <strong>✅ LET (Can be reassigned):</strong><br>
                <code>let counter = 1;</code><br>
                <code>counter = 2; // ✅ Works!</code><br>
                <code>console.log(counter); // Output: 2</code><br><br>
                
                <strong>❌ CONST (Cannot be reassigned):</strong><br>
                <code>const PI = 3.14159;</code><br>
                <code>PI = 3.14; // ❌ TypeError: Assignment to constant variable</code><br><br>
                
                <strong>🔄 VAR (Can be reassigned):</strong><br>
                <code>var message = "Hello";</code><br>
                <code>message = "Hi"; // ✅ Works!</code><br>
                <code>console.log(message); // Output: Hi</code>
            </div>
            
            <div style="background: #d1ecf1; padding: 10px; border-left: 4px solid #17a2b8; margin: 10px 0;">
                <strong>💡 Key Point:</strong> Use <code>const</code> by default, <code>let</code> when you need to reassign!
            </div>
        `;
        
        showResult('letConstResult', output);
        
    } catch (error) {
        console.error('testReassignment error:', error);
        showResult('letConstResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function testBlockScope() {
    console.log('🎯 Testing block scope...');
    
    try {
        const output = `
            <div style="background: linear-gradient(135deg, #17a2b8, #138496); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🎯 BLOCK SCOPE TEST</strong>
            </div>
            
            <div style="background: #d1ecf1; padding: 12px; border-left: 4px solid #17a2b8; margin: 10px 0;">
                <strong>🔍 Block Scope Example:</strong><br><br>
                
                <code>if (true) {</code><br>
                <code>&nbsp;&nbsp;let blockLet = "I'm block-scoped!";</code><br>
                <code>&nbsp;&nbsp;const blockConst = "Me too!";</code><br>
                <code>&nbsp;&nbsp;var blockVar = "I'm function-scoped!";</code><br>
                <code>}</code><br><br>
                
                <code>// Outside the block:</code><br>
                <code>console.log(blockLet); // ❌ ReferenceError</code><br>
                <code>console.log(blockConst); // ❌ ReferenceError</code><br>
                <code>console.log(blockVar); // ✅ "I'm function-scoped!"</code>
            </div>
            
            <div style="background: #f8d7da; padding: 10px; border-left: 4px solid #dc3545; margin: 10px 0;">
                <strong>🚫 Why avoid VAR:</strong><br>
                • Function-scoped (not block-scoped)<br>
                • Hoisted with undefined<br>
                • Can cause unexpected behavior<br>
                • <strong>Use let/const instead!</strong>
            </div>
        `;
        
        showResult('letConstResult', output);
        
    } catch (error) {
        console.error('testBlockScope error:', error);
        showResult('letConstResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function clearLetConstLog() {
    try {
        const element = document.getElementById('letConstResult');
        if (element) {
            element.innerHTML = '<em class="text-muted">Let/Const demo log cleared...</em>';
        }
    } catch (error) {
        console.error('clearLetConstLog error:', error);
    }
}

// 2. Template Literals Demo - Fixed Element IDs
function runTemplateLiteralsDemo() {
    console.log('📝 Running template literals demo...');
    
    try {
        // Get form values with correct IDs from HTML template
        const nameElement = document.getElementById('firstName');
        const ageElement = document.getElementById('userAge');
        const lastNameElement = document.getElementById('lastName');
        
        const firstName = nameElement ? nameElement.value.trim() || 'John' : 'John';
        const lastName = lastNameElement ? lastNameElement.value.trim() || 'Doe' : 'Doe';
        const age = ageElement ? ageElement.value || '25' : '25';
        
        // Safe template literal examples
        const basicTemplate = `Hello, ${firstName} ${lastName}! You are ${age} years old.`;
        const expressionTemplate = `In 10 years, ${firstName} will be ${parseInt(age) + 10} years old.`;
        const conditionalTemplate = `${firstName} is ${parseInt(age) >= 18 ? 'an adult' : 'a minor'}.`;
        
        const output = `
            <div style="background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>📝 TEMPLATE LITERALS DEMO</strong>
            </div>
            
            <div style="background: #d4edda; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>📝 Template Examples:</strong><br><br>
                
                <strong>1. Basic Interpolation:</strong><br>
                <code>\`Hello, \${firstName} \${lastName}! You are \${age} years old.\`</code><br>
                → "${basicTemplate}"<br><br>
                
                <strong>2. Expression Evaluation:</strong><br>
                <code>\`In 10 years, \${firstName} will be \${parseInt(age) + 10} years old.\`</code><br>
                → "${expressionTemplate}"<br><br>
                
                <strong>3. Conditional Logic:</strong><br>
                <code>\`\${firstName} is \${parseInt(age) >= 18 ? 'an adult' : 'a minor'}.\`</code><br>
                → "${conditionalTemplate}"
            </div>
            
            <div style="background: #e3f2fd; padding: 12px; border-left: 4px solid #2196f3; margin: 10px 0;">
                <strong>📊 Old vs New Comparison:</strong><br><br>
                <strong>❌ Old way:</strong><br>
                <code>"Hello, " + firstName + " " + lastName + "! You are " + age + " years old."</code><br><br>
                <strong>✅ New way:</strong><br>
                <code>\`Hello, \${firstName} \${lastName}! You are \${age} years old.\`</code><br><br>
                <strong>Benefits:</strong> Cleaner, more readable, supports expressions
            </div>
        `;
        
        showResult('templateResult', output);
        
    } catch (error) {
        console.error('runTemplateLiteralsDemo error:', error);
        showResult('templateResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function compareWithConcat() {
    console.log('⚔️ Running concatenation comparison...');
    
    try {
        const name = document.getElementById('firstName')?.value?.trim() || 'Alice';
        const age = document.getElementById('userAge')?.value || '28';
        
        const output = `
            <div style="background: linear-gradient(135deg, #6f42c1, #5a32a3); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>⚔️ TEMPLATE LITERALS VS CONCATENATION</strong>
            </div>
            
            <div style="background: #f3e5f5; padding: 12px; border-left: 4px solid #6f42c1; margin: 10px 0;">
                <strong>❌ String Concatenation (Old Way):</strong><br>
                <code>const message = "Hello, " + name + "! " +<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"You are " + age + " years old. " +<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Nice to meet you!";</code><br>
                → "Hello, ${name}! You are ${age} years old. Nice to meet you!"<br><br>
                
                <strong>✅ Template Literals (New Way):</strong><br>
                <code>const message = \`Hello, \${name}! You are \${age} years old. Nice to meet you!\`;</code><br>
                → "Hello, ${name}! You are ${age} years old. Nice to meet you!"
            </div>
            
            <div style="background: #d4edda; padding: 10px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>🎯 Template Literal Benefits:</strong><br>
                • No more + operators<br>
                • Cleaner, more readable code<br>
                • Supports multi-line strings<br>
                • Expression evaluation inside \${}<br>
                • Better maintainability
            </div>
        `;
        
        showResult('templateResult', output);
        
    } catch (error) {
        console.error('compareWithConcat error:', error);
        showResult('templateResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function clearTemplateLog() {
    try {
        const element = document.getElementById('templateResult');
        if (element) {
            element.innerHTML = '<em class="text-muted">Template literals demo log cleared...</em>';
        }
    } catch (error) {
        console.error('clearTemplateLog error:', error);
    }
}

// 3. Spread Operator Demo - Fixed based on HTML template
function runSpreadArrayDemo() {
    console.log('📦 Running spread array demo...');
    
    try {
        // Get array values from form if they exist
        const arr1Element = document.getElementById('array1');
        const arr2Element = document.getElementById('array2');
        
        const arr1Input = arr1Element ? arr1Element.value.trim() : '';
        const arr2Input = arr2Element ? arr2Element.value.trim() : '';
        
        // Parse arrays or use defaults
        const arr1 = arr1Input ? arr1Input.split(',').map(s => s.trim()) : ['1', '2', '3'];
        const arr2 = arr2Input ? arr2Input.split(',').map(s => s.trim()) : ['4', '5', '6'];
        
        const combined = [...arr1, ...arr2];
        const numbers = [15, 8, 23, 4, 42];
        const maxNum = Math.max(...numbers);
        const copiedArray = [...arr1];
        
        const output = `
            <div style="background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>📦 ARRAY SPREAD DEMO</strong>
            </div>
            
            <div style="background: #d4edda; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>📋 Array Operations:</strong><br><br>
                
                <strong>1. Array Copying:</strong><br>
                <code>const copied = [...[${arr1.join(', ')}]]</code><br>
                → [${copiedArray.join(', ')}]<br><br>
                
                <strong>2. Array Concatenation:</strong><br>
                <code>const combined = [...[${arr1.join(', ')}], ...[${arr2.join(', ')}]]</code><br>
                → [${combined.join(', ')}]<br><br>
                
                <strong>3. Math Operations:</strong><br>
                <code>Math.max(...[${numbers.join(', ')}])</code><br>
                → ${maxNum}
            </div>
            
            <div style="background: #e3f2fd; padding: 12px; border-left: 4px solid #2196f3; margin: 10px 0;">
                <strong>📊 Comparison:</strong><br>
                <strong>❌ Old:</strong> <code>arr1.concat(arr2)</code><br>
                <strong>✅ New:</strong> <code>[...arr1, ...arr2]</code><br><br>
                <strong>❌ Old:</strong> <code>Math.max.apply(null, numbers)</code><br>
                <strong>✅ New:</strong> <code>Math.max(...numbers)</code>
            </div>
        `;
        
        showResult('spreadResult', output);
        
    } catch (error) {
        console.error('runSpreadArrayDemo error:', error);
        showResult('spreadResult', `<div style="color: red;">❌ Array spread error: ${error.message}</div>`);
    }
}

function runSpreadObjectDemo() {
    console.log('📦 Running spread object demo...');
    
    try {
        // Get object props from form if it exists
        const objectPropsElement = document.getElementById('objectProps');
        const objectPropsInput = objectPropsElement ? objectPropsElement.value.trim() : '';
        
        // Default objects
        const person = { name: 'Alice', age: 30 };
        const contact = { email: 'alice@example.com', phone: '555-0123' };
        
        // Parse custom object if provided
        let customProps = {};
        if (objectPropsInput) {
            try {
                objectPropsInput.split(',').forEach(prop => {
                    const [key, value] = prop.split(':').map(s => s.trim());
                    if (key && value) {
                        customProps[key] = value;
                    }
                });
            } catch (e) {
                customProps = {};
            }
        }
        
        const merged = { ...person, ...contact, ...customProps };
        const updated = { ...person, age: 31, city: 'NYC' };
        
        const output = `
            <div style="background: linear-gradient(135deg, #dc3545, #c82333); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>📦 OBJECT SPREAD DEMO</strong>
            </div>
            
            <div style="background: #f8d7da; padding: 12px; border-left: 4px solid #dc3545; margin: 10px 0;">
                <strong>📦 Object Operations:</strong><br><br>
                
                <strong>1. Object Merging:</strong><br>
                <code>const merged = {...person, ...contact${Object.keys(customProps).length ? ', ...customProps' : ''}}</code><br>
                Person: ${JSON.stringify(person)}<br>
                Contact: ${JSON.stringify(contact)}<br>
                ${Object.keys(customProps).length ? `Custom: ${JSON.stringify(customProps)}<br>` : ''}
                → Merged: ${JSON.stringify(merged)}<br><br>
                
                <strong>2. Property Override:</strong><br>
                <code>const updated = {...person, age: 31, city: 'NYC'}</code><br>
                → Updated: ${JSON.stringify(updated)}
            </div>
            
            <div style="background: #e3f2fd; padding: 12px; border-left: 4px solid #2196f3; margin: 10px 0;">
                <strong>📊 Comparison:</strong><br>
                <strong>❌ Old:</strong> <code>Object.assign({}, obj1, obj2)</code><br>
                <strong>✅ New:</strong> <code>{...obj1, ...obj2}</code><br><br>
                <strong>Benefits:</strong> Shorter, cleaner, more intuitive
            </div>
        `;
        
        showResult('spreadResult', output);
        
    } catch (error) {
        console.error('runSpreadObjectDemo error:', error);
        showResult('spreadResult', `<div style="color: red;">❌ Object spread error: ${error.message}</div>`);
    }
}

function runSpreadFunctionDemo() {
    console.log('🔧 Running spread function demo...');
    
    try {
        // Safe function demonstrations
        function sum(...args) {
            return args.reduce((total, num) => total + num, 0);
        }
        
        const numbers = [5, 10, 15];
        const result = sum(...numbers);
        const directResult = sum(1, 2, 3, 4, 5);
        
        const output = `
            <div style="background: linear-gradient(135deg, #17a2b8, #138496); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🔧 FUNCTION SPREAD DEMO</strong>
            </div>
            
            <div style="background: #d1ecf1; padding: 12px; border-left: 4px solid #17a2b8; margin: 10px 0;">
                <strong>🔧 Function Arguments:</strong><br><br>
                
                <strong>1. Rest Parameters:</strong><br>
                <code>function sum(...args) { return args.reduce((total, num) => total + num, 0); }</code><br><br>
                
                <strong>2. Spread in Function Call:</strong><br>
                <code>sum(...[${numbers.join(', ')}])</code> → ${result}<br>
                <code>sum(1, 2, 3, 4, 5)</code> → ${directResult}<br><br>
                
                <strong>3. Math Operations:</strong><br>
                <code>Math.max(...[${numbers.join(', ')}])</code> → ${Math.max(...numbers)}
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <strong>💡 Spread vs Rest:</strong><br>
                • <strong>Spread:</strong> <code>func(...array)</code> - expands array into arguments<br>
                • <strong>Rest:</strong> <code>function(...args)</code> - collects arguments into array<br>
                • Same syntax (...), different contexts!
            </div>
        `;
        
        showResult('spreadResult', output);
        
    } catch (error) {
        console.error('runSpreadFunctionDemo error:', error);
        showResult('spreadResult', `<div style="color: red;">❌ Function spread error: ${error.message}</div>`);
    }
}

function clearSpreadLog() {
    try {
        const element = document.getElementById('spreadResult');
        if (element) {
            element.innerHTML = '<em class="text-muted">Spread operator demo log cleared...</em>';
        }
    } catch (error) {
        console.error('clearSpreadLog error:', error);
    }
}

// 4. Modules Demo
function simulateModuleImport() {
    console.log('📦 Running module import simulation...');
    
    try {
        const output = `
            <div style="background: linear-gradient(135deg, #6f42c1, #5a32a3); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>📥 MODULE IMPORT SIMULATION</strong>
            </div>
            
            <div style="background: #f3e5f5; padding: 12px; border-left: 4px solid #6f42c1; margin: 10px 0;">
                <strong>📥 Import Examples:</strong><br><br>
                
                <strong>Named Imports:</strong><br>
                <code>import { validateEmail, formatDate } from './utils.js';</code><br>
                <code>import { PI, calculate } from './math.js';</code><br><br>
                
                <strong>Default Import:</strong><br>
                <code>import Calculator from './calculator.js';</code><br>
                <code>import UserService from './services/user.js';</code><br><br>
                
                <strong>Alias Import:</strong><br>
                <code>import { validateEmail as isValidEmail } from './utils.js';</code><br>
                <code>import { default as MathLib } from './math.js';</code><br><br>
                
                <strong>Namespace Import:</strong><br>
                <code>import * as MathUtils from './math.js';</code><br>
                <code>import * as API from './api/index.js';</code>
            </div>
            
            <div style="background: #d4edda; padding: 10px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>✅ Usage Examples:</strong><br>
                <code>const isValid = validateEmail('test@example.com');</code><br>
                <code>const calc = new Calculator();</code><br>
                <code>const result = MathUtils.PI * 2;</code>
            </div>
        `;
        
        showResult('modulesResult', output);
        
    } catch (error) {
        console.error('simulateModuleImport error:', error);
        showResult('modulesResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function simulateModuleExport() {
    console.log('📤 Running module export simulation...');
    
    try {
        const output = `
            <div style="background: linear-gradient(135deg, #fd7e14, #e8590c); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>📤 MODULE EXPORT SIMULATION</strong>
            </div>
            
            <div style="background: #fff3e0; padding: 12px; border-left: 4px solid #fd7e14; margin: 10px 0;">
                <strong>📤 Export Examples:</strong><br><br>
                
                <strong>Named Exports:</strong><br>
                <code>export const PI = 3.14159;</code><br>
                <code>export function add(a, b) { return a + b; }</code><br>
                <code>export class Calculator { ... }</code><br><br>
                
                <strong>Default Export:</strong><br>
                <code>export default class UserService { ... }</code><br>
                <code>export default function connectDB() { ... }</code><br><br>
                
                <strong>Mixed Exports:</strong><br>
                <code>export { validateEmail, validatePhone };</code><br>
                <code>export { default } from './otherModule.js';</code>
            </div>
            
            <div style="background: #e3f2fd; padding: 10px; border-left: 4px solid #2196f3; margin: 10px 0;">
                <strong>📋 File Example (math.js):</strong><br>
                <code>export const PI = 3.14159;</code><br>
                <code>export const E = 2.71828;</code><br>
                <code>export function add(a, b) { return a + b; }</code><br>
                <code>export default class Calculator { ... }</code>
            </div>
        `;
        
        showResult('modulesResult', output);
        
    } catch (error) {
        console.error('simulateModuleExport error:', error);
        showResult('modulesResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function showModuleStructure() {
    console.log('🏗️ Showing module structure...');
    
    try {
        const output = `
            <div style="background: linear-gradient(135deg, #20c997, #17a2b8); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🏗️ MODULE STRUCTURE EXAMPLE</strong>
            </div>
            
            <div style="background: #d1ecf1; padding: 12px; border-left: 4px solid #17a2b8; margin: 10px 0;">
                <strong>📁 Project Structure:</strong><br><br>
                <pre style="background: #fff; padding: 8px; border-radius: 4px; font-size: 12px;">src/
├── components/
│   ├── Button.js
│   └── Modal.js
├── utils/
│   ├── validation.js
│   ├── formatting.js
│   └── api.js
├── services/
│   ├── UserService.js
│   └── AuthService.js
└── app.js</pre>
            </div>
            
            <div style="background: #d4edda; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>📄 Example Module (utils/validation.js):</strong><br><br>
                <pre style="background: #fff; padding: 8px; border-radius: 4px; font-size: 12px;">// Named exports
export function validateEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

export function validatePhone(phone) {
  return /^\\d{3}-\\d{3}-\\d{4}$/.test(phone);
}

// Default export
export default class Validator {
  static isRequired(value) {
    return value && value.trim().length > 0;
  }
}</pre>
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <strong>🎯 Module Benefits:</strong><br>
                • Code organization and reusability<br>
                • Dependency management<br>
                • Tree shaking (remove unused code)<br>
                • Better testing and maintenance<br>
                • Clear API boundaries
            </div>
        `;
        
        showResult('modulesResult', output);
        
    } catch (error) {
        console.error('showModuleStructure error:', error);
        showResult('modulesResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function clearModuleLog() {
    try {
        const element = document.getElementById('modulesResult');
        if (element) {
            element.innerHTML = '<em class="text-muted">Modules demo log cleared...</em>';
        }
    } catch (error) {
        console.error('clearModuleLog error:', error);
    }
}

// 5. Modern JavaScript Showcase
function runModernJSShowcase() {
    console.log('🚀 Running modern JS showcase...');
    
    try {
        // Create a simple user profile using modern features
        const baseUser = { id: 1, name: 'John Doe' };
        const contactInfo = { email: 'john@example.com', phone: '555-0123' };
        
        // Object spread
        const fullUser = { ...baseUser, ...contactInfo, createdAt: new Date().toISOString() };
        
        // Destructuring
        const { name, email, ...otherInfo } = fullUser;
        
        // Template literals
        const userDisplay = `User: ${name} (${email})`;
        
        // Array operations
        const hobbies = ['reading', 'coding'];
        const allHobbies = [...hobbies, 'gaming', 'music'];
        const longHobbies = allHobbies.filter(hobby => hobby.length > 5);
        
        const output = `
            <div style="background: linear-gradient(135deg, #e74c3c, #c0392b); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🚀 MODERN JAVASCRIPT SHOWCASE</strong>
            </div>
            
            <div style="background: #fadbd8; padding: 12px; border-left: 4px solid #e74c3c; margin: 10px 0;">
                <strong>👤 User Profile Creation:</strong><br><br>
                
                <strong>1. Object Spread:</strong><br>
                <code>const fullUser = {...baseUser, ...contactInfo, createdAt: new Date()}</code><br>
                → ${JSON.stringify(fullUser)}<br><br>
                
                <strong>2. Destructuring:</strong><br>
                <code>const {name, email, ...otherInfo} = fullUser</code><br>
                → name: "${name}", email: "${email}"<br>
                → others: ${JSON.stringify(otherInfo)}<br><br>
                
                <strong>3. Template Literals:</strong><br>
                <code>\`User: \${name} (\${email})\`</code><br>
                → "${userDisplay}"
            </div>
            
            <div style="background: #e8f8f8; padding: 12px; border-left: 4px solid #95a5a6; margin: 10px 0;">
                <strong>📋 Array Operations:</strong><br><br>
                
                <strong>Spread & Filter:</strong><br>
                Original: [${hobbies.join(', ')}]<br>
                Extended: [...hobbies, 'gaming', 'music'] → [${allHobbies.join(', ')}]<br>
                Filtered: hobbies.filter(h => h.length > 5) → [${longHobbies.join(', ')}]
            </div>
            
            <div style="background: #e8f5e8; padding: 10px; border-left: 4px solid #27ae60; margin: 10px 0;">
                <strong>🎯 Modern Features Used:</strong><br>
                ✅ Object spread (...obj)<br>
                ✅ Destructuring assignment<br>
                ✅ Template literals (\`\${var}\`)<br>
                ✅ Array spread and methods<br>
                ✅ Arrow functions<br>
                ✅ Const/let declarations
            </div>
        `;
        
        showResult('showcaseResult', output);
        
    } catch (error) {
        console.error('runModernJSShowcase error:', error);
        showResult('showcaseResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function clearShowcaseLog() {
    try {
        const element = document.getElementById('showcaseResult');
        if (element) {
            element.innerHTML = '<em class="text-muted">Modern JavaScript showcase log cleared...</em>';
        }
    } catch (error) {
        console.error('clearShowcaseLog error:', error);
    }
}

// Initialize when page loads with better error handling
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Module 7: Modern JavaScript Features Demo Initialized!');
    
    try {
        // Test that critical elements exist
        const criticalElements = ['letConstResult', 'templateResult', 'spreadResult'];
        console.log('Checking critical elements:');
        criticalElements.forEach(id => {
            const element = document.getElementById(id);
            console.log(`  ${id}: ${element ? '✅ Found' : '❌ Missing'}`);
        });
        
        // Run quick test after a short delay
        setTimeout(() => {
            console.log('Running initialization quick test...');
            quickTest();
            
            // Show welcome message if element exists
            const letConstResult = document.getElementById('letConstResult');
            if (letConstResult) {
                showResult('letConstResult', `
                    <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #17a2b8, #138496); color: white; border-radius: 8px;">
                        <strong>🎉 Welcome to Modern JavaScript Features Demo!</strong><br>
                        <p style="margin: 10px 0;">Try the Let/Const demo first to get started!</p>
                        <small><em>Learn ES6+ features that make JavaScript more powerful.</em></small>
                    </div>
                `);
            }
            
        }, 1000);
        
        console.log('✅ Module 7 Demo Ready!');
        
    } catch (error) {
        console.error('DOMContentLoaded error:', error);
    }
});

// Make functions globally available with error protection
function safeGlobalFunction(funcName, func) {
    try {
        window[funcName] = func;
        console.log(`✅ ${funcName} globally available`);
    } catch (error) {
        console.error(`Failed to make ${funcName} global:`, error);
    }
}

// Global function assignments
safeGlobalFunction('quickTest', quickTest);
safeGlobalFunction('runLetConstDemo', runLetConstDemo);
safeGlobalFunction('testReassignment', testReassignment);
safeGlobalFunction('testBlockScope', testBlockScope);
safeGlobalFunction('clearLetConstLog', clearLetConstLog);
safeGlobalFunction('runTemplateLiteralsDemo', runTemplateLiteralsDemo);
safeGlobalFunction('compareWithConcat', compareWithConcat);
safeGlobalFunction('clearTemplateLog', clearTemplateLog);
safeGlobalFunction('runSpreadArrayDemo', runSpreadArrayDemo);
safeGlobalFunction('runSpreadObjectDemo', runSpreadObjectDemo);
safeGlobalFunction('runSpreadFunctionDemo', runSpreadFunctionDemo);
safeGlobalFunction('clearSpreadLog', clearSpreadLog);
safeGlobalFunction('simulateModuleImport', simulateModuleImport);
safeGlobalFunction('simulateModuleExport', simulateModuleExport);
safeGlobalFunction('showModuleStructure', showModuleStructure);
safeGlobalFunction('clearModuleLog', clearModuleLog);
safeGlobalFunction('runModernJSShowcase', runModernJSShowcase);
safeGlobalFunction('clearShowcaseLog', clearShowcaseLog);

console.log('🎯 Module 7: Modern JavaScript Features Demo Loaded Successfully!');