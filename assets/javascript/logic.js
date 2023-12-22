// Click the start button:
// Landing page goes away
// Timer starts
// The first question appears (with its answers)

// For each question:
// User clicks an answer
// Their choice is compared to the correct answer as stored in the question's object
// If correct, tell them
// If incorrect, tell them AND subtract time from the timer
// Optional: play a sound for correct or incorrect
// Either way, the question disappears after a few seconds and the next question appears

// After the last question:
// Timer stops
// Question disappears
// Form appears for user to enter their initials
// Display their score

// User submits form
// Initials and score get stored in local storage
// User is taken to the high scores page
// High scores are listed, sorted highest to lowest
// User has option to take the quiz again


const startButton = document.getElementById('start');
const startScreen = document.getElementById('start-screen')
const questionsScreen = document.getElementById('questions')

// Make start screen disappear and questions screen appear when 'start quiz' button is pressed
startButton.addEventListener("click", function() {
    startScreen.style.display = "none";
    questionsScreen.style.display = "block";
})

// For loop to display question values
let questionTitle = document.getElementById('question-title')
let choices = document.getElementById('choices')

// for (let i = 0; i < 5; i++) {
questionTitle.textContent = (questions[i].title)

// }
