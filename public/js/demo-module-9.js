console.log('🚀 Module 9: Testing JavaScript Code Demo Loading...');

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
            result.innerHTML = '<span style="color: green; font-weight: bold;">✅ Testing framework ready!</span>';
            result.style.fontSize = '16px';
            console.log('✅ Quick test passed');
        } else {
            console.error('quickTestResult element not found');
        }
    } catch (error) {
        console.error('quickTest error:', error);
    }
}

// Simple Test Framework Implementation
class SimpleTestFramework {
    constructor() {
        this.tests = [];
        this.results = [];
        this.passed = 0;
        this.failed = 0;
    }

    // Test registration
    test(description, testFunction) {
        this.tests.push({ description, testFunction });
    }

    // Assertion methods
    expect(actual) {
        return {
            toBe: (expected) => {
                if (actual === expected) {
                    return { passed: true, message: `Expected ${actual} to be ${expected}` };
                } else {
                    return { passed: false, message: `Expected ${actual} to be ${expected}, but got ${actual}` };
                }
            },
            toEqual: (expected) => {
                if (JSON.stringify(actual) === JSON.stringify(expected)) {
                    return { passed: true, message: `Expected ${JSON.stringify(actual)} to equal ${JSON.stringify(expected)}` };
                } else {
                    return { passed: false, message: `Expected ${JSON.stringify(actual)} to equal ${JSON.stringify(expected)}` };
                }
            },
            toBeGreaterThan: (expected) => {
                if (actual > expected) {
                    return { passed: true, message: `Expected ${actual} to be greater than ${expected}` };
                } else {
                    return { passed: false, message: `Expected ${actual} to be greater than ${expected}` };
                }
            },
            toContain: (expected) => {
                if (actual.includes && actual.includes(expected)) {
                    return { passed: true, message: `Expected ${actual} to contain ${expected}` };
                } else {
                    return { passed: false, message: `Expected ${actual} to contain ${expected}` };
                }
            }
        };
    }

    // Run all tests
    runTests() {
        this.results = [];
        this.passed = 0;
        this.failed = 0;

        this.tests.forEach(test => {
            try {
                const result = test.testFunction();
                this.results.push({
                    description: test.description,
                    passed: result.passed,
                    message: result.message,
                    error: null
                });
                
                if (result.passed) {
                    this.passed++;
                } else {
                    this.failed++;
                }
            } catch (error) {
                this.results.push({
                    description: test.description,
                    passed: false,
                    message: `Test threw an error: ${error.message}`,
                    error: error
                });
                this.failed++;
            }
        });

        return {
            total: this.tests.length,
            passed: this.passed,
            failed: this.failed,
            results: this.results
        };
    }

    // Clear all tests
    clearTests() {
        this.tests = [];
        this.results = [];
        this.passed = 0;
        this.failed = 0;
    }
}

// Global test framework instance
const testFramework = new SimpleTestFramework();

// Sample functions to test
const mathUtils = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) throw new Error('Division by zero');
        return a / b;
    },
    isEven: (n) => n % 2 === 0,
    factorial: (n) => {
        if (n < 0) return undefined;
        if (n === 0) return 1;
        return n * mathUtils.factorial(n - 1);
    }
};

const stringUtils = {
    capitalize: (str) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },
    reverse: (str) => str.split('').reverse().join(''),
    isPalindrome: (str) => {
        const cleaned = str.toLowerCase().replace(/[^a-z]/g, '');
        return cleaned === cleaned.split('').reverse().join('');
    },
    wordCount: (str) => str.trim().split(/\s+/).filter(word => word.length > 0).length
};

// 1. Unit Testing Demo
function runUnitTestDemo() {
    console.log('🧪 Running unit test demo...');
    
    try {
        const testType = document.getElementById('testType')?.value || 'math';
        
        // Clear previous tests
        testFramework.clearTests();
        
        // Add tests based on selection
        if (testType === 'math') {
            setupMathTests();
        } else if (testType === 'string') {
            setupStringTests();
        } else {
            setupArrayTests();
        }
        
        // Run tests
        const results = testFramework.runTests();
        
        const output = `
            <div style="background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🧪 UNIT TESTING RESULTS</strong>
            </div>
            
            <div style="background: #d4edda; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>📊 Test Summary:</strong><br>
                • Total Tests: ${results.total}<br>
                • Passed: ${results.passed} ✅<br>
                • Failed: ${results.failed} ❌<br>
                • Success Rate: ${results.total > 0 ? Math.round((results.passed / results.total) * 100) : 0}%
            </div>
            
            <div style="background: #f8f9fa; padding: 12px; border-left: 4px solid #6c757d; margin: 10px 0;">
                <strong>📋 Test Details:</strong><br>
                ${formatTestResults(results.results)}
            </div>
            
            <div style="background: #e3f2fd; padding: 10px; border-left: 4px solid #2196f3; margin: 10px 0;">
                <strong>💡 Unit Testing Benefits:</strong><br>
                • Catches bugs early in development<br>
                • Makes code more reliable and maintainable<br>
                • Provides documentation through test cases<br>
                • Enables safe refactoring
            </div>
        `;
        
        showResult('unitTestResult', output);
        
    } catch (error) {
        console.error('runUnitTestDemo error:', error);
        showResult('unitTestResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function setupMathTests() {
    testFramework.test('Addition should work correctly', () => {
        return testFramework.expect(mathUtils.add(2, 3)).toBe(5);
    });
    
    testFramework.test('Subtraction should work correctly', () => {
        return testFramework.expect(mathUtils.subtract(5, 3)).toBe(2);
    });
    
    testFramework.test('Multiplication should work correctly', () => {
        return testFramework.expect(mathUtils.multiply(4, 3)).toBe(12);
    });
    
    testFramework.test('Division should work correctly', () => {
        return testFramework.expect(mathUtils.divide(10, 2)).toBe(5);
    });
    
    testFramework.test('Even number detection should work', () => {
        return testFramework.expect(mathUtils.isEven(4)).toBe(true);
    });
    
    testFramework.test('Odd number detection should work', () => {
        return testFramework.expect(mathUtils.isEven(5)).toBe(false);
    });
}

function setupStringTests() {
    testFramework.test('Capitalize should work correctly', () => {
        return testFramework.expect(stringUtils.capitalize('hello')).toBe('Hello');
    });
    
    testFramework.test('Reverse should work correctly', () => {
        return testFramework.expect(stringUtils.reverse('hello')).toBe('olleh');
    });
    
    testFramework.test('Palindrome detection should work', () => {
        return testFramework.expect(stringUtils.isPalindrome('racecar')).toBe(true);
    });
    
    testFramework.test('Word count should work correctly', () => {
        return testFramework.expect(stringUtils.wordCount('hello world test')).toBe(3);
    });
    
    testFramework.test('Empty string should capitalize to empty', () => {
        return testFramework.expect(stringUtils.capitalize('')).toBe('');
    });
}

function setupArrayTests() {
    const arrayUtils = {
        findMax: (arr) => Math.max(...arr),
        sum: (arr) => arr.reduce((sum, num) => sum + num, 0),
        average: (arr) => arr.length ? arr.reduce((sum, num) => sum + num, 0) / arr.length : 0
    };
    
    testFramework.test('Find max should work correctly', () => {
        return testFramework.expect(arrayUtils.findMax([1, 5, 3, 9, 2])).toBe(9);
    });
    
    testFramework.test('Sum should work correctly', () => {
        return testFramework.expect(arrayUtils.sum([1, 2, 3, 4])).toBe(10);
    });
    
    testFramework.test('Average should work correctly', () => {
        return testFramework.expect(arrayUtils.average([2, 4, 6])).toBe(4);
    });
    
    testFramework.test('Empty array sum should be 0', () => {
        return testFramework.expect(arrayUtils.sum([])).toBe(0);
    });
}

function formatTestResults(results) {
    return results.map(result => {
        const icon = result.passed ? '✅' : '❌';
        const style = result.passed ? 'color: #28a745;' : 'color: #dc3545;';
        return `<div style="${style}"><strong>${icon} ${result.description}</strong><br><em>${result.message}</em></div>`;
    }).join('<br>');
}

function runCustomTest() {
    console.log('⚙️ Running custom test...');
    
    try {
        const testName = document.getElementById('customTestName')?.value || 'Custom Test';
        const testCode = document.getElementById('customTestCode')?.value || 'return testFramework.expect(2 + 2).toBe(4);';
        
        // Clear previous tests and add custom test
        testFramework.clearTests();
        
        testFramework.test(testName, () => {
            // Create a safe evaluation context
            try {
                // Use Function constructor for safer evaluation than eval
                const testFunction = new Function('testFramework', 'mathUtils', 'stringUtils', testCode);
                return testFunction(testFramework, mathUtils, stringUtils);
            } catch (error) {
                return { passed: false, message: `Test code error: ${error.message}` };
            }
        });
        
        const results = testFramework.runTests();
        
        const output = `
            <div style="background: linear-gradient(135deg, #17a2b8, #138496); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>⚙️ CUSTOM TEST RESULTS</strong>
            </div>
            
            <div style="background: #d1ecf1; padding: 12px; border-left: 4px solid #17a2b8; margin: 10px 0;">
                <strong>🧪 Test: "${testName}"</strong><br><br>
                <strong>Code:</strong><br>
                <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0;">
                ${testCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
                </code>
            </div>
            
            <div style="background: #f8f9fa; padding: 12px; border-left: 4px solid #6c757d; margin: 10px 0;">
                <strong>📋 Results:</strong><br>
                ${formatTestResults(results.results)}
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <strong>💡 Available Functions:</strong><br>
                • <code>mathUtils.add(a, b)</code>, <code>mathUtils.multiply(a, b)</code><br>
                • <code>stringUtils.capitalize(str)</code>, <code>stringUtils.reverse(str)</code><br>
                • <code>testFramework.expect(actual).toBe(expected)</code><br>
                • <code>testFramework.expect(actual).toEqual(expected)</code>
            </div>
        `;
        
        showResult('unitTestResult', output);
        
    } catch (error) {
        console.error('runCustomTest error:', error);
        showResult('unitTestResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function clearUnitTestLog() {
    try {
        const element = document.getElementById('unitTestResult');
        if (element) {
            element.innerHTML = '<em class="text-muted">Unit testing demo log cleared...</em>';
        }
    } catch (error) {
        console.error('clearUnitTestLog error:', error);
    }
}

// 2. Test-Driven Development Demo
function runTDDDemo() {
    console.log('🔄 Running TDD demo...');
    
    try {
        const step = document.getElementById('tddStep')?.value || 'red';
        
        const output = `
            <div style="background: linear-gradient(135deg, #dc3545, #c82333); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🔄 TEST-DRIVEN DEVELOPMENT (TDD)</strong>
            </div>
            
            <div style="background: #f8d7da; padding: 12px; border-left: 4px solid #dc3545; margin: 10px 0;">
                <strong>🎯 TDD Cycle (Red-Green-Refactor):</strong><br><br>
                ${getTDDStepDemo(step)}
            </div>
            
            <div style="background: #d4edda; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>📋 Example: Building a Calculator Function</strong><br><br>
                ${getTDDCalculatorExample(step)}
            </div>
            
            <div style="background: #e3f2fd; padding: 10px; border-left: 4px solid #2196f3; margin: 10px 0;">
                <strong>💡 TDD Benefits:</strong><br>
                • Ensures code meets requirements<br>
                • Provides immediate feedback<br>
                • Results in better design<br>
                • Creates comprehensive test coverage<br>
                • Reduces debugging time
            </div>
        `;
        
        showResult('tddResult', output);
        
    } catch (error) {
        console.error('runTDDDemo error:', error);
        showResult('tddResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function getTDDStepDemo(step) {
    const steps = {
        red: `
            <strong style="color: #dc3545;">🔴 RED Phase:</strong> Write a failing test<br><br>
            1. Write a test for the next small piece of functionality<br>
            2. Run the test and verify it fails<br>
            3. The failure confirms the test is valid<br><br>
            
            <strong>Current Status:</strong> Writing failing tests ❌
        `,
        green: `
            <strong style="color: #28a745;">🟢 GREEN Phase:</strong> Make the test pass<br><br>
            1. Write the minimal code to make the test pass<br>
            2. Don't worry about perfect code yet<br>
            3. Focus only on making the test pass<br><br>
            
            <strong>Current Status:</strong> Writing code to pass tests ✅
        `,
        refactor: `
            <strong style="color: #007bff;">🔵 REFACTOR Phase:</strong> Improve the code<br><br>
            1. Clean up the code while keeping tests green<br>
            2. Remove duplication<br>
            3. Improve readability and structure<br><br>
            
            <strong>Current Status:</strong> Refactoring for better design 🛠️
        `
    };
    
    return steps[step] || steps.red;
}

function getTDDCalculatorExample(step) {
    const examples = {
        red: `
            <strong>❌ Step 1: Write Failing Test</strong><br>
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0;">
// Test (this will fail initially)<br>
test('Calculator should add two numbers', () => {<br>
&nbsp;&nbsp;const calc = new Calculator();<br>
&nbsp;&nbsp;expect(calc.add(2, 3)).toBe(5);<br>
});<br><br>
// Result: ❌ ReferenceError: Calculator is not defined
            </code>
        `,
        green: `
            <strong>✅ Step 2: Make Test Pass</strong><br>
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0;">
// Minimal implementation<br>
class Calculator {<br>
&nbsp;&nbsp;add(a, b) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;return a + b;<br>
&nbsp;&nbsp;}<br>
}<br><br>
// Result: ✅ Test passes!
            </code>
        `,
        refactor: `
            <strong>🛠️ Step 3: Refactor</strong><br>
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0;">
// Improved implementation<br>
class Calculator {<br>
&nbsp;&nbsp;add(a, b) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;// Add input validation<br>
&nbsp;&nbsp;&nbsp;&nbsp;if (typeof a !== 'number' || typeof b !== 'number') {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw new Error('Both arguments must be numbers');<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;return a + b;<br>
&nbsp;&nbsp;}<br>
}<br><br>
// Result: ✅ Tests still pass, code is more robust
            </code>
        `
    };
    
    return examples[step] || examples.red;
}

function clearTDDLog() {
    try {
        const element = document.getElementById('tddResult');
        if (element) {
            element.innerHTML = '<em class="text-muted">TDD demo log cleared...</em>';
        }
    } catch (error) {
        console.error('clearTDDLog error:', error);
    }
}

// 3. Testing Framework Overview
function runFrameworkDemo() {
    console.log('🛠️ Running testing framework demo...');
    
    try {
        const framework = document.getElementById('frameworkType')?.value || 'jest';
        
        const output = `
            <div style="background: linear-gradient(135deg, #6f42c1, #5a32a3); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🛠️ TESTING FRAMEWORKS OVERVIEW</strong>
            </div>
            
            <div style="background: #f3e5f5; padding: 12px; border-left: 4px solid #6f42c1; margin: 10px 0;">
                <strong>🎯 Framework: ${framework.toUpperCase()}</strong><br><br>
                ${getFrameworkInfo(framework)}
            </div>
            
            <div style="background: #e8f5e8; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>📝 Example Test Syntax:</strong><br><br>
                ${getFrameworkSyntax(framework)}
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <strong>💡 Choosing a Testing Framework:</strong><br>
                • Consider project requirements and complexity<br>
                • Look at community support and documentation<br>
                • Evaluate integration with your build tools<br>
                • Consider learning curve and team familiarity
            </div>
        `;
        
        showResult('frameworkResult', output);
        
    } catch (error) {
        console.error('runFrameworkDemo error:', error);
        showResult('frameworkResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function getFrameworkInfo(framework) {
    const frameworks = {
        jest: `
            <strong>🃏 Jest - Popular JavaScript Testing Framework</strong><br><br>
            <strong>Features:</strong><br>
            • Zero configuration setup<br>
            • Built-in assertions and mocking<br>
            • Snapshot testing<br>
            • Code coverage reports<br>
            • Watch mode for development<br><br>
            
            <strong>Best For:</strong> React apps, Node.js projects, general JavaScript testing<br>
            <strong>Created By:</strong> Facebook (Meta)
        `,
        mocha: `
            <strong>☕ Mocha - Flexible Testing Framework</strong><br><br>
            <strong>Features:</strong><br>
            • Highly configurable<br>
            • Multiple assertion libraries support<br>
            • Async testing support<br>
            • Browser and Node.js support<br>
            • Extensible with plugins<br><br>
            
            <strong>Best For:</strong> Projects needing flexibility, Node.js applications<br>
            <strong>Usually Paired With:</strong> Chai (assertions), Sinon (mocking)
        `,
        jasmine: `
            <strong>🌸 Jasmine - Behavior-Driven Development</strong><br><br>
            <strong>Features:</strong><br>
            • BDD-style syntax<br>
            • Built-in assertions (expectations)<br>
            • Spies for mocking<br>
            • No external dependencies<br>
            • Clean, readable syntax<br><br>
            
            <strong>Best For:</strong> BDD approach, Angular applications, standalone testing<br>
            <strong>Philosophy:</strong> Batteries included, minimal setup
        `,
        vitest: `
            <strong>⚡ Vitest - Modern Testing Framework</strong><br><br>
            <strong>Features:</strong><br>
            • Vite-native testing framework<br>
            • Jest-compatible API<br>
            • Fast execution with Vite's bundling<br>
            • TypeScript support<br>
            • Native ES modules support<br><br>
            
            <strong>Best For:</strong> Vite projects, modern JavaScript/TypeScript apps<br>
            <strong>Advantage:</strong> Ultra-fast with hot module replacement
        `
    };
    
    return frameworks[framework] || frameworks.jest;
}

function getFrameworkSyntax(framework) {
    const syntaxExamples = {
        jest: `
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; font-size: 12px;">
// Jest Example<br>
describe('Math Utils', () => {<br>
&nbsp;&nbsp;test('should add two numbers', () => {<br>
&nbsp;&nbsp;&nbsp;&nbsp;expect(add(2, 3)).toBe(5);<br>
&nbsp;&nbsp;});<br>
&nbsp;&nbsp;<br>
&nbsp;&nbsp;test('should handle async operations', async () => {<br>
&nbsp;&nbsp;&nbsp;&nbsp;const result = await fetchData();<br>
&nbsp;&nbsp;&nbsp;&nbsp;expect(result).toHaveProperty('data');<br>
&nbsp;&nbsp;});<br>
});<br>
<br>
// Mocking<br>
const mockFn = jest.fn();<br>
mockFn.mockReturnValue(42);
            </code>
        `,
        mocha: `
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; font-size: 12px;">
// Mocha + Chai Example<br>
const { expect } = require('chai');<br>
<br>
describe('Math Utils', function() {<br>
&nbsp;&nbsp;it('should add two numbers', function() {<br>
&nbsp;&nbsp;&nbsp;&nbsp;expect(add(2, 3)).to.equal(5);<br>
&nbsp;&nbsp;});<br>
&nbsp;&nbsp;<br>
&nbsp;&nbsp;it('should handle promises', function() {<br>
&nbsp;&nbsp;&nbsp;&nbsp;return fetchData().then(result => {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;expect(result).to.have.property('data');<br>
&nbsp;&nbsp;&nbsp;&nbsp;});<br>
&nbsp;&nbsp;});<br>
});
            </code>
        `,
        jasmine: `
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; font-size: 12px;">
// Jasmine Example<br>
describe('Math Utils', function() {<br>
&nbsp;&nbsp;it('should add two numbers', function() {<br>
&nbsp;&nbsp;&nbsp;&nbsp;expect(add(2, 3)).toBe(5);<br>
&nbsp;&nbsp;});<br>
&nbsp;&nbsp;<br>
&nbsp;&nbsp;it('should spy on functions', function() {<br>
&nbsp;&nbsp;&nbsp;&nbsp;spyOn(console, 'log');<br>
&nbsp;&nbsp;&nbsp;&nbsp;logMessage('test');<br>
&nbsp;&nbsp;&nbsp;&nbsp;expect(console.log).toHaveBeenCalledWith('test');<br>
&nbsp;&nbsp;});<br>
});
            </code>
        `,
        vitest: `
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; font-size: 12px;">
// Vitest Example (Jest-compatible)<br>
import { describe, it, expect, vi } from 'vitest';<br>
<br>
describe('Math Utils', () => {<br>
&nbsp;&nbsp;it('should add two numbers', () => {<br>
&nbsp;&nbsp;&nbsp;&nbsp;expect(add(2, 3)).toBe(5);<br>
&nbsp;&nbsp;});<br>
&nbsp;&nbsp;<br>
&nbsp;&nbsp;it('should mock functions', () => {<br>
&nbsp;&nbsp;&nbsp;&nbsp;const mockFn = vi.fn(() => 42);<br>
&nbsp;&nbsp;&nbsp;&nbsp;expect(mockFn()).toBe(42);<br>
&nbsp;&nbsp;});<br>
});
            </code>
        `
    };
    
    return syntaxExamples[framework] || syntaxExamples.jest;
}

function clearFrameworkLog() {
    try {
        const element = document.getElementById('frameworkResult');
        if (element) {
            element.innerHTML = '<em class="text-muted">Framework demo log cleared...</em>';
        }
    } catch (error) {
        console.error('clearFrameworkLog error:', error);
    }
}

// 4. Mocking and Spies Demo
function runMockingDemo() {
    console.log('🎭 Running mocking demo...');
    
    try {
        const mockType = document.getElementById('mockType')?.value || 'function';
        
        const output = `
            <div style="background: linear-gradient(135deg, #fd7e14, #e8590c); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🎭 MOCKING AND SPIES DEMO</strong>
            </div>
            
            <div style="background: #fff3e0; padding: 12px; border-left: 4px solid #fd7e14; margin: 10px 0;">
                <strong>🎯 Mock Type: ${mockType.charAt(0).toUpperCase() + mockType.slice(1)}</strong><br><br>
                ${getMockingExample(mockType)}
            </div>
            
            <div style="background: #d4edda; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>📋 Practical Example:</strong><br><br>
                ${getMockingPracticalExample(mockType)}
            </div>
            
            <div style="background: #e3f2fd; padding: 10px; border-left: 4px solid #2196f3; margin: 10px 0;">
                <strong>💡 When to Use Mocking:</strong><br>
                • External API calls<br>
                • Database operations<br>
                • File system operations<br>
                • Time-dependent functions<br>
                • Complex dependencies
            </div>
        `;
        
        showResult('mockingResult', output);
        
        // Demonstrate actual mocking
        demonstrateActualMocking(mockType);
        
    } catch (error) {
        console.error('runMockingDemo error:', error);
        showResult('mockingResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function getMockingExample(mockType) {
    const examples = {
        function: `
            <strong>🔧 Function Mocking</strong><br><br>
            Function mocks replace real functions with controllable fake versions:<br><br>
            
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0;">
// Original function<br>
function fetchUserData(id) {<br>
&nbsp;&nbsp;return fetch(\`/api/users/\${id}\`);<br>
}<br>
<br>
// Mock the function<br>
const mockFetch = jest.fn();<br>
mockFetch.mockResolvedValue({<br>
&nbsp;&nbsp;json: () => Promise.resolve({ id: 1, name: 'John' })<br>
});<br>
<br>
// Test with mock<br>
expect(mockFetch).toHaveBeenCalledWith('/api/users/1');
            </code>
        `,
        api: `
            <strong>🌐 API Mocking</strong><br><br>
            API mocks simulate external service responses:<br><br>
            
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0;">
// Mock axios or fetch<br>
jest.mock('axios');<br>
const mockedAxios = axios as jest.Mocked&lt;typeof axios&gt;;<br>
<br>
// Setup mock response<br>
mockedAxios.get.mockResolvedValue({<br>
&nbsp;&nbsp;data: { users: [{ id: 1, name: 'John' }] },<br>
&nbsp;&nbsp;status: 200<br>
});<br>
<br>
// Test API-dependent code without real API calls
            </code>
        `,
        timer: `
            <strong>⏰ Timer Mocking</strong><br><br>
            Timer mocks control time-dependent code:<br><br>
            
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0;">
// Mock timers<br>
jest.useFakeTimers();<br>
<br>
// Function that uses setTimeout<br>
function delayedAction(callback) {<br>
&nbsp;&nbsp;setTimeout(callback, 1000);<br>
}<br>
<br>
// Test without waiting<br>
const callback = jest.fn();<br>
delayedAction(callback);<br>
jest.advanceTimersByTime(1000);<br>
expect(callback).toHaveBeenCalled();
            </code>
        `,
        module: `
            <strong>📦 Module Mocking</strong><br><br>
            Module mocks replace entire modules:<br><br>
            
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0;">
// Mock entire module<br>
jest.mock('./database', () => ({<br>
&nbsp;&nbsp;connect: jest.fn(),<br>
&nbsp;&nbsp;query: jest.fn(),<br>
&nbsp;&nbsp;close: jest.fn()<br>
}));<br>
<br>
// Or mock specific exports<br>
jest.mock('./utils', () => ({<br>
&nbsp;&nbsp;...jest.requireActual('./utils'),<br>
&nbsp;&nbsp;expensiveOperation: jest.fn(() => 'mocked result')<br>
}));
            </code>
        `
    };
    
    return examples[mockType] || examples.function;
}

function getMockingPracticalExample(mockType) {
    const examples = {
        function: `
            <strong>Practical Function Mock Example:</strong><br>
            Testing a user registration function that sends emails:
        `,
        api: `
            <strong>Practical API Mock Example:</strong><br>
            Testing a weather app without calling real weather API:
        `,
        timer: `
            <strong>Practical Timer Mock Example:</strong><br>
            Testing a countdown component without waiting:
        `,
        module: `
            <strong>Practical Module Mock Example:</strong><br>
            Testing authentication without real database calls:
        `
    };
    
    return examples[mockType] || examples.function;
}

function demonstrateActualMocking(mockType) {
    console.log(`🎭 Demonstrating ${mockType} mocking...`);
    
    // Simple mock implementation for demonstration
    const mockImplementations = {
        function: () => {
            const mockFunction = function(...args) {
                mockFunction.calls.push(args);
                return mockFunction.returnValue;
            };
            mockFunction.calls = [];
            mockFunction.returnValue = undefined;
            mockFunction.mockReturnValue = (value) => {
                mockFunction.returnValue = value;
                return mockFunction;
            };
            mockFunction.toHaveBeenCalled = () => mockFunction.calls.length > 0;
            mockFunction.toHaveBeenCalledWith = (...args) => {
                return mockFunction.calls.some(call => 
                    JSON.stringify(call) === JSON.stringify(args)
                );
            };
            
            return mockFunction;
        },
        api: () => {
            const mockResponse = {
                data: { message: 'Mocked API response', status: 'success' },
                status: 200
            };
            return Promise.resolve(mockResponse);
        }
    };
    
    if (mockImplementations[mockType]) {
        const mock = mockImplementations[mockType]();
        console.log(`Mock created for ${mockType}:`, mock);
    }
}

function clearMockingLog() {
    try {
        const element = document.getElementById('mockingResult');
        if (element) {
            element.innerHTML = '<em class="text-muted">Mocking demo log cleared...</em>';
        }
    } catch (error) {
        console.error('clearMockingLog error:', error);
    }
}

// 5. Best Practices Demo
function runBestPracticesDemo() {
    console.log('⭐ Running testing best practices demo...');
    
    try {
        const practiceType = document.getElementById('practiceCategory')?.value || 'naming';
        
        const output = `
            <div style="background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <strong>⭐ TESTING BEST PRACTICES</strong>
            </div>
            
            <div style="background: #e3f2fd; padding: 12px; border-left: 4px solid #2196f3; margin: 10px 0;">
                <strong>🎯 Practice Category: ${practiceType.charAt(0).toUpperCase() + practiceType.slice(1)}</strong><br><br>
                ${getBestPracticeInfo(practiceType)}
            </div>
            
            <div style="background: #d4edda; padding: 12px; border-left: 4px solid #28a745; margin: 10px 0;">
                <strong>📝 Code Examples:</strong><br><br>
                ${getBestPracticeExamples(practiceType)}
            </div>
            
            <div style="background: #fff3e0; padding: 10px; border-left: 4px solid #ff9800; margin: 10px 0;">
                <strong>✅ Universal Testing Principles:</strong><br>
                • Write tests that are easy to read and understand<br>
                • Keep tests independent and isolated<br>
                • Test behavior, not implementation<br>
                • Maintain tests like production code<br>
                • Use descriptive test names and clear assertions
            </div>
        `;
        
        showResult('bestPracticesResult', output);
        
    } catch (error) {
        console.error('runBestPracticesDemo error:', error);
        showResult('bestPracticesResult', `<div style="color: red;">❌ Error: ${error.message}</div>`);
    }
}

function getBestPracticeInfo(practiceType) {
    const practices = {
        naming: `
            <strong>📝 Test Naming Conventions</strong><br><br>
            
            <strong>Good test names should:</strong><br>
            • Describe what is being tested<br>
            • Include the expected outcome<br>
            • Be readable as specifications<br>
            • Follow consistent patterns<br><br>
            
            <strong>Common patterns:</strong><br>
            • "should [expected behavior] when [condition]"<br>
            • "[method/function] should [behavior]"<br>
            • "given [context] when [action] then [outcome]"
        `,
        structure: `
            <strong>🏗️ Test Structure (AAA Pattern)</strong><br><br>
            
            <strong>Arrange-Act-Assert pattern:</strong><br>
            • <strong>Arrange:</strong> Set up test data and conditions<br>
            • <strong>Act:</strong> Execute the function/method being tested<br>
            • <strong>Assert:</strong> Verify the expected outcome<br><br>
            
            This structure makes tests predictable and easy to follow.
        `,
        coverage: `
            <strong>📊 Code Coverage Guidelines</strong><br><br>
            
            <strong>Coverage types:</strong><br>
            • <strong>Line coverage:</strong> Percentage of code lines executed<br>
            • <strong>Branch coverage:</strong> Percentage of branches taken<br>
            • <strong>Function coverage:</strong> Percentage of functions called<br><br>
            
            <strong>Best practices:</strong><br>
            • Aim for high coverage but focus on quality<br>
            • 80%+ coverage is generally good<br>
            • Don't chase 100% coverage blindly
        `,
        isolation: `
            <strong>🔒 Test Isolation Principles</strong><br><br>
            
            <strong>Each test should be:</strong><br>
            • Independent of other tests<br>
            • Able to run in any order<br>
            • Not dependent on external state<br>
            • Self-contained and predictable<br><br>
            
            <strong>Techniques:</strong><br>
            • Use setup/teardown methods<br>
            • Create fresh test data for each test<br>
            • Mock external dependencies
        `
    };
    
    return practices[practiceType] || practices.naming;
}

function getBestPracticeExamples(practiceType) {
    const examples = {
        naming: `
            <strong>❌ Poor Test Names:</strong><br>
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 5px 0;">
test('user test', () => { ... });<br>
test('it works', () => { ... });<br>
test('calculate', () => { ... });
            </code><br>
            
            <strong>✅ Good Test Names:</strong><br>
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 5px 0;">
test('should return user data when valid ID provided', () => { ... });<br>
test('should throw error when email is invalid', () => { ... });<br>
test('should calculate total price including tax', () => { ... });
            </code>
        `,
        structure: `
            <strong>✅ AAA Pattern Example:</strong><br>
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0;">
test('should calculate discount correctly', () => {<br>
&nbsp;&nbsp;// Arrange<br>
&nbsp;&nbsp;const originalPrice = 100;<br>
&nbsp;&nbsp;const discountPercent = 20;<br>
&nbsp;&nbsp;const calculator = new PriceCalculator();<br>
&nbsp;&nbsp;<br>
&nbsp;&nbsp;// Act<br>
&nbsp;&nbsp;const finalPrice = calculator.applyDiscount(originalPrice, discountPercent);<br>
&nbsp;&nbsp;<br>
&nbsp;&nbsp;// Assert<br>
&nbsp;&nbsp;expect(finalPrice).toBe(80);<br>
});
            </code>
        `,
        coverage: `
            <strong>📊 Coverage Report Example:</strong><br>
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0;">
// Jest coverage output<br>
 PASS  ./calculator.test.js<br>
----------|---------|----------|---------|---------|<br>
File      | % Stmts | % Branch | % Funcs | % Lines |<br>
----------|---------|----------|---------|---------|<br>
calculator| 95.24   | 87.50    | 100     | 95.24   |<br>
----------|---------|----------|---------|---------|<br>
<br>
// Focus on testing critical paths and edge cases
            </code>
        `,
        isolation: `
            <strong>🔒 Test Isolation Example:</strong><br>
            <code style="background: #fff; padding: 8px; border-radius: 4px; display: block; margin: 10px 0;">
describe('User Service', () => {<br>
&nbsp;&nbsp;let userService;<br>
&nbsp;&nbsp;let mockDatabase;<br>
&nbsp;&nbsp;<br>
&nbsp;&nbsp;beforeEach(() => {<br>
&nbsp;&nbsp;&nbsp;&nbsp;// Fresh setup for each test<br>
&nbsp;&nbsp;&nbsp;&nbsp;mockDatabase = new MockDatabase();<br>
&nbsp;&nbsp;&nbsp;&nbsp;userService = new UserService(mockDatabase);<br>
&nbsp;&nbsp;});<br>
&nbsp;&nbsp;<br>
&nbsp;&nbsp;test('should create user', () => {<br>
&nbsp;&nbsp;&nbsp;&nbsp;// This test won't affect others<br>
&nbsp;&nbsp;});<br>
});
            </code>
        `
    };
    
    return examples[practiceType] || examples.naming;
}

function runTestingQuiz() {
    console.log('🧩 Running testing quiz...');
    
    const questions = [
        {
            q: "What does TDD stand for?",
            options: ["Test-Driven Design", "Test-Driven Development", "Test-Data-Development", "Time-Driven Development"],
            correct: "Test-Driven Development"
        },
        {
            q: "What is the AAA pattern in testing?",
            options: ["Always-Assert-All", "Arrange-Act-Assert", "Assert-All-Always", "Act-Assert-Arrange"],
            correct: "Arrange-Act-Assert"
        },
        {
            q: "When should you use mocks?",
            options: ["Never", "Always", "For external dependencies", "Only for databases"],
            correct: "For external dependencies"
        },
        {
            q: "What is a good code coverage target?",
            options: ["100%", "50%", "80%+", "It doesn't matter"],
            correct: "80%+"
        }
    ];
    
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    
    const output = `
        <div style="background: linear-gradient(135deg, #e74c3c, #c0392b); color: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
            <strong>🧩 TESTING KNOWLEDGE QUIZ</strong>
        </div>
        
        <div style="background: #fadbd8; padding: 12px; border-left: 4px solid #e74c3c; margin: 10px 0;">
            <strong>❓ Question:</strong><br>
            ${randomQuestion.q}<br><br>
            
            <strong>Options:</strong><br>
            ${randomQuestion.options.map((opt, i) => 
                `${i + 1}. ${opt}`
            ).join('<br>')}<br><br>
            
            <strong>💡 Answer:</strong> ${randomQuestion.correct}<br>
            <em>Understanding these concepts is essential for effective testing!</em>
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
    console.log('🚀 Module 9: Testing JavaScript Code Demo Initialized!');
    
    try {
        // Test that critical elements exist
        const criticalElements = ['unitTestResult', 'tddResult', 'frameworkResult', 'mockingResult', 'bestPracticesResult'];
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
            const unitTestResult = document.getElementById('unitTestResult');
            if (unitTestResult) {
                showResult('unitTestResult', `
                    <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #17a2b8, #138496); color: white; border-radius: 8px;">
                        <strong>🧪 Welcome to JavaScript Testing Demo!</strong><br>
                        <p style="margin: 10px 0;">Learn to write reliable tests for your JavaScript code.</p>
                        <small><em>Start with Unit Testing to see how to test functions and code!</em></small>
                    </div>
                `);
            }
            
        }, 1000);
        
        console.log('✅ Module 9 Demo Ready!');
        
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
safeGlobalFunction('runUnitTestDemo', runUnitTestDemo);
safeGlobalFunction('runCustomTest', runCustomTest);
safeGlobalFunction('clearUnitTestLog', clearUnitTestLog);
safeGlobalFunction('runTDDDemo', runTDDDemo);
safeGlobalFunction('clearTDDLog', clearTDDLog);
safeGlobalFunction('runFrameworkDemo', runFrameworkDemo);
safeGlobalFunction('clearFrameworkLog', clearFrameworkLog);
safeGlobalFunction('runMockingDemo', runMockingDemo);
safeGlobalFunction('clearMockingLog', clearMockingLog);
safeGlobalFunction('runBestPracticesDemo', runBestPracticesDemo);
safeGlobalFunction('runTestingQuiz', runTestingQuiz);
safeGlobalFunction('clearBestPracticesLog', clearBestPracticesLog);

console.log('🎯 Module 9: Testing JavaScript Code Demo Loaded Successfully!');