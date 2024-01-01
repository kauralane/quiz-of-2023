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


const startButton = document.getElementById('start')
const startScreen = document.getElementById('start-screen')
const questionsScreen = document.getElementById('questions')
const time = document.getElementById('time')
const endScreen = document.getElementById('end-screen')

// Set timer - incomplete
let secondsLeft = 30;
function setTime() {
    const timeInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft;

        if (secondsLeft === 0 || endScreen.style.display === "block") {
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
    resetQuestion();
    let question = questions[questionIndex];

// this is skipping questions 3 and 5 for an unknown reason
    questionTitle.textContent = question.title;

    question.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener('click', function (event) {
        showAnswer(event.target.textContent);
        changeQuestion();
    })
    choicesArea.appendChild(button);
    })
    }

// to reset the question area
function resetQuestion() {
    while(choicesArea.firstChild){
        choicesArea.removeChild(choicesArea.firstChild);
    }
}

// To display if the answer is correct or not, using conditionals to match the question index and the relevant answer
function showAnswer(clickedButton) {

        let result = document.createElement('h3');
        choicesArea.appendChild(result);

        if (questionIndex === 0 && clickedButton === 'Spain') {
            result.textContent = "Correct answer!";
        } else if (questionIndex === 1 && clickedButton === 'The Sycamore Gap Tree') {
            result.textContent = "Correct answer!";
        } else if (questionIndex === 2 && clickedButton === 'Titan') {
            result.textContent = "Correct answer!";
        } else if (questionIndex === 3 && clickedButton === 'May') {
            result.textContent = "Correct answer!";
        } else if (questionIndex === 4 && clickedButton === 'Broken glass') {
            result.textContent = "Correct answer!";
} else {
            result.textContent = "Wrong answer!";
            secondsLeft -= 5;
        }

        // choicesArea.appendChild(result);

            setTimeout(function () {
                let h3 = choicesArea.querySelector('h3')
                if (h3) {
                    choicesArea.removeChild(h3);
                }
            }, 1000)
    }


function changeQuestion() {
    // choicesArea.addEventListener('click', function (event) {
    //     let answer = event.target;
    //     if (answer.matches("button") === true) {
            questionIndex++;
            if (questionIndex < questions.length - 1) { 
            getQuestion();
            } else {
                questionsScreen.style.display = "none";
                endScreen.style.display = "block";
            }
    //     }
    // }
    // );
}

getQuestion();
