console.log('🚀 Module 4: Objects and Arrays Demo Loading...');

// Shopping cart for the practice exercise
let shoppingCart = {
    items: [],
    
    addItem: function(name, price, quantity) {
        this.items.push({
            name: name,
            price: parseFloat(price),
            quantity: parseInt(quantity),
            total: parseFloat(price) * parseInt(quantity)
        });
    },
    
    getTotal: function() {
        return this.items.reduce((sum, item) => sum + item.total, 0);
    },
    
    getItemCount: function() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    },
    
    clear: function() {
        this.items = [];
    }
};

// Utility function to show results
function showResult(elementId, content) {
    console.log('showResult called for:', elementId);
    
    const element = document.getElementById(elementId);
    if (!element) {
        console.error('Element not found:', elementId);
        alert('Debug: Element not found: ' + elementId);
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

// 1. Object Literals Demo
function runObjectDemo() {
    console.log('🔧 Running object demo...');
    
    try {
        const name = document.getElementById('personName').value.trim() || 'John Doe';
        const age = parseInt(document.getElementById('personAge').value) || 25;
        const job = document.getElementById('personJob').value.trim() || 'Developer';
        const city = document.getElementById('personCity').value.trim() || 'New York';
        
        // Create person object
        const person = {
            name: name,
            age: age,
            job: job,
            city: city,
            
            introduce: function() {
                return `Hi, I'm ${this.name}, a ${this.age}-year-old ${this.job} from ${this.city}!`;
            },
            
            getDetails: function() {
                return `Name: ${this.name}, Age: ${this.age}, Job: ${this.job}, City: ${this.city}`;
            }
        };
        
        console.log('Created person object:', person);
        
        const output = `
            <div style="background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>📦 OBJECT LITERALS DEMO</strong>
            </div>
            
            <div style="background: #e3f2fd; padding: 12px; border-left: 4px solid #2196f3; margin: 10px 0;">
                <strong>📝 Object Created:</strong><br>
                <code style="background: #fff; padding: 8px; border-radius: 3px; display: block; margin: 5px 0;">
                const person = {<br>
                &nbsp;&nbsp;name: "${person.name}",<br>
                &nbsp;&nbsp;age: ${person.age},<br>
                &nbsp;&nbsp;job: "${person.job}",<br>
                &nbsp;&nbsp;city: "${person.city}",<br>
                &nbsp;&nbsp;introduce: function() { ... }<br>
                };
                </code>
            </div>
            
            <div style="background: #c8e6c9; padding: 15px; border-left: 4px solid #4caf50; margin: 10px 0;">
                <strong>📺 OUTPUT:</strong><br>
                <div style="margin: 10px 0;">
                    <strong>Dot Notation:</strong> person.name = "${person.name}"<br>
                    <strong>Bracket Notation:</strong> person["age"] = ${person["age"]}<br>
                    <strong>Method Call:</strong> person.introduce() = "${person.introduce()}"
                </div>
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <small><em>🎯 Objects store key-value pairs and can contain methods (functions)!</em></small>
            </div>
        `;
        
        showResult('objectResult', output);
        
    } catch (error) {
        console.error('Object demo error:', error);
        showResult('objectResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

// 2. Array Methods Demo
function runArrayDemo() {
    console.log('🔧 Running array demo...');
    
    try {
        const input = document.getElementById('arrayInput').value || '1, 2, 3, 4, 5';
        const operation = document.getElementById('arrayOperation').value;
        
        const numbers = input.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
        
        if (numbers.length === 0) {
            showResult('arrayResult', '<div style="color: orange;">⚠️ Please enter valid numbers separated by commas</div>');
            return;
        }
        
        let result;
        let operationCode;
        let explanation;
        
        switch(operation) {
            case 'map':
                result = numbers.map(n => n * 2);
                operationCode = 'numbers.map(n => n * 2)';
                explanation = 'Map transforms each element by doubling it';
                break;
            case 'filter':
                result = numbers.filter(n => n % 2 === 0);
                operationCode = 'numbers.filter(n => n % 2 === 0)';
                explanation = 'Filter keeps only even numbers';
                break;
            case 'reduce':
                result = numbers.reduce((total, n) => total + n, 0);
                operationCode = 'numbers.reduce((total, n) => total + n, 0)';
                explanation = 'Reduce sums all numbers into a single value';
                break;
            case 'find':
                result = numbers.find(n => n > 3);
                operationCode = 'numbers.find(n => n > 3)';
                explanation = 'Find returns the first number greater than 3';
                break;
            case 'sort':
                result = [...numbers].sort((a, b) => a - b);
                operationCode = 'numbers.sort((a, b) => a - b)';
                explanation = 'Sort arranges numbers in ascending order';
                break;
        }
        
        console.log('Array operation result:', result);
        
        const output = `
            <div style="background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>📋 ARRAY METHODS DEMO</strong>
            </div>
            
            <div style="background: #d4edda; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>📝 Original Array:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px;">
                [${numbers.join(', ')}]
                </code>
            </div>
            
            <div style="background: #f3e5f5; padding: 12px; border-left: 4px solid #9c27b0; margin: 10px 0;">
                <strong>⚡ Operation:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px;">
                ${operationCode}
                </code>
            </div>
            
            <div style="background: #c8e6c9; padding: 15px; border-left: 4px solid #4caf50; margin: 10px 0;">
                <strong>📺 RESULT:</strong><br>
                <div style="font-size: 18px; color: #2e7d32; font-weight: bold; margin-top: 8px;">
                    ${Array.isArray(result) ? `[${result.join(', ')}]` : result}
                </div>
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <small><em>💡 ${explanation}</em></small>
            </div>
        `;
        
        showResult('arrayResult', output);
        
    } catch (error) {
        console.error('Array demo error:', error);
        showResult('arrayResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

// 3. Object Methods Demo
function runObjectMethodDemo() {
    console.log('🔧 Running object method demo...');
    
    try {
        const name = document.getElementById('studentName').value.trim() || 'Alice Johnson';
        const gradeInput = document.getElementById('grades').value || '85, 92, 78, 95';
        const grades = gradeInput.split(',').map(g => parseFloat(g.trim())).filter(g => !isNaN(g));
        
        if (grades.length === 0) {
            showResult('objectMethodResult', '<div style="color: orange;">⚠️ Please enter valid grades</div>');
            return;
        }
        
        const student = {
            name: name,
            grades: grades,
            
            getAverage: function() {
                const sum = this.grades.reduce((total, grade) => total + grade, 0);
                return sum / this.grades.length;
            },
            
            getLetterGrade: function() {
                const avg = this.getAverage();
                if (avg >= 90) return 'A';
                if (avg >= 80) return 'B';
                if (avg >= 70) return 'C';
                if (avg >= 60) return 'D';
                return 'F';
            },
            
            getReport: function() {
                return `${this.name}: Average ${this.getAverage().toFixed(1)} (${this.getLetterGrade()})`;
            }
        };
        
        console.log('Student object:', student);
        
        const output = `
            <div style="background: linear-gradient(135deg, #ffc107, #ff8f00); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>⚙️ OBJECT METHODS DEMO</strong>
            </div>
            
            <div style="background: #fff8e1; padding: 12px; border-left: 4px solid #ffc107; margin: 10px 0;">
                <strong>👨‍🎓 Student Object:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px; display: block; margin: 5px 0;">
                name: "${student.name}"<br>
                grades: [${student.grades.join(', ')}]
                </code>
            </div>
            
            <div style="background: #c8e6c9; padding: 15px; border-left: 4px solid #4caf50; margin: 10px 0;">
                <strong>📺 METHOD RESULTS:</strong><br>
                <div style="margin: 10px 0;">
                    <strong>getAverage():</strong> ${student.getAverage().toFixed(2)}<br>
                    <strong>getLetterGrade():</strong> ${student.getLetterGrade()}<br>
                    <strong>getReport():</strong> "${student.getReport()}"
                </div>
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <small><em>🎯 Object methods can access object properties using 'this' keyword!</em></small>
            </div>
        `;
        
        showResult('objectMethodResult', output);
        
    } catch (error) {
        console.error('Object method demo error:', error);
        showResult('objectMethodResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

// 4. Destructuring Demo
function runDestructuringDemo() {
    console.log('🔧 Running destructuring demo...');
    
    try {
        const email = document.getElementById('userEmail').value.trim() || 'john@example.com';
        const phone = document.getElementById('userPhone').value.trim() || '555-0123';
        const colorInput = document.getElementById('colors').value || 'red, blue, green';
        const colors = colorInput.split(',').map(c => c.trim());
        
        const user = {
            email: email,
            phone: phone,
            colors: colors,
            age: 25,
            country: 'USA'
        };
        
        // Object destructuring
        const { email: userEmail, phone: userPhone, age = 0, name = 'Unknown' } = user;
        
        // Array destructuring
        const [first, second, third = 'N/A'] = user.colors;
        
        console.log('Destructuring demo results:', { userEmail, userPhone, first, second, third });
        
        const output = `
            <div style="background: linear-gradient(135deg, #dc3545, #c82333); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🔄 DESTRUCTURING DEMO</strong>
            </div>
            
            <div style="background: #f8d7da; padding: 12px; border-left: 4px solid #dc3545; margin: 10px 0;">
                <strong>📦 Original Data:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px; display: block; margin: 5px 0;">
                user = {<br>
                &nbsp;&nbsp;email: "${user.email}",<br>
                &nbsp;&nbsp;phone: "${user.phone}",<br>
                &nbsp;&nbsp;colors: [${user.colors.map(c => `"${c}"`).join(', ')}]<br>
                }
                </code>
            </div>
            
            <div style="background: #c8e6c9; padding: 15px; border-left: 4px solid #4caf50; margin: 10px 0;">
                <strong>📺 DESTRUCTURED VALUES:</strong><br>
                <div style="margin: 10px 0;">
                    <strong>Object Destructuring:</strong><br>
                    <code>const { email, phone, name = 'Unknown' } = user;</code><br>
                    → email: "${userEmail}"<br>
                    → phone: "${userPhone}"<br>
                    → name: "${name}" (default value)<br><br>
                    
                    <strong>Array Destructuring:</strong><br>
                    <code>const [first, second, third] = user.colors;</code><br>
                    → first: "${first}"<br>
                    → second: "${second}"<br>
                    → third: "${third}"
                </div>
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <small><em>✨ Destructuring extracts multiple values in one clean statement!</em></small>
            </div>
        `;
        
        showResult('destructuringResult', output);
        
    } catch (error) {
        console.error('Destructuring demo error:', error);
        showResult('destructuringResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

// Shopping Cart Functions
function addToCart() {
    console.log('🛒 Adding item to cart...');
    
    try {
        const name = document.getElementById('itemName').value.trim();
        const price = parseFloat(document.getElementById('itemPrice').value);
        const quantity = parseInt(document.getElementById('itemQty').value);
        
        if (!name || isNaN(price) || isNaN(quantity) || price <= 0 || quantity <= 0) {
            showResult('cartResult', '<div style="color: orange;">⚠️ Please fill all fields with valid values</div>');
            return;
        }
        
        shoppingCart.addItem(name, price, quantity);
        
        // Clear inputs
        document.getElementById('itemName').value = '';
        document.getElementById('itemPrice').value = '';
        document.getElementById('itemQty').value = '';
        
        showResult('cartResult', `<div style="color: green;">✅ Added "${name}" to cart! Click "Show Summary" to see all items.</div>`);
        
        console.log('Item added to cart:', { name, price, quantity });
        
    } catch (error) {
        console.error('Add to cart error:', error);
        showResult('cartResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function showCartSummary() {
    console.log('🛒 Showing cart summary...');
    
    try {
        if (shoppingCart.items.length === 0) {
            showResult('cartResult', '<div style="color: orange;">🛒 Cart is empty. Add some items first!</div>');
            return;
        }
        
        let itemsList = '';
        shoppingCart.items.forEach((item, index) => {
            itemsList += `
                <div style="background: #e9ecef; padding: 8px; margin: 4px 0; border-radius: 4px;">
                    ${index + 1}. ${item.name} - $${item.price.toFixed(2)} × ${item.quantity} = $${item.total.toFixed(2)}
                </div>
            `;
        });
        
        const output = `
            <div style="background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🛒 SHOPPING CART SUMMARY</strong>
            </div>
            
            <div style="background: #d4edda; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>📦 Items in Cart:</strong><br>
                ${itemsList}
            </div>
            
            <div style="background: #c8e6c9; padding: 15px; border-left: 4px solid #4caf50; margin: 10px 0; text-align: center;">
                <strong>📊 CART TOTALS:</strong><br>
                <div style="font-size: 16px; margin: 10px 0;">
                    <strong>Total Items:</strong> ${shoppingCart.getItemCount()}<br>
                    <strong style="color: #2e7d32; font-size: 20px;">Total Price: $${shoppingCart.getTotal().toFixed(2)}</strong>
                </div>
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <small><em>💡 This shopping cart combines objects (for items) and arrays (for the list)!</em></small>
            </div>
        `;
        
        showResult('cartResult', output);
        
    } catch (error) {
        console.error('Cart summary error:', error);
        showResult('cartResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function clearCart() {
    console.log('🗑️ Clearing cart...');
    shoppingCart.clear();
    showResult('cartResult', '<div style="color: info;">🗑️ Cart cleared! Add new items to get started.</div>');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Module 4: Objects and Arrays Demo Initialized!');
    
    // Test that critical elements exist
    const criticalElements = ['quickTestResult', 'personName', 'objectResult', 'arrayInput', 'arrayResult'];
    console.log('Checking critical elements:');
    criticalElements.forEach(id => {
        const element = document.getElementById(id);
        console.log(`  ${id}: ${element ? '✅ Found' : '❌ Missing'}`);
    });
    
    // Run quick test after a short delay
    setTimeout(() => {
        console.log('Running initialization quick test...');
        quickTest();
        
        // Show welcome message
        const welcomeMsg = `
            <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #17a2b8, #138496); color: white; border-radius: 8px;">
                <strong>🎉 Welcome to Module 4: Objects and Arrays Demo!</strong><br>
                <p style="margin: 10px 0;">Fill in the person details above and click "Create Object" to get started!</p>
                <small><em>Learn to work with JavaScript's most powerful data structures.</em></small>
            </div>
        `;
        showResult('objectResult', welcomeMsg);
        
    }, 1000);
    
    console.log('✅ Module 4 Demo Ready!');
});

// Make functions globally available
window.quickTest = quickTest;
window.runObjectDemo = runObjectDemo;
window.runArrayDemo = runArrayDemo;
window.runObjectMethodDemo = runObjectMethodDemo;
window.runDestructuringDemo = runDestructuringDemo;
window.addToCart = addToCart;
window.showCartSummary = showCartSummary;
window.clearCart = clearCart;

console.log('🎯 Module 4: Objects and Arrays Demo Loaded Successfully!');