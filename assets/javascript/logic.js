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
    // Need to add code to start timer
})

// Render question - and move on to next question object each time the user clicks 'next' or time passes. 
let questionTitle = document.getElementById('question-title')
let choicesArea = document.getElementById('choices')

questionTitle.textContent = (questions[0].title)
// questions.choices.forEach(function() {
//     document.choicesArea.createElement('button')
//     button.textContent = (choices[i])
// })

// CODE BELOW NOT YET WORKING
for (let i = 0; i < choices.length; i++) {
    let button = document.choicesArea.createElement('button');
    button.textContent = (choices[i]);
    document.body.appendChild(button);
}

// Create 4 buttons using a 'for each' loop. And then set them class attributes etc. 
