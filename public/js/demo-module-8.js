console.log('🚀 Module 8: Error Handling and Debugging Demo Loading...');

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
            result.innerHTML = '<span style="color: green; font-weight: bold;">✅ Error handling and debugging tools ready!</span>';
            result.style.fontSize = '16px';
            console.log('✅ Quick test passed');
        } else {
            console.error('quickTestResult element not found');
        }
    } catch (error) {
        console.error('quickTest error:', error);
    }
}

// 1. Try/Catch Demo
function runTryCatchDemo() {
    console.log('🛡️ Running try/catch demo...');
    
    try {
        const errorType = document.getElementById('errorType')?.value || 'reference';
        const customMessage = document.getElementById('customMessage')?.value || 'Custom error occurred';
        
        let demonstrationResult = '';
        
        try {
            // Simulate different error types based on selection
            switch (errorType) {
                case 'reference':
                    // This will cause a ReferenceError
                    let result = undefinedVariable;
                    break;
                    
                case 'type':
                    // This will cause a TypeError
                    let obj = null;
                    obj.someProperty;
                    break;
                    
                case 'syntax':
                    // This will cause a SyntaxError
                    JSON.parse('{invalid json}');
                    break;
                    
                case 'range':
                    // This will cause a RangeError
                    new Array(-1);
                    break;
                    
                case 'custom':
                    // Throw custom error
                    throw new Error(customMessage);
                    
                default:
                    throw new Error('Unknown error type');
            }
            
            demonstrationResult = '✅ No error occurred (unexpected)';
            
        } catch (error) {
            demonstrationResult = `❌ <strong>Error Caught:</strong><br>
                • <strong>Type:</strong> ${error.name}<br>
                • <strong>Message:</strong> "${error.message}"<br>
                • <strong>Status:</strong> Error handled gracefully!`;
        } finally {
            demonstrationResult += '<br>🏁 <strong>Finally block executed</strong> (cleanup code runs)';
        }
        
        const output = `
            <div style="background: linear-gradient(135deg, #dc3545, #c82333); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🛡️ TRY/CATCH DEMONSTRATION</strong>
            </div>
            
            <div style="background: #f8d7da; padding: 12px; border-left: 4px solid #dc3545; margin: 10px 0;">
                <strong>📝 Error Type Selected:</strong> ${errorType.charAt(0).toUpperCase() + errorType.slice(1)}<br><br>
                <strong>📊 Execution Result:</strong><br>
                ${demonstrationResult}
            </div>
            
            <div style="background: #d4edda; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>💡 Try/Catch Structure:</strong><br>
                <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0;">
try {<br>
&nbsp;&nbsp;// Risky code that might throw an error<br>
&nbsp;&nbsp;performRiskyOperation();<br>
} catch (error) {<br>
&nbsp;&nbsp;// Handle the error gracefully<br>
&nbsp;&nbsp;console.error('Error:', error.message);<br>
} finally {<br>
&nbsp;&nbsp;// Always runs (cleanup code)<br>
&nbsp;&nbsp;console.log('Cleanup completed');<br>
}
                </code>
            </div>
            
            <div style="background: #e3f2fd; padding: 10px; border-left: 4px solid #2196f3; margin: 10px 0;">
                <strong>🎯 Key Benefits:</strong><br>
                • Prevents application crashes<br>
                • Allows graceful error recovery<br>
                • Provides better user experience<br>
                • Enables proper cleanup with finally
            </div>
        `;
        
        showResult('tryCatchResult', output);
        
    } catch (error) {
        console.error('runTryCatchDemo error:', error);
        showResult('tryCatchResult', `<div style="color: red;">❌ Demo Error: ${error.message}</div>`);
    }
}

function demonstrateFinally() {
    console.log('🏁 Demonstrating finally block...');
    
    try {
        let stepLog = [];
        
        try {
            stepLog.push('🚀 Starting risky operation...');
            
            // Simulate some work
            let data = { value: 42 };
            stepLog.push('✅ Operation completed successfully');
            
            // Sometimes throw an error for demonstration
            if (Math.random() > 0.5) {
                throw new Error('Random error for demonstration');
            }
            
            stepLog.push('✅ All operations completed');
            
        } catch (error) {
            stepLog.push(`❌ Error occurred: ${error.message}`);
        } finally {
            stepLog.push('🏁 Finally block: Cleanup operations performed');
            stepLog.push('📝 Resources released, connections closed, etc.');
        }
        
        const output = `
            <div style="background: linear-gradient(135deg, #ffc107, #ff8f00); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🏁 FINALLY BLOCK DEMONSTRATION</strong>
            </div>
            
            <div style="background: #fff3e0; padding: 12px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <strong>📋 Execution Steps:</strong><br>
                ${stepLog.join('<br>')}
            </div>
            
            <div style="background: #e8f5e8; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>💡 Finally Block Rules:</strong><br>
                • Always executes, whether error occurs or not<br>
                • Perfect for cleanup operations<br>
                • Runs even if return statement in try/catch<br>
                • Use for closing files, connections, releasing resources
            </div>
        `;
        
        showResult('tryCatchResult', output);
        
    } catch (error) {
        console.error('demonstrateFinally error:', error);
        showResult('tryCatchResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function clearTryCatchLog() {
    try {
        const element = document.getElementById('tryCatchResult');
        if (element) {
            element.innerHTML = '<em class="text-muted">Try/catch demo log cleared...</em>';
        }
    } catch (error) {
        console.error('clearTryCatchLog error:', error);
    }
}

// 2. Error Types Demo
function runErrorTypesDemo() {
    console.log('🏷️ Running error types demo...');
    
    try {
        const errorCategory = document.getElementById('errorCategory')?.value || 'runtime';
        const inputValue = document.getElementById('inputValue')?.value || 'test';
        
        const output = `
            <div style="background: linear-gradient(135deg, #6f42c1, #5a32a3); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🏷️ JAVASCRIPT ERROR TYPES</strong>
            </div>
            
            <div style="background: #f3e5f5; padding: 12px; border-left: 4px solid #6f42c1; margin: 10px 0;">
                <strong>📋 Category: ${errorCategory.charAt(0).toUpperCase() + errorCategory.slice(1)} Errors</strong><br><br>
                ${getErrorExamples(errorCategory, inputValue)}
            </div>
            
            <div style="background: #e8f5e8; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>🔍 Common Error Types:</strong><br>
                • <strong>ReferenceError:</strong> Variable not defined<br>
                • <strong>TypeError:</strong> Wrong data type operation<br>
                • <strong>SyntaxError:</strong> Invalid JavaScript syntax<br>
                • <strong>RangeError:</strong> Number out of valid range<br>
                • <strong>URIError:</strong> Malformed URI functions<br>
                • <strong>Custom:</strong> User-defined error messages
            </div>
        `;
        
        showResult('errorTypesResult', output);
        
    } catch (error) {
        console.error('runErrorTypesDemo error:', error);
        showResult('errorTypesResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function getErrorExamples(category, inputValue) {
    const examples = {
        runtime: `
            <strong>⚡ Runtime Error Examples:</strong><br><br>
            
            <strong>1. ReferenceError:</strong><br>
            <code>console.log(${inputValue}Variable); // ${inputValue}Variable is not defined</code><br><br>
            
            <strong>2. TypeError:</strong><br>
            <code>let obj = null; obj.${inputValue}(); // Cannot read property</code><br><br>
            
            <strong>3. RangeError:</strong><br>
            <code>new Array(-5); // Invalid array length</code><br><br>
            
            <strong>Test with your input "${inputValue}":</strong><br>
            ${demonstrateWithInput(inputValue)}
        `,
        logic: `
            <strong>🧠 Logic Error Examples:</strong><br><br>
            
            <strong>1. Off-by-one errors:</strong><br>
            <code>for (let i = 0; i <= array.length; i++) // Should be < not <=</code><br><br>
            
            <strong>2. Wrong operator:</strong><br>
            <code>if (user = null) // Assignment instead of comparison</code><br><br>
            
            <strong>3. Incorrect assumptions:</strong><br>
            <code>parseInt("${inputValue}") // May return NaN</code><br>
            Result: ${isNaN(parseInt(inputValue)) ? 'NaN (Not a Number)' : parseInt(inputValue)}
        `,
        async: `
            <strong>🌐 Async Error Examples:</strong><br><br>
            
            <strong>1. Unhandled Promise Rejection:</strong><br>
            <code>fetch('/nonexistent-url') // No .catch() handler</code><br><br>
            
            <strong>2. Async/Await without try/catch:</strong><br>
            <code>const data = await riskyAsyncOperation(); // Can throw</code><br><br>
            
            <strong>3. Race Conditions:</strong><br>
            <code>// Multiple async operations modifying same data</code><br><br>
            
            <strong>Input "${inputValue}" would be processed async:</strong><br>
            Processing... ⏳ (simulated async operation)
        `
    };
    
    return examples[category] || examples.runtime;
}

function demonstrateWithInput(input) {
    try {
        const num = parseInt(input);
        if (isNaN(num)) {
            return `❌ Cannot parse "${input}" as number`;
        }
        return `✅ Parsed "${input}" as ${num}`;
    } catch (error) {
        return `❌ Error processing "${input}": ${error.message}`;
    }
}

function showErrorProperties() {
    console.log('📄 Showing error properties...');
    
    try {
        const testError = new Error('Demo error for property inspection');
        testError.code = 'DEMO_ERROR';
        testError.details = { userId: 123, action: 'test' };
        
        const output = `
            <div style="background: linear-gradient(135deg, #17a2b8, #138496); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>📄 ERROR OBJECT PROPERTIES</strong>
            </div>
            
            <div style="background: #d1ecf1; padding: 12px; border-left: 4px solid #17a2b8; margin: 10px 0;">
                <strong>🔍 Standard Error Properties:</strong><br><br>
                • <strong>name:</strong> "${testError.name}"<br>
                • <strong>message:</strong> "${testError.message}"<br>
                • <strong>stack:</strong> Call stack trace (see console)<br><br>
                
                <strong>📋 Custom Properties:</strong><br>
                • <strong>code:</strong> "${testError.code}"<br>
                • <strong>details:</strong> ${JSON.stringify(testError.details)}<br>
            </div>
            
            <div style="background: #fff3e0; padding: 12px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <strong>💡 Creating Custom Errors:</strong><br>
                <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0;">
const error = new Error('Something went wrong');<br>
error.name = 'CustomError';<br>
error.code = 'USER_INPUT_INVALID';<br>
error.details = { field: 'email', value: 'invalid' };<br>
throw error;
                </code>
            </div>
        `;
        
        // Log to console for stack trace viewing
        console.error('Demo error with full stack trace:', testError);
        
        showResult('errorTypesResult', output);
        
    } catch (error) {
        console.error('showErrorProperties error:', error);
        showResult('errorTypesResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function clearErrorTypesLog() {
    try {
        const element = document.getElementById('errorTypesResult');
        if (element) {
            element.innerHTML = '<em class="text-muted">Error types demo log cleared...</em>';
        }
    } catch (error) {
        console.error('clearErrorTypesLog error:', error);
    }
}

// 3. Debugging Tools Demo
function runDebuggingDemo() {
    console.log('🔍 Running debugging demo...');
    
    try {
        const debugMethod = document.getElementById('debugMethod')?.value || 'console';
        const debugInput = document.getElementById('debugInput')?.value || '{"name": "John", "age": 25}';
        
        let testData = {};
        try {
            testData = JSON.parse(debugInput);
        } catch (e) {
            testData = { error: 'Invalid JSON', input: debugInput };
        }
        
        // Demonstrate different debugging methods
        demonstrateDebuggingMethod(debugMethod, testData);
        
        const output = `
            <div style="background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🔍 DEBUGGING DEMONSTRATION</strong>
            </div>
            
            <div style="background: #d4edda; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>🛠️ Method: ${debugMethod.charAt(0).toUpperCase() + debugMethod.slice(1)}</strong><br><br>
                ${getDebuggingMethodInfo(debugMethod, testData)}
            </div>
            
            <div style="background: #e3f2fd; padding: 12px; border-left: 4px solid #2196f3; margin: 10px 0;">
                <strong>💡 Console Output Generated:</strong><br>
                Check your browser's Developer Console (F12) to see:<br>
                • Detailed logging information<br>
                • Object inspection results<br>
                • Performance timing data<br>
                • Stack trace information
            </div>
        `;
        
        showResult('debuggingResult', output);
        
    } catch (error) {
        console.error('runDebuggingDemo error:', error);
        showResult('debuggingResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function demonstrateDebuggingMethod(method, data) {
    switch (method) {
        case 'console':
            console.log('🔍 Console Methods Demo:');
            console.log('Basic log:', data);
            console.info('ℹ️ Info message with data:', data);
            console.warn('⚠️ Warning message:', 'This is a warning');
            console.error('❌ Error message:', 'This is an error');
            console.table(Array.isArray(data) ? data : [data]);
            break;
            
        case 'breakpoints':
            console.log('🎯 Breakpoint Simulation:');
            console.log('Step 1: Processing data...', data);
            // debugger; // Uncomment to create actual breakpoint
            console.log('Step 2: Data processed');
            console.log('Step 3: Operation completed');
            break;
            
        case 'trace':
            console.log('📍 Stack Trace Demo:');
            console.trace('Execution path to this point');
            break;
            
        case 'performance':
            console.log('⏱️ Performance Debugging:');
            console.time('Operation Timer');
            // Simulate some work
            for (let i = 0; i < 10000; i++) {
                Math.random();
            }
            console.timeEnd('Operation Timer');
            break;
    }
}

function getDebuggingMethodInfo(method, data) {
    const info = {
        console: `
            <strong>📝 Console methods used:</strong><br>
            • <code>console.log()</code> - Basic logging<br>
            • <code>console.info()</code> - Information messages<br>
            • <code>console.warn()</code> - Warning messages<br>
            • <code>console.error()</code> - Error messages<br>
            • <code>console.table()</code> - Tabular data display<br><br>
            <strong>Data processed:</strong> ${JSON.stringify(data)}
        `,
        breakpoints: `
            <strong>🎯 Breakpoint debugging:</strong><br>
            • Use <code>debugger;</code> statement to pause execution<br>
            • Set breakpoints in DevTools Sources tab<br>
            • Step through code line by line<br>
            • Inspect variables at each step<br><br>
            <strong>Simulated steps completed with data:</strong> ${JSON.stringify(data)}
        `,
        trace: `
            <strong>📍 Stack trace analysis:</strong><br>
            • <code>console.trace()</code> shows call stack<br>
            • Helps understand execution flow<br>
            • Useful for debugging complex call chains<br>
            • Shows file names and line numbers
        `,
        performance: `
            <strong>⏱️ Performance debugging:</strong><br>
            • <code>console.time()</code> starts timer<br>
            • <code>console.timeEnd()</code> ends timer and shows duration<br>
            • Useful for identifying slow operations<br>
            • Check console for actual timing results
        `
    };
    
    return info[method] || info.console;
}

function showConsoleAPI() {
    console.log('📚 Console API Guide');
    
    const output = `
        <div style="background: linear-gradient(135deg, #fd7e14, #e8590c); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
            <strong>📚 CONSOLE API REFERENCE</strong>
        </div>
        
        <div style="background: #fff3e0; padding: 12px; border-left: 4px solid #fd7e14; margin: 10px 0;">
            <strong>🎯 Essential Console Methods:</strong><br><br>
            
            <strong>Basic Logging:</strong><br>
            <code>console.log('message', data)</code> - General logging<br>
            <code>console.info('info')</code> - Information messages<br>
            <code>console.warn('warning')</code> - Warning messages<br>
            <code>console.error('error')</code> - Error messages<br><br>
            
            <strong>Advanced Methods:</strong><br>
            <code>console.table(array)</code> - Display data in table format<br>
            <code>console.group('label')</code> - Group related logs<br>
            <code>console.groupEnd()</code> - End log grouping<br>
            <code>console.time('timer')</code> - Start performance timer<br>
            <code>console.timeEnd('timer')</code> - End timer and show duration<br>
            <code>console.trace()</code> - Show stack trace<br>
            <code>console.assert(condition, 'msg')</code> - Conditional logging
        </div>
        
        <div style="background: #d1ecf1; padding: 10px; border-left: 4px solid #17a2b8; margin: 10px 0;">
            <strong>💡 DevTools Tips:</strong><br>
            • Press F12 to open Developer Tools<br>
            • Use Console tab for interactive JavaScript<br>
            • Set breakpoints in Sources tab<br>
            • Monitor network requests in Network tab<br>
            • Inspect DOM elements in Elements tab
        </div>
    `;
    
    showResult('debuggingResult', output);
}

function clearDebuggingLog() {
    try {
        const element = document.getElementById('debuggingResult');
        if (element) {
            element.innerHTML = '<em class="text-muted">Debugging demo log cleared...</em>';
        }
    } catch (error) {
        console.error('clearDebuggingLog error:', error);
    }
}

// 4. Async Error Handling
function runAsyncErrorDemo() {
    console.log('🌐 Running async error demo...');
    
    try {
        const asyncScenario = document.getElementById('asyncScenario')?.value || 'fetch';
        const apiUrl = document.getElementById('apiUrl')?.value || 'https://httpstat.us/404';
        
        // Show immediate feedback
        showResult('asyncResult', `
            <div style="background: linear-gradient(135deg, #17a2b8, #138496); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🌐 ASYNC ERROR HANDLING DEMO</strong>
            </div>
            <div style="background: #d1ecf1; padding: 12px; border-left: 4px solid #17a2b8; margin: 10px 0;">
                <strong>⏳ Running async operation...</strong><br>
                Scenario: ${asyncScenario}<br>
                Please wait for results...
            </div>
        `);
        
        // Run async demo based on scenario
        switch (asyncScenario) {
            case 'fetch':
                demonstrateFetchError(apiUrl);
                break;
            case 'timeout':
                demonstrateTimeoutError();
                break;
            case 'chain':
                demonstrateChainError();
                break;
            case 'parallel':
                demonstrateParallelError();
                break;
        }
        
    } catch (error) {
        console.error('runAsyncErrorDemo error:', error);
        showResult('asyncResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

async function demonstrateFetchError(url) {
    const steps = ['🚀 Starting fetch operation...'];
    
    try {
        steps.push(`📡 Fetching: ${url}`);
        
        const response = await fetch(url);
        steps.push(`📊 Response status: ${response.status}`);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.text();
        steps.push('✅ Data received successfully');
        
    } catch (error) {
        steps.push(`❌ Fetch error: ${error.message}`);
        steps.push('🛡️ Error handled gracefully - app continues running');
    } finally {
        steps.push('🏁 Fetch operation completed');
        
        const output = `
            <div style="background: linear-gradient(135deg, #17a2b8, #138496); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🌐 FETCH ERROR DEMONSTRATION</strong>
            </div>
            
            <div style="background: #d1ecf1; padding: 12px; border-left: 4px solid #17a2b8; margin: 10px 0;">
                <strong>📋 Execution Steps:</strong><br>
                ${steps.join('<br>')}
            </div>
            
            <div style="background: #e8f5e8; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>💡 Async Error Handling Pattern:</strong><br>
                <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0;">
async function fetchData(url) {<br>
&nbsp;&nbsp;try {<br>
&nbsp;&nbsp;&nbsp;&nbsp;const response = await fetch(url);<br>
&nbsp;&nbsp;&nbsp;&nbsp;if (!response.ok) throw new Error('HTTP ' + response.status);<br>
&nbsp;&nbsp;&nbsp;&nbsp;return await response.json();<br>
&nbsp;&nbsp;} catch (error) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;console.error('Fetch failed:', error.message);<br>
&nbsp;&nbsp;&nbsp;&nbsp;throw error;<br>
&nbsp;&nbsp;}<br>
}
                </code>
            </div>
        `;
        
        showResult('asyncResult', output);
    }
}

async function demonstrateTimeoutError() {
    const steps = ['🚀 Starting timeout simulation...'];
    
    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Operation timed out')), 1000);
    });
    
    try {
        steps.push('⏳ Waiting for operation (1 second timeout)...');
        await timeoutPromise;
        steps.push('✅ Operation completed');
    } catch (error) {
        steps.push(`❌ Timeout error: ${error.message}`);
        steps.push('🛡️ Timeout handled - user notified');
    } finally {
        steps.push('🏁 Timeout demo completed');
        
        const output = `
            <div style="background: linear-gradient(135deg, #ffc107, #ff8f00); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>⏰ TIMEOUT ERROR DEMONSTRATION</strong>
            </div>
            
            <div style="background: #fff3e0; padding: 12px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <strong>📋 Execution Steps:</strong><br>
                ${steps.join('<br>')}
            </div>
            
            <div style="background: #d4edda; padding: 10px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>💡 Timeout Pattern:</strong><br>
                • Set reasonable timeout limits<br>
                • Provide user feedback for long operations<br>
                • Allow users to cancel long-running operations<br>
                • Implement retry mechanisms for failed requests
            </div>
        `;
        
        showResult('asyncResult', output);
    }
}

async function demonstrateChainError() {
    const steps = ['🚀 Starting promise chain...'];
    
    try {
        steps.push('🔗 Step 1: Initial operation');
        const step1 = await Promise.resolve('data from step 1');
        
        steps.push('🔗 Step 2: Processing data');
        if (Math.random() > 0.5) {
            throw new Error('Random error in step 2');
        }
        
        steps.push('🔗 Step 3: Final operation');
        const result = await Promise.resolve(step1 + ' processed');
        steps.push('✅ Chain completed successfully');
        
    } catch (error) {
        steps.push(`❌ Chain error: ${error.message}`);
        steps.push('🛡️ Error caught - partial results may be available');
    } finally {
        steps.push('🏁 Promise chain demo completed');
        
        const output = `
            <div style="background: linear-gradient(135deg, #6f42c1, #5a32a3); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🔗 PROMISE CHAIN ERROR DEMONSTRATION</strong>
            </div>
            
            <div style="background: #f3e5f5; padding: 12px; border-left: 4px solid #6f42c1; margin: 10px 0;">
                <strong>📋 Chain Execution:</strong><br>
                ${steps.join('<br>')}
            </div>
        `;
        
        showResult('asyncResult', output);
    }
}

async function demonstrateParallelError() {
    const steps = ['🚀 Starting parallel operations...'];
    
    const promises = [
        Promise.resolve('Success 1'),
        Promise.reject(new Error('Failed operation 2')),
        Promise.resolve('Success 3')
    ];
    
    try {
        steps.push('⚡ Running 3 parallel operations...');
        
        // Using Promise.allSettled to handle partial failures
        const results = await Promise.allSettled(promises);
        
        const successes = results.filter(r => r.status === 'fulfilled');
        const failures = results.filter(r => r.status === 'rejected');
        
        steps.push(`✅ ${successes.length} operations succeeded`);
        steps.push(`❌ ${failures.length} operations failed`);
        
        failures.forEach((failure, index) => {
            steps.push(`  → Error ${index + 1}: ${failure.reason.message}`);
        });
        
    } catch (error) {
        steps.push(`❌ Parallel error: ${error.message}`);
    } finally {
        steps.push('🏁 Parallel operations demo completed');
        
        const output = `
            <div style="background: linear-gradient(135deg, #e74c3c, #c0392b); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>⚡ PARALLEL OPERATIONS ERROR DEMO</strong>
            </div>
            
            <div style="background: #fadbd8; padding: 12px; border-left: 4px solid #e74c3c; margin: 10px 0;">
                <strong>📋 Parallel Execution:</strong><br>
                ${steps.join('<br>')}
            </div>
            
            <div style="background: #d4edda; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>💡 Parallel Error Strategies:</strong><br>
                • Use <code>Promise.allSettled()</code> for partial failure handling<br>
                • Use <code>Promise.all()</code> when all operations must succeed<br>
                • Implement circuit breaker patterns for failing services<br>
                • Consider retry logic for transient failures
            </div>
        `;
        
        showResult('asyncResult', output);
    }
}

function showPromisePatterns() {
    const output = `
        <div style="background: linear-gradient(135deg, #20c997, #17a2b8); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
            <strong>🎯 PROMISE ERROR PATTERNS</strong>
        </div>
        
        <div style="background: #d1ecf1; padding: 12px; border-left: 4px solid #17a2b8; margin: 10px 0;">
            <strong>📝 Promise Chain Pattern:</strong><br>
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0; font-size: 12px;">
fetch('/api/data')<br>
&nbsp;&nbsp;.then(response => {<br>
&nbsp;&nbsp;&nbsp;&nbsp;if (!response.ok) throw new Error('Network error');<br>
&nbsp;&nbsp;&nbsp;&nbsp;return response.json();<br>
&nbsp;&nbsp;})<br>
&nbsp;&nbsp;.then(data => processData(data))<br>
&nbsp;&nbsp;.catch(error => console.error('Error:', error))<br>
&nbsp;&nbsp;.finally(() => console.log('Request completed'));
            </code>
            
            <strong>📝 Async/Await Pattern:</strong><br>
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0; font-size: 12px;">
async function fetchData() {<br>
&nbsp;&nbsp;try {<br>
&nbsp;&nbsp;&nbsp;&nbsp;const response = await fetch('/api/data');<br>
&nbsp;&nbsp;&nbsp;&nbsp;if (!response.ok) throw new Error('Network error');<br>
&nbsp;&nbsp;&nbsp;&nbsp;const data = await response.json();<br>
&nbsp;&nbsp;&nbsp;&nbsp;return processData(data);<br>
&nbsp;&nbsp;} catch (error) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;console.error('Error:', error);<br>
&nbsp;&nbsp;} finally {<br>
&nbsp;&nbsp;&nbsp;&nbsp;console.log('Request completed');<br>
&nbsp;&nbsp;}<br>
}
            </code>
        </div>
    `;
    
    showResult('asyncResult', output);
}

function clearAsyncLog() {
    try {
        const element = document.getElementById('asyncResult');
        if (element) {
            element.innerHTML = '<em class="text-muted">Async error demo log cleared...</em>';
        }
    } catch (error) {
        console.error('clearAsyncLog error:', error);
    }
}

// 5. Best Practices Demo
function runBestPracticesDemo() {
    console.log('⭐ Running best practices demo...');
    
    try {
        const patternType = document.getElementById('patternType')?.value || 'validation';
        const testData = document.getElementById('testData')?.value || 'test@example.com';
        
        const output = `
            <div style="background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>⭐ ERROR HANDLING BEST PRACTICES</strong>
            </div>
            
            <div style="background: #e3f2fd; padding: 12px; border-left: 4px solid #2196f3; margin: 10px 0;">
                <strong>🎯 Pattern: ${patternType.charAt(0).toUpperCase() + patternType.slice(1)}</strong><br><br>
                ${getBestPracticeExample(patternType, testData)}
            </div>
            
            <div style="background: #e8f5e8; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>✅ Golden Rules:</strong><br>
                • Validate inputs at system boundaries<br>
                • Provide meaningful error messages<br>
                • Log errors with sufficient context<br>
                • Implement graceful degradation<br>
                • Don't expose sensitive information<br>
                • Always clean up resources
            </div>
        `;
        
        showResult('bestPracticesResult', output);
        
    } catch (error) {
        console.error('runBestPracticesDemo error:', error);
        showResult('bestPracticesResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function getBestPracticeExample(pattern, testData) {
    const examples = {
        validation: `
            <strong>📋 Input Validation Example:</strong><br><br>
            Testing with input: "${testData}"<br><br>
            
            <strong>❌ Poor Practice:</strong><br>
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 5px 0;">
function processEmail(email) {<br>
&nbsp;&nbsp;return email.toLowerCase().trim(); // Can crash!<br>
}
            </code><br>
            
            <strong>✅ Good Practice:</strong><br>
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 5px 0;">
function processEmail(email) {<br>
&nbsp;&nbsp;if (!email || typeof email !== 'string') {<br>
&nbsp;&nbsp;&nbsp;&nbsp;throw new Error('Email must be a non-empty string');<br>
&nbsp;&nbsp;}<br>
&nbsp;&nbsp;if (!email.includes('@')) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;throw new Error('Invalid email format');<br>
&nbsp;&nbsp;}<br>
&nbsp;&nbsp;return email.toLowerCase().trim();<br>
}
            </code><br>
            
            <strong>Result:</strong> ${validateTestData(testData)}
        `,
        fallback: `
            <strong>🛡️ Fallback Values Example:</strong><br><br>
            
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0;">
function getUserPreference(key, defaultValue) {<br>
&nbsp;&nbsp;try {<br>
&nbsp;&nbsp;&nbsp;&nbsp;const value = localStorage.getItem(key);<br>
&nbsp;&nbsp;&nbsp;&nbsp;return value ? JSON.parse(value) : defaultValue;<br>
&nbsp;&nbsp;} catch (error) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;console.warn('Using default for', key, error.message);<br>
&nbsp;&nbsp;&nbsp;&nbsp;return defaultValue;<br>
&nbsp;&nbsp;}<br>
}
            </code><br>
            
            <strong>Demo:</strong> Safely retrieving "${testData}" with fallback
        `,
        retry: `
            <strong>🔄 Retry Logic Example:</strong><br><br>
            
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0; font-size: 12px;">
async function withRetry(operation, maxRetries = 3) {<br>
&nbsp;&nbsp;for (let attempt = 1; attempt <= maxRetries; attempt++) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;try {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return await operation();<br>
&nbsp;&nbsp;&nbsp;&nbsp;} catch (error) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (attempt === maxRetries) throw error;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.warn(\`Attempt \${attempt} failed, retrying...\`);<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;await delay(1000 * attempt); // Exponential backoff<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
}
            </code><br>
            
            <strong>Use case:</strong> Retrying operation with "${testData}"
        `,
        logging: `
            <strong>📝 Error Logging Example:</strong><br><br>
            
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0; font-size: 12px;">
function logError(error, context = {}) {<br>
&nbsp;&nbsp;const errorInfo = {<br>
&nbsp;&nbsp;&nbsp;&nbsp;message: error.message,<br>
&nbsp;&nbsp;&nbsp;&nbsp;name: error.name,<br>
&nbsp;&nbsp;&nbsp;&nbsp;stack: error.stack,<br>
&nbsp;&nbsp;&nbsp;&nbsp;timestamp: new Date().toISOString(),<br>
&nbsp;&nbsp;&nbsp;&nbsp;url: window.location.href,<br>
&nbsp;&nbsp;&nbsp;&nbsp;userAgent: navigator.userAgent,<br>
&nbsp;&nbsp;&nbsp;&nbsp;context<br>
&nbsp;&nbsp;};<br>
&nbsp;&nbsp;<br>
&nbsp;&nbsp;console.error('Error logged:', errorInfo);<br>
&nbsp;&nbsp;// Send to logging service in production<br>
}
            </code><br>
            
            <strong>Context:</strong> Logging with data "${testData}"
        `
    };
    
    return examples[pattern] || examples.validation;
}

function validateTestData(data) {
    try {
        if (!data || typeof data !== 'string') {
            return '❌ Validation failed: Not a string';
        }
        if (!data.includes('@')) {
            return '❌ Validation failed: Invalid email format';
        }
        return `✅ Validation passed: "${data.toLowerCase().trim()}"`;
    } catch (error) {
        return `❌ Validation error: ${error.message}`;
    }
}

function runErrorHandlingQuiz() {
    console.log('🧩 Running error handling quiz...');
    
    const questions = [
        {
            q: "Which statement should always execute in try/catch?",
            options: ["try", "catch", "finally", "throw"],
            correct: "finally"
        },
        {
            q: "What type of error occurs when accessing properties of null?",
            options: ["ReferenceError", "TypeError", "SyntaxError", "RangeError"],
            correct: "TypeError"
        },
        {
            q: "Best practice for async error handling?",
            options: ["Ignore errors", "Use try/catch with async/await", "Only use .catch()", "Let errors bubble up"],
            correct: "Use try/catch with async/await"
        }
    ];
    
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    
    const output = `
        <div style="background: linear-gradient(135deg, #ff6b6b, #ee5a52); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
            <strong>🧩 ERROR HANDLING QUIZ</strong>
        </div>
        
        <div style="background: #ffe8e8; padding: 12px; border-left: 4px solid #ff6b6b; margin: 10px 0;">
            <strong>❓ Question:</strong><br>
            ${randomQuestion.q}<br><br>
            
            <strong>Options:</strong><br>
            ${randomQuestion.options.map((opt, i) => 
                `${i + 1}. ${opt}`
            ).join('<br>')}<br><br>
            
            <strong>💡 Answer:</strong> ${randomQuestion.correct}<br>
            <em>Understanding these concepts is crucial for robust error handling!</em>
        </div>
    `;
    
    showResult('bestPracticesResult', output);
}

function clearBestPracticesLog() {
    try {
        const element = document.getElementById('bestPracticesResult');
        if (element) {
            element.innerHTML = '<em class="text-muted">Best practices demo log cleared...</em>';
        }
    } catch (error) {
        console.error('clearBestPracticesLog error:', error);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Module 8: Error Handling and Debugging Demo Initialized!');
    
    try {
        // Test that critical elements exist
        const criticalElements = ['tryCatchResult', 'errorTypesResult', 'debuggingResult', 'asyncResult', 'bestPracticesResult'];
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
            const tryCatchResult = document.getElementById('tryCatchResult');
            if (tryCatchResult) {
                showResult('tryCatchResult', `
                    <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #17a2b8, #138496); color: white; border-radius: 8px;">
                        <strong>🛡️ Welcome to Error Handling & Debugging!</strong><br>
                        <p style="margin: 10px 0;">Learn to handle errors gracefully and debug effectively.</p>
                        <small><em>Start with the Try/Catch demo to see error handling in action!</em></small>
                    </div>
                `);
            }
            
        }, 1000);
        
        console.log('✅ Module 8 Demo Ready!');
        
    } catch (error) {
        console.error('DOMContentLoaded error:', error);
    }
});

// Make functions globally available
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
safeGlobalFunction('runTryCatchDemo', runTryCatchDemo);
safeGlobalFunction('demonstrateFinally', demonstrateFinally);
safeGlobalFunction('clearTryCatchLog', clearTryCatchLog);
safeGlobalFunction('runErrorTypesDemo', runErrorTypesDemo);
safeGlobalFunction('showErrorProperties', showErrorProperties);
safeGlobalFunction('clearErrorTypesLog', clearErrorTypesLog);
safeGlobalFunction('runDebuggingDemo', runDebuggingDemo);
safeGlobalFunction('showConsoleAPI', showConsoleAPI);
safeGlobalFunction('clearDebuggingLog', clearDebuggingLog);
safeGlobalFunction('runAsyncErrorDemo', runAsyncErrorDemo);
safeGlobalFunction('showPromisePatterns', showPromisePatterns);
safeGlobalFunction('clearAsyncLog', clearAsyncLog);
safeGlobalFunction('runBestPracticesDemo', runBestPracticesDemo);
safeGlobalFunction('runErrorHandlingQuiz', runErrorHandlingQuiz);
safeGlobalFunction('clearBestPracticesLog', clearBestPracticesLog);

console.log('🎯 Module 8: Error Handling and Debugging Demo Loaded Successfully!');