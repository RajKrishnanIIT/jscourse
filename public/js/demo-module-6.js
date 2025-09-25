console.log('🚀 Module 6: Asynchronous JavaScript Demo Loading...');

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

// Utility function to log messages with timestamps
function logMessage(elementId, message, type = 'info') {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const timestamp = new Date().toLocaleTimeString();
    const colors = {
        info: '#17a2b8',
        success: '#28a745',
        warning: '#ffc107',
        error: '#dc3545',
        primary: '#007bff'
    };
    
    const logEntry = `
        <div style="background: ${colors[type]}20; border-left: 3px solid ${colors[type]}; padding: 8px; margin: 4px 0; border-radius: 4px;">
            <small><strong>[${timestamp}]</strong></small> ${message}
        </div>
    `;
    
    // If element is empty or has placeholder text, replace it
    if (element.innerHTML.includes('text-muted') || element.innerHTML.trim() === '') {
        element.innerHTML = logEntry;
    } else {
        element.innerHTML = logEntry + element.innerHTML;
    }
    
    // Keep only last 10 entries
    const entries = element.querySelectorAll('div');
    if (entries.length > 10) {
        for (let i = 10; i < entries.length; i++) {
            entries[i].remove();
        }
    }
}

// Quick test function
function quickTest() {
    console.log('🧪 Quick test running...');
    
    const result = document.getElementById('quickTestResult');
    if (result) {
        result.innerHTML = '<span style="color: green; font-weight: bold;">✅ Async JavaScript ready to demonstrate!</span>';
        result.style.fontSize = '16px';
        console.log('✅ Quick test passed');
    } else {
        alert('Quick test element not found!');
        console.error('quickTestResult element not found');
    }
}

// 1. Callback Demos
function runCallbackDemo() {
    console.log('📞 Running callback demo...');
    
    try {
        const delay = parseInt(document.getElementById('callbackDelay').value) || 3;
        const message = document.getElementById('callbackMessage').value.trim() || 'Hello from callback!';
        
        logMessage('callbackResult', `🚀 <strong>Starting callback demo...</strong> (${delay} second delay)`, 'primary');
        logMessage('callbackResult', `⏳ Calling processWithCallback("${message}", ${delay}, callback)`, 'info');
        
        // Simulate async operation with callback
        processWithCallback(message, delay, function(result) {
            logMessage('callbackResult', `✅ <strong>Callback executed!</strong> Received: "${result}"`, 'success');
            logMessage('callbackResult', `💡 This callback was executed after ${delay} seconds`, 'info');
        });
        
        logMessage('callbackResult', `📝 Code continues immediately (non-blocking)`, 'warning');
        
    } catch (error) {
        logMessage('callbackResult', `❌ Error: ${error.message}`, 'error');
    }
}

function processWithCallback(message, delay, callback) {
    logMessage('callbackResult', `⚙️ processWithCallback() started, setting ${delay}s timer...`, 'info');
    
    setTimeout(() => {
        logMessage('callbackResult', `⏰ Timer completed! Calling callback function...`, 'warning');
        callback(message);
    }, delay * 1000);
}

function runCallbackHellDemo() {
    console.log('😈 Running callback hell demo...');
    
    logMessage('callbackResult', `😈 <strong>Callback Hell Demo</strong> - Notice the nesting!`, 'warning');
    
    // Simulate nested callbacks (callback hell)
    getData('Step 1', function(result1) {
        logMessage('callbackResult', `📄 Got result 1: "${result1}"`, 'info');
        
        getData('Step 2', function(result2) {
            logMessage('callbackResult', `📄 Got result 2: "${result2}"`, 'info');
            
            getData('Step 3', function(result3) {
                logMessage('callbackResult', `📄 Got result 3: "${result3}"`, 'info');
                logMessage('callbackResult', `🎯 <strong>Final result:</strong> All steps completed!`, 'success');
                logMessage('callbackResult', `⚠️ Notice how callbacks nest deeper and deeper (Callback Hell!)`, 'warning');
            });
        });
    });
}

function getData(step, callback) {
    setTimeout(() => {
        callback(`Data from ${step}`);
    }, 1000);
}

function clearCallbackLog() {
    document.getElementById('callbackResult').innerHTML = '<em class="text-muted">Callback log cleared. Run a demo to see output...</em>';
}

// 2. Promise Demos
function runPromiseDemo() {
    console.log('🤝 Running promise demo...');
    
    try {
        const delay = parseInt(document.getElementById('promiseDelay').value) || 2;
        const successValue = document.getElementById('promiseSuccess').value;
        
        let shouldResolve;
        if (successValue === 'random') {
            shouldResolve = Math.random() > 0.5;
            logMessage('promiseResult', `🎲 <strong>Random outcome chosen:</strong> ${shouldResolve ? 'Success' : 'Failure'}`, 'info');
        } else {
            shouldResolve = successValue === 'true';
        }
        
        logMessage('promiseResult', `🤝 <strong>Starting Promise demo...</strong> (${delay}s, ${shouldResolve ? 'will resolve' : 'will reject'})`, 'primary');
        
        const promise = createPromise(delay, shouldResolve);
        
        logMessage('promiseResult', `⚙️ Promise created and started...`, 'info');
        logMessage('promiseResult', `📝 Code continues immediately (Promise is pending)`, 'warning');
        
        promise
            .then(result => {
                logMessage('promiseResult', `✅ <strong>Promise resolved!</strong> Result: "${result}"`, 'success');
                return 'Chained result';
            })
            .then(chainedResult => {
                logMessage('promiseResult', `🔗 <strong>Promise chained!</strong> Next result: "${chainedResult}"`, 'info');
            })
            .catch(error => {
                logMessage('promiseResult', `❌ <strong>Promise rejected!</strong> Error: "${error.message}"`, 'error');
            })
            .finally(() => {
                logMessage('promiseResult', `🏁 <strong>Promise completed</strong> (finally block executed)`, 'info');
            });
            
    } catch (error) {
        logMessage('promiseResult', `❌ Error: ${error.message}`, 'error');
    }
}

function createPromise(delay, shouldResolve) {
    return new Promise((resolve, reject) => {
        logMessage('promiseResult', `⏳ Promise executor running, setting ${delay}s timer...`, 'info');
        
        setTimeout(() => {
            if (shouldResolve) {
                resolve('Promise resolved successfully! 🎉');
            } else {
                reject(new Error('Promise rejected with error 💥'));
            }
        }, delay * 1000);
    });
}

function runPromiseChainDemo() {
    console.log('🔗 Running promise chain demo...');
    
    logMessage('promiseResult', `🔗 <strong>Promise Chain Demo</strong> - Multiple .then() calls`, 'primary');
    
    createPromise(1, true)
        .then(result => {
            logMessage('promiseResult', `1️⃣ First .then(): "${result}"`, 'success');
            return 'Modified result';
        })
        .then(result => {
            logMessage('promiseResult', `2️⃣ Second .then(): "${result}"`, 'success');
            return result.toUpperCase();
        })
        .then(result => {
            logMessage('promiseResult', `3️⃣ Third .then(): "${result}"`, 'success');
            logMessage('promiseResult', `🎯 <strong>Chain completed!</strong> No callback nesting!`, 'info');
        })
        .catch(error => {
            logMessage('promiseResult', `❌ Chain error: ${error.message}`, 'error');
        });
}

function runPromiseAllDemo() {
    console.log('🔄 Running Promise.all demo...');
    
    logMessage('promiseResult', `🔄 <strong>Promise.all Demo</strong> - Running multiple promises in parallel`, 'primary');
    
    const promise1 = createPromise(1, true);
    const promise2 = createPromise(2, true);
    const promise3 = createPromise(1.5, true);
    
    logMessage('promiseResult', `🚀 Started 3 promises: 1s, 2s, and 1.5s delays`, 'info');
    logMessage('promiseResult', `⏳ Waiting for ALL promises to complete...`, 'warning');
    
    Promise.all([promise1, promise2, promise3])
        .then(results => {
            logMessage('promiseResult', `✅ <strong>Promise.all completed!</strong> All resolved:`, 'success');
            results.forEach((result, index) => {
                logMessage('promiseResult', `   ${index + 1}. "${result}"`, 'info');
            });
            logMessage('promiseResult', `⚡ Total time: ~2s (longest promise duration)`, 'info');
        })
        .catch(error => {
            logMessage('promiseResult', `❌ Promise.all failed: ${error.message}`, 'error');
        });
}

function clearPromiseLog() {
    document.getElementById('promiseResult').innerHTML = '<em class="text-muted">Promise log cleared. Run a demo to see output...</em>';
}

// 3. Async/Await Demos
async function runAsyncAwaitDemo() {
    console.log('⏳ Running async/await demo...');
    
    try {
        const steps = parseInt(document.getElementById('asyncSteps').value) || 3;
        const delay = parseFloat(document.getElementById('stepDelay').value) || 1;
        
        logMessage('asyncResult', `⏳ <strong>Async/Await Demo</strong> - ${steps} steps, ${delay}s each`, 'primary');
        logMessage('asyncResult', `🚀 Starting processSteps(${steps}, ${delay})...`, 'info');
        
        const result = await processSteps(steps, delay);
        
        logMessage('asyncResult', `🎉 <strong>Async function completed!</strong> Result: "${result}"`, 'success');
        logMessage('asyncResult', `💡 Notice how this looks like synchronous code!`, 'info');
        
    } catch (error) {
        logMessage('asyncResult', `❌ Async function error: ${error.message}`, 'error');
    }
}

async function processSteps(numSteps, delay) {
    logMessage('asyncResult', `⚙️ processSteps() started with ${numSteps} steps...`, 'info');
    
    for (let i = 1; i <= numSteps; i++) {
        logMessage('asyncResult', `📍 Step ${i} starting...`, 'warning');
        
        // Wait for each step to complete
        const result = await waitForStep(i, delay);
        
        logMessage('asyncResult', `✅ Step ${i} completed: "${result}"`, 'success');
    }
    
    logMessage('asyncResult', `🏁 All ${numSteps} steps completed sequentially!`, 'success');
    return `Process finished with ${numSteps} steps`;
}

function waitForStep(step, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Step ${step} result`);
        }, delay * 1000);
    });
}

async function runAsyncErrorDemo() {
    console.log('💥 Running async error demo...');
    
    logMessage('asyncResult', `💥 <strong>Async Error Handling Demo</strong>`, 'warning');
    
    try {
        logMessage('asyncResult', `🚀 Calling async function that will fail...`, 'info');
        
        const result = await simulateAsyncError();
        
        logMessage('asyncResult', `✅ Result: ${result}`, 'success');
        
    } catch (error) {
        logMessage('asyncResult', `❌ <strong>Caught error:</strong> "${error.message}"`, 'error');
        logMessage('asyncResult', `💡 Error caught with try/catch block!`, 'info');
    } finally {
        logMessage('asyncResult', `🏁 Finally block executed (cleanup code)`, 'info');
    }
}

async function simulateAsyncError() {
    logMessage('asyncResult', `⏳ Simulating async operation that will fail...`, 'warning');
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    throw new Error('Simulated async error occurred!');
}

async function runParallelAsyncDemo() {
    console.log('⚡ Running parallel async demo...');
    
    logMessage('asyncResult', `⚡ <strong>Parallel Async Demo</strong> - Running tasks concurrently`, 'primary');
    
    const startTime = Date.now();
    
    // Start all tasks at the same time (parallel execution)
    const task1 = waitForStep('A', 2);
    const task2 = waitForStep('B', 1.5);
    const task3 = waitForStep('C', 1);
    
    logMessage('asyncResult', `🚀 Started 3 parallel tasks: 2s, 1.5s, 1s`, 'info');
    
    try {
        // Wait for all tasks to complete
        const results = await Promise.all([task1, task2, task3]);
        
        const endTime = Date.now();
        const totalTime = ((endTime - startTime) / 1000).toFixed(1);
        
        logMessage('asyncResult', `✅ <strong>All tasks completed!</strong>`, 'success');
        results.forEach((result, index) => {
            logMessage('asyncResult', `   Task ${index + 1}: "${result}"`, 'info');
        });
        logMessage('asyncResult', `⚡ Total time: ${totalTime}s (fastest possible: ~2s)`, 'info');
        logMessage('asyncResult', `💡 Much faster than sequential execution!`, 'success');
        
    } catch (error) {
        logMessage('asyncResult', `❌ Parallel execution error: ${error.message}`, 'error');
    }
}

function clearAsyncLog() {
    document.getElementById('asyncResult').innerHTML = '<em class="text-muted">Async/await log cleared. Run a demo to see output...</em>';
}

// 4. Fetch API Demos
async function runFetchDemo() {
    console.log('🌐 Running fetch demo...');
    
    try {
        const endpoint = document.getElementById('apiEndpoint').value;
        const limit = parseInt(document.getElementById('fetchLimit').value) || 3;
        
        logMessage('fetchResult', `🌐 <strong>Fetch API Demo</strong> - ${endpoint} endpoint`, 'primary');
        logMessage('fetchResult', `🚀 Starting fetch request...`, 'info');
        
        const url = getFetchUrl(endpoint, limit);
        logMessage('fetchResult', `📡 Fetching: ${url}`, 'info');
        
        const data = await fetchData(url);
        
        logMessage('fetchResult', `✅ <strong>Data received!</strong> ${Array.isArray(data) ? data.length : 1} items`, 'success');
        
        // Display the data
        displayFetchedData(data, endpoint);
        
    } catch (error) {
        logMessage('fetchResult', `❌ Fetch error: ${error.message}`, 'error');
        logMessage('fetchResult', `💡 Check network connection and API availability`, 'warning');
    }
}

function getFetchUrl(endpoint, limit) {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    
    switch (endpoint) {
        case 'users':
            return `${baseUrl}/users?_limit=${limit}`;
        case 'posts':
            return `${baseUrl}/posts?_limit=${limit}`;
        case 'todos':
            return `${baseUrl}/todos?_limit=${limit}`;
        case 'random-user':
            return `https://randomuser.me/api/?results=${limit}`;
        case 'fake-delay':
            // Simulate slow API
            return `${baseUrl}/posts/1`;
        default:
            return `${baseUrl}/posts?_limit=${limit}`;
    }
}

async function fetchData(url) {
    const startTime = Date.now();
    
    // Add artificial delay for demo purposes
    if (url.includes('fake-delay')) {
        logMessage('fetchResult', `⏳ Simulating slow network (3s delay)...`, 'warning');
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
    
    const response = await fetch(url);
    
    logMessage('fetchResult', `📨 Response received: ${response.status} ${response.statusText}`, 'info');
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(1);
    logMessage('fetchResult', `⏱️ Request completed in ${duration}s`, 'info');
    
    return data;
}

function displayFetchedData(data, endpoint) {
    let displayData = Array.isArray(data) ? data : [data];
    
    // For random user API, extract the results
    if (data.results) {
        displayData = data.results;
    }
    
    let html = `
        <div style="background: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px; margin: 10px 0;">
            <strong>📊 Fetched Data (${endpoint}):</strong>
        </div>
    `;
    
    displayData.slice(0, 3).forEach((item, index) => {
        let itemDisplay = '';
        
        switch (endpoint) {
            case 'users':
                itemDisplay = `<strong>${item.name}</strong> (${item.email}) - ${item.company?.name}`;
                break;
            case 'posts':
                itemDisplay = `<strong>${item.title}</strong><br><small>${item.body?.slice(0, 100)}...</small>`;
                break;
            case 'todos':
                itemDisplay = `<strong>${item.title}</strong> - ${item.completed ? '✅ Complete' : '⏳ Pending'}`;
                break;
            case 'random-user':
                itemDisplay = `<strong>${item.name?.first} ${item.name?.last}</strong> (${item.email}) - ${item.location?.city}`;
                break;
            default:
                itemDisplay = JSON.stringify(item).slice(0, 100) + '...';
        }
        
        html += `
            <div style="background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 4px; padding: 10px; margin: 5px 0;">
                ${index + 1}. ${itemDisplay}
            </div>
        `;
    });
    
    logMessage('fetchResult', html, 'success');
}

async function runPostDemo() {
    console.log('📤 Running POST demo...');
    
    logMessage('fetchResult', `📤 <strong>POST Request Demo</strong>`, 'primary');
    
    const postData = {
        title: 'Demo Post',
        body: 'This is a demo post created via fetch API',
        userId: 1
    };
    
    logMessage('fetchResult', `📝 Sending POST data: ${JSON.stringify(postData, null, 2)}`, 'info');
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        });
        
        logMessage('fetchResult', `📨 POST Response: ${response.status} ${response.statusText}`, 'success');
        
        const result = await response.json();
        
        logMessage('fetchResult', `✅ <strong>POST Successful!</strong> Created post with ID: ${result.id}`, 'success');
        logMessage('fetchResult', `📄 Response: ${JSON.stringify(result, null, 2)}`, 'info');
        
    } catch (error) {
        logMessage('fetchResult', `❌ POST error: ${error.message}`, 'error');
    }
}

async function runFetchErrorDemo() {
    console.log('💥 Running fetch error demo...');
    
    logMessage('fetchResult', `💥 <strong>Fetch Error Handling Demo</strong>`, 'warning');
    
    try {
        // Try to fetch from a non-existent endpoint
        logMessage('fetchResult', `🚀 Trying to fetch from invalid URL...`, 'info');
        
        const response = await fetch('https://jsonplaceholder.typicode.com/nonexistent');
        
        logMessage('fetchResult', `📨 Response status: ${response.status}`, 'warning');
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        logMessage('fetchResult', `✅ Data: ${JSON.stringify(data)}`, 'success');
        
    } catch (error) {
        logMessage('fetchResult', `❌ <strong>Fetch error caught:</strong> ${error.message}`, 'error');
        logMessage('fetchResult', `💡 Always check response.ok and handle network errors!`, 'info');
    }
}

function clearFetchLog() {
    document.getElementById('fetchResult').innerHTML = '<em class="text-muted">Fetch log cleared. Run a demo to see output...</em>';
}

// 5. Weather App Practice Exercise
const weatherConditions = ['sunny', 'cloudy', 'rainy', 'snowy', 'windy', 'foggy'];
const weatherIcons = {
    sunny: '☀️',
    cloudy: '☁️',
    rainy: '🌧️',
    snowy: '❄️',
    windy: '💨',
    foggy: '🌫️'
};

async function getWeatherInfo() {
    console.log('🌤️ Getting weather info...');
    
    try {
        const city = document.getElementById('cityName').value.trim();
        
        if (!city) {
            showWeatherError('Please enter a city name');
            return;
        }
        
        logMessage('weatherResult', `🌐 <strong>Weather API Request</strong> for ${city}`, 'primary');
        logMessage('weatherResult', `📡 Fetching weather data...`, 'info');
        
        showWeatherLoading(city);
        
        // Simulate weather API call
        const weatherData = await simulateWeatherAPI(city);
        
        logMessage('weatherResult', `✅ Weather data received for ${city}`, 'success');
        
        displayWeatherData(weatherData);
        
        // Clear input
        document.getElementById('cityName').value = '';
        
    } catch (error) {
        logMessage('weatherResult', `❌ Weather API error: ${error.message}`, 'error');
        showWeatherError(error.message);
    }
}

async function simulateWeatherAPI(city) {
    // Simulate network delay
    const delay = Math.random() * 2000 + 1000; // 1-3 seconds
    logMessage('weatherResult', `⏳ API response time: ${(delay/1000).toFixed(1)}s`, 'info');
    
    await new Promise(resolve => setTimeout(resolve, delay));
    
    // Simulate occasional API failure
    if (Math.random() < 0.1) {
        throw new Error('Weather service temporarily unavailable');
    }
    
    // Generate mock weather data
    const condition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    const temperature = Math.round(Math.random() * 35 + 5); // 5-40°C
    const humidity = Math.round(Math.random() * 50 + 30); // 30-80%
    const windSpeed = Math.round(Math.random() * 20 + 5); // 5-25 km/h
    
    return {
        city: city,
        temperature: temperature,
        condition: condition,
        humidity: humidity,
        windSpeed: windSpeed,
        icon: weatherIcons[condition]
    };
}

function showWeatherLoading(city) {
    const display = document.getElementById('weatherDisplay');
    display.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 24px; margin-bottom: 15px;">🌐</div>
            <h5>Loading weather for ${city}...</h5>
            <div style="background: #e3f2fd; border-radius: 8px; padding: 15px; margin: 15px 0; animation: pulse 1.5s infinite;">
                <em>Fetching data from weather API...</em>
            </div>
        </div>
        <style>
        @keyframes pulse {
            0% { opacity: 0.6; }
            50% { opacity: 1; }
            100% { opacity: 0.6; }
        }
        </style>
    `;
}

function displayWeatherData(data) {
    const display = document.getElementById('weatherDisplay');
    display.innerHTML = `
        <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #74b9ff, #0984e3); color: white; border-radius: 10px;">
            <div style="font-size: 48px; margin-bottom: 10px;">${data.icon}</div>
            <h3>${data.city}</h3>
            <div style="font-size: 32px; font-weight: bold; margin: 10px 0;">${data.temperature}°C</div>
            <div style="font-size: 18px; margin-bottom: 20px; text-transform: capitalize;">${data.condition}</div>
            
            <div style="display: flex; justify-content: space-around; margin-top: 20px;">
                <div style="text-align: center;">
                    <div style="font-size: 14px; opacity: 0.8;">Humidity</div>
                    <div style="font-size: 20px; font-weight: bold;">${data.humidity}%</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 14px; opacity: 0.8;">Wind</div>
                    <div style="font-size: 20px; font-weight: bold;">${data.windSpeed} km/h</div>
                </div>
            </div>
            
            <div style="margin-top: 15px; font-size: 12px; opacity: 0.8;">
                Updated: ${new Date().toLocaleTimeString()}
            </div>
        </div>
    `;
}

function showWeatherError(message) {
    const display = document.getElementById('weatherDisplay');
    display.innerHTML = `
        <div style="text-align: center; padding: 20px; background: #ffebee; border: 1px solid #f44336; border-radius: 8px; color: #d32f2f;">
            <div style="font-size: 32px; margin-bottom: 15px;">🚫</div>
            <h5>Weather Error</h5>
            <p>${message}</p>
            <small><em>Please try again or check the city name.</em></small>
        </div>
    `;
}

async function getRandomCityWeather() {
    const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Sydney', 'Mumbai', 'Berlin', 'Moscow', 'Cairo', 'Rio de Janeiro'];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    
    document.getElementById('cityName').value = randomCity;
    await getWeatherInfo();
}

async function getMultipleCitiesWeather() {
    logMessage('weatherResult', `🌍 <strong>Multiple Cities Weather</strong> - Parallel requests`, 'primary');
    
    const cities = ['London', 'Paris', 'New York'];
    
    try {
        logMessage('weatherResult', `🚀 Starting ${cities.length} parallel weather requests...`, 'info');
        
        const startTime = Date.now();
        
        // Start all requests in parallel
        const promises = cities.map(city => simulateWeatherAPI(city));
        
        // Wait for all to complete
        const results = await Promise.all(promises);
        
        const endTime = Date.now();
        const totalTime = ((endTime - startTime) / 1000).toFixed(1);
        
        logMessage('weatherResult', `✅ All weather data received in ${totalTime}s`, 'success');
        
        // Display all results
        let combinedHtml = `
            <div style="background: linear-gradient(135deg, #6c5ce7, #a29bfe); color: white; padding: 15px; border-radius: 8px; margin-bottom: 15px; text-align: center;">
                <strong>🌍 Multiple Cities Weather</strong><br>
                <small>Fetched ${cities.length} cities in ${totalTime}s (parallel execution)</small>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        `;
        
        results.forEach((data, index) => {
            combinedHtml += `
                <div style="flex: 1; min-width: 150px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 15px; text-align: center;">
                    <div style="font-size: 24px;">${data.icon}</div>
                    <strong>${data.city}</strong><br>
                    <span style="font-size: 18px; color: #007bff;">${data.temperature}°C</span><br>
                    <small style="color: #6c757d;">${data.condition}</small>
                </div>
            `;
        });
        
        combinedHtml += '</div>';
        
        document.getElementById('weatherDisplay').innerHTML = combinedHtml;
        
    } catch (error) {
        logMessage('weatherResult', `❌ Multiple cities error: ${error.message}`, 'error');
        showWeatherError('Failed to fetch weather for multiple cities');
    }
}

function clearWeatherLog() {
    document.getElementById('weatherResult').innerHTML = '<em class="text-muted">Weather API request logs will appear here...</em>';
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Module 6: Asynchronous JavaScript Demo Initialized!');
    
    // Test that critical elements exist
    const criticalElements = ['quickTestResult', 'callbackResult', 'promiseResult', 'asyncResult', 'fetchResult'];
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
        logMessage('callbackResult', '🎉 <strong>Welcome to Asynchronous JavaScript Demo!</strong> Try the callback demo first.', 'primary');
        
    }, 1000);
    
    // Add Enter key support for city input
    const cityInput = document.getElementById('cityName');
    if (cityInput) {
        cityInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                getWeatherInfo();
            }
        });
    }
    
    console.log('✅ Module 6 Demo Ready!');
});

// Make functions globally available
window.quickTest = quickTest;
window.runCallbackDemo = runCallbackDemo;
window.runCallbackHellDemo = runCallbackHellDemo;
window.clearCallbackLog = clearCallbackLog;
window.runPromiseDemo = runPromiseDemo;
window.runPromiseChainDemo = runPromiseChainDemo;
window.runPromiseAllDemo = runPromiseAllDemo;
window.clearPromiseLog = clearPromiseLog;
window.runAsyncAwaitDemo = runAsyncAwaitDemo;
window.runAsyncErrorDemo = runAsyncErrorDemo;
window.runParallelAsyncDemo = runParallelAsyncDemo;
window.clearAsyncLog = clearAsyncLog;
window.runFetchDemo = runFetchDemo;
window.runPostDemo = runPostDemo;
window.runFetchErrorDemo = runFetchErrorDemo;
window.clearFetchLog = clearFetchLog;
window.getWeatherInfo = getWeatherInfo;
window.getRandomCityWeather = getRandomCityWeather;
window.getMultipleCitiesWeather = getMultipleCitiesWeather;
window.clearWeatherLog = clearWeatherLog;

console.log('🎯 Module 6: Asynchronous JavaScript Demo Loaded Successfully!');