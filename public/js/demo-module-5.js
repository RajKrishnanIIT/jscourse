console.log('🚀 Module 5: DOM Manipulation Demo Loading...');

// Global variables for the demo
let eventListenersActive = false;
let todoCount = 0;

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
        result.innerHTML = '<span style="color: green; font-weight: bold;">✅ JavaScript and DOM are working perfectly!</span>';
        result.style.fontSize = '16px';
        console.log('✅ Quick test passed');
    } else {
        alert('Quick test element not found!');
        console.error('quickTestResult element not found');
    }
}

// 1. Element Selection Demo
function selectElement() {
    console.log('🔧 Running element selection demo...');
    
    try {
        const selector = document.getElementById('selectorInput').value.trim() || '#demo-paragraph';
        
        console.log('Attempting to select:', selector);
        
        const element = document.querySelector(selector);
        
        if (!element) {
            showResult('selectorResult', `
                <div style="color: orange;">⚠️ No element found with selector: "${selector}"</div>
                <div style="margin-top: 10px; font-size: 12px;">
                    Try: #demo-paragraph, .demo-span, button, .demo-div
                </div>
            `);
            return;
        }
        
        // Highlight the selected element temporarily
        const originalStyle = element.style.cssText;
        element.style.cssText += 'border: 3px solid red !important; background-color: yellow !important;';
        
        setTimeout(() => {
            element.style.cssText = originalStyle;
        }, 2000);
        
        const output = `
            <div style="background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🎯 ELEMENT SELECTION DEMO</strong>
            </div>
            
            <div style="background: #e3f2fd; padding: 12px; border-left: 4px solid #2196f3; margin: 10px 0;">
                <strong>📝 Selector Used:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px;">
                document.querySelector("${selector}")
                </code>
            </div>
            
            <div style="background: #c8e6c9; padding: 15px; border-left: 4px solid #4caf50; margin: 10px 0;">
                <strong>📺 ELEMENT FOUND:</strong><br>
                <div style="margin: 10px 0;">
                    <strong>Tag Name:</strong> ${element.tagName.toLowerCase()}<br>
                    <strong>ID:</strong> ${element.id || 'none'}<br>
                    <strong>Classes:</strong> ${element.className || 'none'}<br>
                    <strong>Text Content:</strong> "${element.textContent.trim()}"<br>
                    <strong>HTML:</strong> <code>${element.outerHTML.slice(0, 100)}${element.outerHTML.length > 100 ? '...' : ''}</code>
                </div>
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <small><em>💡 Element highlighted in red for 2 seconds!</em></small>
            </div>
        `;
        
        showResult('selectorResult', output);
        
    } catch (error) {
        console.error('Selection demo error:', error);
        showResult('selectorResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function selectAllElements() {
    console.log('🔧 Running select all elements demo...');
    
    try {
        const elements = document.querySelectorAll('.demo-span, .demo-div, #demo-paragraph, #demo-button');
        
        console.log('Found elements:', elements.length);
        
        // Highlight all elements
        elements.forEach((element, index) => {
            const originalStyle = element.style.cssText;
            element.style.cssText += `border: 2px solid blue !important; background-color: lightblue !important;`;
            
            setTimeout(() => {
                element.style.cssText = originalStyle;
            }, 3000);
        });
        
        let elementsList = '';
        elements.forEach((element, index) => {
            elementsList += `
                <div style="background: #e9ecef; padding: 8px; margin: 4px 0; border-radius: 4px;">
                    ${index + 1}. &lt;${element.tagName.toLowerCase()}&gt; - "${element.textContent.trim().slice(0, 50)}"
                </div>
            `;
        });
        
        const output = `
            <div style="background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🎯 SELECT ALL ELEMENTS DEMO</strong>
            </div>
            
            <div style="background: #e3f2fd; padding: 12px; border-left: 4px solid #2196f3; margin: 10px 0;">
                <strong>📝 Query Used:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px;">
                document.querySelectorAll('.demo-span, .demo-div, #demo-paragraph, #demo-button')
                </code>
            </div>
            
            <div style="background: #c8e6c9; padding: 15px; border-left: 4px solid #4caf50; margin: 10px 0;">
                <strong>📺 FOUND ${elements.length} ELEMENTS:</strong><br>
                ${elementsList}
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <small><em>💡 All elements highlighted in blue for 3 seconds!</em></small>
            </div>
        `;
        
        showResult('selectorResult', output);
        
    } catch (error) {
        console.error('Select all demo error:', error);
        showResult('selectorResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

// 2. Event Handling Demo
function setupEventListeners() {
    console.log('🔧 Setting up event listeners...');
    
    if (eventListenersActive) {
        showResult('eventResult', '<div style="color: orange;">⚠️ Event listeners already active!</div>');
        return;
    }
    
    try {
        const clickDemo = document.getElementById('clickDemo');
        const hoverDemo = document.getElementById('hoverDemo');
        const inputDemo = document.getElementById('inputDemo');
        const mouseArea = document.getElementById('mouseArea');
        
        // Clear existing log
        showResult('eventResult', '<div style="color: green;">✅ Event listeners activated! Interact with elements above...</div>');
        
        // Click event
        clickDemo.addEventListener('click', function(event) {
            logEvent('🖱️ CLICK', `Button clicked! Background changed to random color.`);
            event.target.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
        });
        
        // Hover events
        hoverDemo.addEventListener('mouseenter', function() {
            logEvent('🐭 HOVER', `Mouse entered hover button!`);
            this.style.transform = 'scale(1.1)';
        });
        
        hoverDemo.addEventListener('mouseleave', function() {
            logEvent('🐭 LEAVE', `Mouse left hover button!`);
            this.style.transform = 'scale(1)';
        });
        
        // Input event
        inputDemo.addEventListener('input', function(event) {
            logEvent('⌨️ INPUT', `Typed: "${event.target.value}" (${event.target.value.length} characters)`);
        });
        
        // Keyboard event
        inputDemo.addEventListener('keydown', function(event) {
            logEvent('🔑 KEYDOWN', `Key pressed: "${event.key}" (Code: ${event.code})`);
        });
        
        // Mouse area events
        mouseArea.addEventListener('click', function(event) {
            const rect = event.target.getBoundingClientRect();
            const x = Math.round(event.clientX - rect.left);
            const y = Math.round(event.clientY - rect.top);
            logEvent('📍 MOUSE CLICK', `Clicked at coordinates (${x}, ${y})`);
        });
        
        mouseArea.addEventListener('mousemove', function(event) {
            const rect = event.target.getBoundingClientRect();
            const x = Math.round(event.clientX - rect.left);
            const y = Math.round(event.clientY - rect.top);
            this.innerHTML = `<small>Mouse position: (${x}, ${y})<br>Click anywhere in this area!</small>`;
        });
        
        eventListenersActive = true;
        
        console.log('✅ Event listeners setup complete');
        
    } catch (error) {
        console.error('Event setup error:', error);
        showResult('eventResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function removeEventListeners() {
    console.log('🗑️ Removing event listeners...');
    
    // For demo purposes, we'll just show a message
    // In real applications, you'd store listener references to remove them
    showResult('eventResult', '<div style="color: gray;">🗑️ Event listeners removed! (Demo reset)</div>');
    eventListenersActive = false;
    
    // Reset styles
    document.getElementById('clickDemo').style.backgroundColor = '';
    document.getElementById('hoverDemo').style.transform = '';
    document.getElementById('mouseArea').innerHTML = '<small>Move mouse here and click!</small>';
}

function logEvent(type, message) {
    const eventResult = document.getElementById('eventResult');
    const timestamp = new Date().toLocaleTimeString();
    
    const logEntry = `
        <div style="background: #e9ecef; border-left: 3px solid #007bff; padding: 8px; margin: 4px 0; border-radius: 4px;">
            <strong>${type}</strong> [${timestamp}]: ${message}
        </div>
    `;
    
    if (eventResult.innerHTML.includes('Event listeners activated')) {
        eventResult.innerHTML = logEntry;
    } else {
        eventResult.innerHTML = logEntry + eventResult.innerHTML;
    }
    
    // Keep only last 5 entries
    const entries = eventResult.querySelectorAll('div');
    if (entries.length > 5) {
        entries[entries.length - 1].remove();
    }
}

// 3. Content Modification Demo
function changeText() {
    console.log('📝 Changing text content...');
    
    try {
        const newText = document.getElementById('newText').value || 'Modified text content!';
        const contentDemo = document.getElementById('contentDemo');
        
        const oldText = contentDemo.textContent;
        contentDemo.textContent = newText;
        
        const output = `
            <div style="background: linear-gradient(135deg, #ffc107, #ff8f00); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>📝 TEXT CONTENT MODIFIED</strong>
            </div>
            
            <div style="background: #fff8e1; padding: 12px; border-left: 4px solid #ffc107; margin: 10px 0;">
                <strong>📝 Code Used:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px;">
                element.textContent = "${newText}"
                </code>
            </div>
            
            <div style="background: #c8e6c9; padding: 15px; border-left: 4px solid #4caf50; margin: 10px 0;">
                <strong>📺 CHANGE RESULT:</strong><br>
                <strong>Before:</strong> "${oldText}"<br>
                <strong>After:</strong> "${newText}"
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <small><em>🔒 textContent is safe from XSS attacks!</em></small>
            </div>
        `;
        
        showResult('contentResult', output);
        
    } catch (error) {
        console.error('Change text error:', error);
        showResult('contentResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function changeHtml() {
    console.log('📝 Changing HTML content...');
    
    try {
        const newHtml = document.getElementById('newHtml').value || '<em>Modified HTML content!</em>';
        const htmlDemo = document.getElementById('htmlDemo');
        
        const oldHtml = htmlDemo.innerHTML;
        htmlDemo.innerHTML = newHtml;
        
        const output = `
            <div style="background: linear-gradient(135deg, #17a2b8, #138496); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>📝 HTML CONTENT MODIFIED</strong>
            </div>
            
            <div style="background: #d1ecf1; padding: 12px; border-left: 4px solid #17a2b8; margin: 10px 0;">
                <strong>📝 Code Used:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px;">
                element.innerHTML = "${newHtml.replace(/</g, '&lt;').replace(/>/g, '&gt;')}"
                </code>
            </div>
            
            <div style="background: #c8e6c9; padding: 15px; border-left: 4px solid #4caf50; margin: 10px 0;">
                <strong>📺 CHANGE RESULT:</strong><br>
                <strong>Before:</strong> ${oldHtml}<br>
                <strong>After:</strong> ${newHtml}
            </div>
            
            <div style="background: #f8d7da; padding: 10px; border-left: 4px solid #dc3545; margin: 10px 0;">
                <small><em>⚠️ Be careful with innerHTML and user input (XSS risk)!</em></small>
            </div>
        `;
        
        showResult('contentResult', output);
        
    } catch (error) {
        console.error('Change HTML error:', error);
        showResult('contentResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function addListItem() {
    console.log('📝 Adding list item...');
    
    try {
        const listDemo = document.getElementById('listDemo');
        const newItem = document.createElement('li');
        newItem.textContent = `New item ${listDemo.children.length + 1}`;
        listDemo.appendChild(newItem);
        
        const output = `
            <div style="background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>➕ LIST ITEM ADDED</strong>
            </div>
            
            <div style="background: #d4edda; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>📝 Code Used:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px; display: block; margin: 4px 0;">
                const newItem = document.createElement('li');<br>
                newItem.textContent = 'New item';<br>
                list.appendChild(newItem);
                </code>
            </div>
            
            <div style="background: #c8e6c9; padding: 15px; border-left: 4px solid #4caf50; margin: 10px 0;">
                <strong>📺 RESULT:</strong><br>
                Added "${newItem.textContent}" to the list.<br>
                List now has ${listDemo.children.length} items.
            </div>
        `;
        
        showResult('contentResult', output);
        
    } catch (error) {
        console.error('Add list item error:', error);
        showResult('contentResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function resetContent() {
    console.log('🔄 Resetting content...');
    
    document.getElementById('contentDemo').textContent = 'Original paragraph text';
    document.getElementById('htmlDemo').innerHTML = '<strong>Original HTML content</strong>';
    document.getElementById('listDemo').innerHTML = `
        <li>Original item 1</li>
        <li>Original item 2</li>
    `;
    
    showResult('contentResult', '<div style="color: info;">🔄 All content reset to original state!</div>');
}

// 4. CSS Manipulation Demo
function applyStyles() {
    console.log('🎨 Applying styles...');
    
    try {
        const styleDemo = document.getElementById('styleDemo');
        const bgColor = document.getElementById('bgColor').value;
        const textColor = document.getElementById('textColor').value;
        const fontSize = document.getElementById('fontSize').value;
        const borderWidth = document.getElementById('borderWidth').value;
        
        // Update slider labels
        document.querySelector('label[for="fontSize"] + small').textContent = fontSize + 'px';
        document.querySelector('label[for="borderWidth"] + small').textContent = borderWidth + 'px';
        
        // Apply styles
        styleDemo.style.backgroundColor = bgColor;
        styleDemo.style.color = textColor;
        styleDemo.style.fontSize = fontSize + 'px';
        styleDemo.style.borderWidth = borderWidth + 'px';
        styleDemo.style.borderStyle = 'solid';
        
        const output = `
            <div style="background: linear-gradient(135deg, #dc3545, #c82333); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🎨 STYLES APPLIED</strong>
            </div>
            
            <div style="background: #f8d7da; padding: 12px; border-left: 4px solid #dc3545; margin: 10px 0;">
                <strong>📝 Code Used:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px; display: block; margin: 2px 0;">
                element.style.backgroundColor = "${bgColor}";<br>
                element.style.color = "${textColor}";<br>
                element.style.fontSize = "${fontSize}px";<br>
                element.style.borderWidth = "${borderWidth}px";
                </code>
            </div>
            
            <div style="background: #c8e6c9; padding: 15px; border-left: 4px solid #4caf50; margin: 10px 0;">
                <strong>📺 APPLIED STYLES:</strong><br>
                <div style="margin: 10px 0;">
                    <strong>Background:</strong> ${bgColor}<br>
                    <strong>Text Color:</strong> ${textColor}<br>
                    <strong>Font Size:</strong> ${fontSize}px<br>
                    <strong>Border Width:</strong> ${borderWidth}px
                </div>
            </div>
        `;
        
        showResult('styleResult', output);
        
    } catch (error) {
        console.error('Apply styles error:', error);
        showResult('styleResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function addCssClass() {
    console.log('📝 Adding CSS class...');
    
    try {
        const styleDemo = document.getElementById('styleDemo');
        
        // Add custom CSS class
        styleDemo.classList.add('demo-highlight');
        
        // Create the class if it doesn't exist
        if (!document.querySelector('style#demo-styles')) {
            const style = document.createElement('style');
            style.id = 'demo-styles';
            style.textContent = `
                .demo-highlight {
                    animation: pulse 1s infinite;
                    box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
                }
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
            `;
            document.head.appendChild(style);
        }
        
        setTimeout(() => {
            styleDemo.classList.remove('demo-highlight');
        }, 3000);
        
        const output = `
            <div style="background: linear-gradient(135deg, #17a2b8, #138496); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>📝 CSS CLASS ADDED</strong>
            </div>
            
            <div style="background: #d1ecf1; padding: 12px; border-left: 4px solid #17a2b8; margin: 10px 0;">
                <strong>📝 Code Used:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px;">
                element.classList.add('demo-highlight')
                </code>
            </div>
            
            <div style="background: #c8e6c9; padding: 15px; border-left: 4px solid #4caf50; margin: 10px 0;">
                <strong>📺 RESULT:</strong><br>
                Added "demo-highlight" class with pulse animation!<br>
                Class will be removed after 3 seconds.
            </div>
        `;
        
        showResult('styleResult', output);
        
    } catch (error) {
        console.error('Add CSS class error:', error);
        showResult('styleResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function toggleVisibility() {
    console.log('👁️ Toggling visibility...');
    
    try {
        const styleDemo = document.getElementById('styleDemo');
        const isHidden = styleDemo.style.display === 'none';
        
        if (isHidden) {
            styleDemo.style.display = 'block';
            styleDemo.style.opacity = '1';
        } else {
            styleDemo.style.display = 'none';
        }
        
        const output = `
            <div style="background: linear-gradient(135deg, #ffc107, #ff8f00); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>👁️ VISIBILITY TOGGLED</strong>
            </div>
            
            <div style="background: #fff8e1; padding: 12px; border-left: 4px solid #ffc107; margin: 10px 0;">
                <strong>📝 Code Used:</strong><br>
                <code style="background: #fff; padding: 4px 8px; border-radius: 3px;">
                element.style.display = "${isHidden ? 'block' : 'none'}"
                </code>
            </div>
            
            <div style="background: #c8e6c9; padding: 15px; border-left: 4px solid #4caf50; margin: 10px 0;">
                <strong>📺 RESULT:</strong><br>
                Element is now ${isHidden ? 'visible' : 'hidden'}!<br>
                Click again to toggle back.
            </div>
        `;
        
        showResult('styleResult', output);
        
    } catch (error) {
        console.error('Toggle visibility error:', error);
        showResult('styleResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function resetStyles() {
    console.log('🔄 Resetting styles...');
    
    const styleDemo = document.getElementById('styleDemo');
    styleDemo.style.cssText = 'background-color: lightblue; color: black; font-size: 16px; border: 1px solid black; padding: 12px;';
    styleDemo.classList.remove('demo-highlight');
    
    // Reset form inputs
    document.getElementById('bgColor').value = '#ADD8E6';
    document.getElementById('textColor').value = '#000000';
    document.getElementById('fontSize').value = '16';
    document.getElementById('borderWidth').value = '1';
    
    showResult('styleResult', '<div style="color: info;">🔄 All styles reset to original state!</div>');
}

// 5. Todo List Practice Exercise
function addTodo() {
    console.log('📝 Adding todo item...');
    
    try {
        const input = document.getElementById('todoInput');
        const todoText = input.value.trim();
        
        if (!todoText) {
            updateTodoStats('⚠️ Please enter a todo item');
            return;
        }
        
        const todoList = document.getElementById('todoList');
        
        // Clear placeholder if it exists
        if (todoList.children[0] && todoList.children[0].textContent.includes('No todos')) {
            todoList.innerHTML = '';
        }
        
        // Create todo item
        const li = document.createElement('li');
        li.className = 'todo-item d-flex align-items-center mb-2 p-2 border rounded';
        li.innerHTML = `
            <input type="checkbox" class="me-2" onchange="toggleTodo(this)">
            <span class="flex-grow-1">${todoText}</span>
            <button class="btn btn-sm btn-danger ms-2" onclick="deleteTodo(this)">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        todoList.appendChild(li);
        input.value = '';
        todoCount++;
        
        updateTodoStats(`✅ Added "${todoText}"`);
        
    } catch (error) {
        console.error('Add todo error:', error);
        updateTodoStats(`❌ Error: ${error.message}`);
    }
}

function toggleTodo(checkbox) {
    console.log('✅ Toggling todo completion...');
    
    const todoItem = checkbox.parentElement;
    const todoText = todoItem.querySelector('span');
    
    if (checkbox.checked) {
        todoText.style.textDecoration = 'line-through';
        todoText.style.opacity = '0.6';
        todoItem.style.backgroundColor = '#f8f9fa';
        updateTodoStats(`✅ Completed: "${todoText.textContent}"`);
    } else {
        todoText.style.textDecoration = 'none';
        todoText.style.opacity = '1';
        todoItem.style.backgroundColor = '';
        updateTodoStats(`↩️ Uncompleted: "${todoText.textContent}"`);
    }
}

function deleteTodo(button) {
    console.log('🗑️ Deleting todo item...');
    
    const todoItem = button.parentElement;
    const todoText = todoItem.querySelector('span').textContent;
    
    todoItem.remove();
    todoCount--;
    
    // Add placeholder if no todos left
    const todoList = document.getElementById('todoList');
    if (todoList.children.length === 0) {
        todoList.innerHTML = '<li class="text-muted"><em>No todos yet. Add some above!</em></li>';
    }
    
    updateTodoStats(`🗑️ Deleted: "${todoText}"`);
}

function clearCompleted() {
    console.log('🗑️ Clearing completed todos...');
    
    const completedTodos = document.querySelectorAll('.todo-item input[type="checkbox"]:checked');
    let completedCount = 0;
    
    completedTodos.forEach(checkbox => {
        checkbox.parentElement.remove();
        completedCount++;
        todoCount--;
    });
    
    const todoList = document.getElementById('todoList');
    if (todoList.children.length === 0) {
        todoList.innerHTML = '<li class="text-muted"><em>No todos yet. Add some above!</em></li>';
    }
    
    updateTodoStats(`🗑️ Cleared ${completedCount} completed todos`);
}

function clearAllTodos() {
    console.log('🗑️ Clearing all todos...');
    
    const todoList = document.getElementById('todoList');
    const todoCountBefore = todoCount;
    
    todoList.innerHTML = '<li class="text-muted"><em>No todos yet. Add some above!</em></li>';
    todoCount = 0;
    
    updateTodoStats(`🗑️ Cleared all ${todoCountBefore} todos`);
}

function updateTodoStats(message) {
    const todoList = document.getElementById('todoList');
    const totalTodos = todoList.querySelectorAll('.todo-item').length;
    const completedTodos = todoList.querySelectorAll('.todo-item input[type="checkbox"]:checked').length;
    const pendingTodos = totalTodos - completedTodos;
    
    const stats = `
        <div style="background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
            <strong>📊 TODO STATISTICS</strong>
        </div>
        
        <div style="background: #d4edda; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
            <strong>📈 Current Stats:</strong><br>
            <div style="margin: 10px 0;">
                <strong>Total Todos:</strong> ${totalTodos}<br>
                <strong>Completed:</strong> ${completedTodos}<br>
                <strong>Pending:</strong> ${pendingTodos}
            </div>
        </div>
        
        <div style="background: #c8e6c9; padding: 12px; border-left: 4px solid #4caf50; margin: 10px 0;">
            <strong>📺 Last Action:</strong><br>
            ${message}
        </div>
    `;
    
    showResult('todoResult', stats);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Module 5: DOM Manipulation Demo Initialized!');
    
    // Test that critical elements exist
    const criticalElements = ['quickTestResult', 'selectorInput', 'selectorResult', 'eventResult'];
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
                <strong>🎉 Welcome to Module 5: DOM Manipulation Demo!</strong><br>
                <p style="margin: 10px 0;">Try different CSS selectors above to select elements!</p>
                <small><em>Learn to interact with web page elements dynamically.</em></small>
            </div>
        `;
        showResult('selectorResult', welcomeMsg);
        
        // Setup initial todo stats
        updateTodoStats('Ready to add todos!');
        
        // Add slider event listeners for real-time updates
        const fontSize = document.getElementById('fontSize');
        const borderWidth = document.getElementById('borderWidth');
        
        if (fontSize) {
            fontSize.addEventListener('input', function() {
                document.querySelector('label[for="fontSize"] + small').textContent = this.value + 'px';
            });
        }
        
        if (borderWidth) {
            borderWidth.addEventListener('input', function() {
                document.querySelector('label[for="borderWidth"] + small').textContent = this.value + 'px';
            });
        }
        
        // Add Enter key support for todo input
        const todoInput = document.getElementById('todoInput');
        if (todoInput) {
            todoInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    addTodo();
                }
            });
        }
        
    }, 1000);
    
    console.log('✅ Module 5 Demo Ready!');
});

// Make functions globally available
window.quickTest = quickTest;
window.selectElement = selectElement;
window.selectAllElements = selectAllElements;
window.setupEventListeners = setupEventListeners;
window.removeEventListeners = removeEventListeners;
window.changeText = changeText;
window.changeHtml = changeHtml;
window.addListItem = addListItem;
window.resetContent = resetContent;
window.applyStyles = applyStyles;
window.addCssClass = addCssClass;
window.toggleVisibility = toggleVisibility;
window.resetStyles = resetStyles;
window.addTodo = addTodo;
window.toggleTodo = toggleTodo;
window.deleteTodo = deleteTodo;
window.clearCompleted = clearCompleted;
window.clearAllTodos = clearAllTodos;

console.log('🎯 Module 5: DOM Manipulation Demo Loaded Successfully!');