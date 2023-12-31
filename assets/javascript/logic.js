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
const endScreen = document.getElementById('end-screen')
const button1 = document.getElementById('button-1')
const button2 = document.getElementById('button-2')
const button3 = document.getElementById('button-3')
const button4 = document.getElementById('button-4')

// Set timer - incomplete
let secondsLeft = 60;
function setTime() {
    const timeInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            questionsScreen.style.display = "none"
            endScreen.style.display = "block";
        }
}, 1000);
}

// Make start screen disappear and questions screen appear when 'start quiz' button is pressed. Also starts timer.
startButton.addEventListener("click", function() {
    startScreen.style.display = "none";
    questionsScreen.style.display = "block";
    setTime();
})


// Function to render each question and the choices
let questionTitle = document.getElementById('question-title')
let choicesArea = document.getElementById('choices')
let questionIndex = 0;

function getQuestion() {
        let question = questions[questionIndex];

        // questions.forEach(question => {
        questionTitle.textContent = question.title
        // })

    question.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    choicesArea.appendChild(button);
    })

    showAnswer();
    resetQuestion();

    }

// questions.forEach(function(question) {
//         button.textContent = choices[i];
//         choicesArea.appendChild(button)
// })

// for (let i = 0; i < 4; i++) {
//     let buttonOne = document.createElement('button');
//     buttonOne.textContent = question.choices[0];
//         let buttonTwo = document.createElement('button');
//         buttonTwo.textContent = question.choices[1];
//         let buttonThree = document.createElement('button');
//         buttonThree.textContent = question.choices[2];
//         let buttonFour = document.createElement('button');
//         buttonFour.textContent = question.choices[3];
//         // let buttons = document.querySelectorAll('button')
//         choicesArea.appendChild(buttonOne);
//         choicesArea.appendChild(buttonTwo);
//         choicesArea.appendChild(buttonThree);
//         choicesArea.appendChild(buttonFour);
// }}
// }


// to reset the question area
function resetQuestion() {
    choicesArea.addEventListener('click', function (event) {
    setTimeout(function () {
        if (event.target.matches("button") === true){
        const buttons = choicesArea.querySelectorAll('button');
        buttons.forEach(button => {
        choicesArea.removeChild(button)});
        questionTitle.textContent = "";
    }}, 1000)
})}


// To display if the answer is correct or not
function showAnswer() {
    choicesArea.addEventListener('click', function (event) {
        let answer = event.target;
        if (answer.matches("button") === true){
        event.preventDefault();
        let result = document.createElement('h3');
        if (answer.textContent === "Spain") {
            result.textContent = "Correct answer!";
            choicesArea.appendChild(result);
        } else {
            result.textContent = "Wrong answer!";
            choicesArea.appendChild(result);
            secondsLeft -= 5;
        }
            setTimeout(function () {
                choicesArea.removeChild(result)
            }, 1000)
    }})
}

getQuestion();


// function showQuestion () {
//     questionTitle.style.display = "block"
//     choicesArea.style.display = "block"
// }

