// Utility function to scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// If/Else Examples
function checkAge() {
    const age = parseInt(document.getElementById('ageInput').value);
    
    if (isNaN(age) || age < 0 || age > 120) {
        showResult('ageResult', 'Please enter a valid age between 0 and 120', 'alert-warning');
        return;
    }
    
    let category, emoji;
    
    if (age < 13) {
        category = "Child";
        emoji = "🧒";
    } else if (age < 20) {
        category = "Teenager";
        emoji = "👦";
    } else if (age < 60) {
        category = "Adult";
        emoji = "👨";
    } else {
        category = "Senior";
        emoji = "👴";
    }
    
    showResult('ageResult', `${emoji} Age ${age}: You are a ${category}`, 'alert-success');
}

function calculateGrade() {
    const score = parseInt(document.getElementById('scoreInput').value);
    
    if (isNaN(score) || score < 0 || score > 100) {
        showResult('gradeResult', 'Please enter a valid score between 0 and 100', 'alert-warning');
        return;
    }
    
    let grade, message, color;
    
    if (score >= 90) {
        grade = "A";
        message = "Excellent! 🎉";
        color = "success";
    } else if (score >= 80) {
        grade = "B";
        message = "Good job! 👍";
        color = "primary";
    } else if (score >= 70) {
        grade = "C";
        message = "Not bad! 👌";
        color = "info";
    } else if (score >= 60) {
        grade = "D";
        message = "Needs improvement 📚";
        color = "warning";
    } else {
        grade = "F";
        message = "Study harder! 💪";
        color = "danger";
    }
    
    const result = `
        <strong>Score:</strong> ${score}<br>
        <strong>Grade:</strong> ${grade}<br>
        <strong>Message:</strong> ${message}
    `;
    
    showResult('gradeResult', result, `alert-${color}`);
}

// Switch Case Examples
function getDayInfo() {
    const day = parseInt(document.getElementById('daySelect').value);
    let dayName, type, mood;
    
    switch (day) {
        case 1:
            dayName = "Monday";
            type = "Weekday";
            mood = "😴 Monday Blues";
            break;
        case 2:
            dayName = "Tuesday";
            type = "Weekday";
            mood = "💪 Getting Started";
            break;
        case 3:
            dayName = "Wednesday";
            type = "Weekday";
            mood = "🐪 Hump Day";
            break;
        case 4:
            dayName = "Thursday";
            type = "Weekday";
            mood = "🎯 Almost There";
            break;
        case 5:
            dayName = "Friday";
            type = "Weekday";
            mood = "🎉 TGIF!";
            break;
        case 6:
            dayName = "Saturday";
            type = "Weekend";
            mood = "😎 Chill Time";
            break;
        case 7:
            dayName = "Sunday";
            type = "Weekend";
            mood = "😌 Rest Day";
            break;
        default:
            dayName = "Unknown";
            type = "Invalid";
            mood = "❓ What day?";
    }
    
    const result = `<strong>${dayName}</strong> - ${type}<br>${mood}`;
    showResult('dayResult', result, 'alert-success');
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    
    if (isNaN(num1) || isNaN(num2)) {
        showResult('calcResult', 'Please enter valid numbers', 'alert-warning');
        return;
    }
    
    let result;
    let alertClass = 'alert-success';
    
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero! ⚠️";
                alertClass = 'alert-danger';
            }
            break;
        default:
            result = "Invalid operation";
            alertClass = 'alert-warning';
    }
    
    const displayResult = typeof result === 'number' ? 
        `${num1} ${operation} ${num2} = ${result.toFixed(2)}` : 
        result;
    
    showResult('calcResult', displayResult, alertClass);
}

// For Loop Examples
function generateTable() {
    const number = parseInt(document.getElementById('tableNumber').value);
    
    if (isNaN(number) || number < 1 || number > 20) {
        showResult('tableResult', 'Please enter a number between 1 and 20', 'alert-warning');
        return;
    }
    
    let table = `<strong>Multiplication Table for ${number}:</strong><br><br>`;
    
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        table += `${number} × ${i} = <strong>${result}</strong><br>`;
    }
    
    showResult('tableResult', table, 'alert-success');
}

function generatePattern() {
    const size = parseInt(document.getElementById('patternSize').value);
    const char = document.getElementById('patternChar').value || '*';
    
    if (isNaN(size) || size < 1 || size > 10) {
        showResult('patternResult', 'Please enter a size between 1 and 10', 'alert-warning');
        return;
    }
    
    let pattern = '';
    
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += char + ' ';
        }
        pattern += '<br>';
    }
    
    showResult('patternResult', pattern, 'alert-success');
}

function processNumbers() {
    const input = document.getElementById('numberList').value;
    
    if (!input.trim()) {
        showResult('numbersResult', 'Please enter some numbers', 'alert-warning');
        return;
    }
    
    const numbers = input.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
    
    if (numbers.length === 0) {
        showResult('numbersResult', 'Please enter valid numbers separated by commas', 'alert-warning');
        return;
    }
    
    let sum = 0;
    let evenCount = 0;
    let oddCount = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        
        if (numbers[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    
    const average = sum / numbers.length;
    const result = `
        <strong>Numbers:</strong> ${numbers.join(', ')}<br>
        <strong>Sum:</strong> ${sum}<br>
        <strong>Average:</strong> ${average.toFixed(2)}<br>
        <strong>Even numbers:</strong> ${evenCount}<br>
        <strong>Odd numbers:</strong> ${oddCount}
    `;
    
    showResult('numbersResult', result, 'alert-success');
}

// While Loop Examples
let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameWon = false;

function makeGuess() {
    if (gameWon) return;
    
    const guess = parseInt(document.getElementById('guessInput').value);
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        showResult('guessResult', 'Please enter a number between 1 and 100', 'alert-warning');
        return;
    }
    
    attempts++;
    
    let message = '';
    let alertClass = 'alert-info';
    
    if (guess === targetNumber) {
        message = `🎉 Congratulations! You guessed it in ${attempts} attempts!`;
        alertClass = 'alert-success';
        gameWon = true;
    } else if (guess < targetNumber) {
        message = `📈 Too low! Try a higher number. (Attempt ${attempts})`;
        alertClass = 'alert-warning';
    } else {
        message = `📉 Too high! Try a lower number. (Attempt ${attempts})`;
        alertClass = 'alert-warning';
    }
    
    showResult('guessResult', message, alertClass);
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').focus();
}

function resetGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameWon = false;
    showResult('guessResult', 'New game started! Guess a number between 1 and 100.', 'alert-info');
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').focus();
}

let countdownInterval;

function startCountdown() {
    let count = parseInt(document.getElementById('countdownStart').value);
    
    if (isNaN(count) || count < 1 || count > 60) {
        showResult('countdownResult', 'Please enter a number between 1 and 60', 'alert-warning');
        return;
    }
    
    // Clear any existing countdown
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    
    showResult('countdownResult', `<h2 style="margin: 0;">${count}</h2>`, 'alert-warning');
    
    countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            showResult('countdownResult', `<h2 style="margin: 0;">${count}</h2>`, 'alert-warning');
        } else {
            showResult('countdownResult', '<h2 style="margin: 0;">🚀 Time\'s up!</h2>', 'alert-success');
            clearInterval(countdownInterval);
        }
    }, 1000);
}

function stopCountdown() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        showResult('countdownResult', 'Countdown stopped', 'alert-secondary');
    }
}

// Practice Exercise - FizzBuzz
function generateFizzBuzz() {
    const limit = parseInt(document.getElementById('fizzBuzzLimit').value);
    
    if (isNaN(limit) || limit < 1 || limit > 100) {
        showResult('fizzBuzzResult', 'Please enter a number between 1 and 100', 'alert-warning');
        return;
    }
    
    let result = '';
    
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += '<strong>FizzBuzz</strong>';
        } else if (i % 3 === 0) {
            result += '<strong>Fizz</strong>';
        } else if (i % 5 === 0) {
            result += '<strong>Buzz</strong>';
        } else {
            result += i;
        }
        result += '<br>';
    }
    
    showResult('fizzBuzzResult', result, 'alert-success');
}

// Utility function to show results
function showResult(elementId, content, alertClass) {
    const element = document.getElementById(elementId);
    element.innerHTML = content;
    element.className = `alert ${alertClass} show-result`;
    element.style.display = 'block';
}

// Add Enter key support for inputs
document.addEventListener('DOMContentLoaded', function() {
    // Age checker
    document.getElementById('ageInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') checkAge();
    });
    
    // Grade calculator
    document.getElementById('scoreInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateGrade();
    });
    
    // Guessing game
    document.getElementById('guessInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') makeGuess();
    });
    
    // Initialize guessing game
    resetGame();
});