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
const time = document.getElementById('time')

// Set timer - incomplete
let secondsLeft = 60;
function setTime() {
    const timeInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            // displayMessage()
            // need to add code to display end screen
        }
}, 1000);
}

// Make start screen disappear and questions screen appear when 'start quiz' button is pressed. Also starts timer.
startButton.addEventListener("click", function() {
    startScreen.style.display = "none";
    questionsScreen.style.display = "block";
    setTime();
})

// Render question - and move on to next question object each time the user clicks 'next' or time passes. 
let questionTitle = document.getElementById('question-title')
let choicesArea = document.getElementById('choices')

// questions.choices.forEach(function() {
//     document.choicesArea.createElement('button')
//     button.textContent = (choices[i])
// })

// First question - loop to display choices as buttons
for (let i = 0; i < questions.length -1; i++) {
    showQuestion();
    questionTitle.textContent = (questions[0].title)
    let button = document.createElement('button');
    button.textContent = questions[0].choices[i];
    choicesArea.appendChild(button);
}
    choicesArea.addEventListener('click', function (event) {
        let answer = event.target;
        if (answer.matches("button") === true) {
        event.preventDefault();
        let answer = event.target;
        let result = document.createElement('h3');
        if (answer.textContent === "Spain") {
            result.textContent = "Correct answer!";
            choicesArea.appendChild(result);
        } else {
            result.textContent = "Wrong answer!";
            choicesArea.appendChild(result);
            secondsLeft -= 5;
        }
        // Hide the answered question after a short time delay
        setTimeout(hideQuestion, 1000) 
}
}
)


function hideQuestion () {
    questionTitle.style.display = "none"
    choicesArea.style.display = "none"
}

function showQuestion () {
    questionTitle.style.display = "block"
    choicesArea.style.display = "block"
}

// Second question
// for (let i = 0; i < 4; i++) {
//     let button = document.createElement('button');
//     button.textContent = questions[1].choices[i];
//     choicesArea.appendChild(button);

// // Third Q
// for (let i = 0; i < 4; i++) {
//     let button = document.createElement('button');
//     button.textContent = questions[2].choices[i];
//     choicesArea.appendChild(button);
// }

// // Fourth Q
// for (let i = 0; i < 4; i++) {
//     let button = document.createElement('button');
//     button.textContent = questions[3].choices[i];
//     choicesArea.appendChild(button);
// }

// // Fifth Q
// for (let i = 0; i < 4; i++) {
//     let button = document.createElement('button');
//     button.textContent = questions[4].choices[i];
//     choicesArea.appendChild(button);
// }

// // Function for clicking answer
// function nextAnswer() {
    
// }

