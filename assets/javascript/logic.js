const startButton = document.getElementById('start')
const startScreen = document.getElementById('start-screen')
const questionsScreen = document.getElementById('questions')
const time = document.getElementById('time')
const endScreen = document.getElementById('end-screen')

// Function to set timer to count down from 60 seconds. Once timer reaches 0 or the questions have all been answered, timer stops

let secondsLeft = 60;
function setTime() {
    const timeInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft;

        if (secondsLeft === 0 || endScreen.style.display === "block") {
            clearInterval(timeInterval);
            questionsScreen.style.display = "none"
            endScreen.style.display = "block";
            getScore();
        }
}, 1000);
}

// Make start screen disappear and questions screen appear when 'start quiz' button is pressed. Also starts timer.
startButton.addEventListener("click", function() {
    startScreen.style.display = "none";
    questionsScreen.style.display = "block";
    setTime();
})


// Function to render each question and it's choices, then reset the area to move on to the next question
let questionTitle = document.getElementById('question-title')
let choicesArea = document.getElementById('choices')
let questionIndex = 0;

function getQuestion() {
    resetQuestion();
    let question = questions[questionIndex];
    questionTitle.textContent = question.title;

    question.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener('click', function (event) {
        showAnswer(event.target.textContent);
        setTimeout(function() {
            changeQuestion()
        }, 500);
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

// To temporarily display if the answer is correct or not, using conditionals to match the question index and the relevant answer. 

function showAnswer(clickedButton) {

        let result = document.createElement('h3');

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

        choicesArea.appendChild(result);

            setTimeout(function () {
                let h3 = choicesArea.querySelector('h3')
                if (h3) {
                    choicesArea.removeChild(h3);
                }
            }, 1000)
    }

    // Incrementing question index to move onto next one until the end of the questions array is reached
function changeQuestion() {
            questionIndex++;
            if (questionIndex < questions.length) { 
            getQuestion();
            } else {
                questionsScreen.style.display = "none";
                endScreen.style.display = "block";
            }
}

getQuestion();

// Function to add user's score (the time) and initials to local storage when submit button is pressed, without overwriting previous submissions

function getScore() {
    let submitButton = document.getElementById('submit');
    let score = document.getElementById('final-score');
    score.textContent = secondsLeft;
    initials.style.backgroundColor = 'white';

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        let initials = document.getElementById('initials').value.trim();
        let scores = JSON.parse(localStorage.getItem('scores')) || [];

        scores.push({ user: initials, score: secondsLeft });
        localStorage.setItem('scores', JSON.stringify(scores));

        document.getElementById('initials').style.backgroundColor = 'lightGreen';

        setTimeout(function () {
            newPage();
        }, 500);
    });
}

// Function to move to highscores page
function newPage() {
    window.location = "highscores.html";
}