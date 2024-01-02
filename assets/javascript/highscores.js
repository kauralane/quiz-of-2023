// Retrieve scores array from local storage
   let scores = JSON.parse(localStorage.getItem('scores')) || [];

// Sort the scores numerically in descending order and append them as list items to teh page
    scores.sort(function(a, b){return b.score - a.score});

    scores.forEach(score => {
        const liScore = document.createElement('li');
        liScore.textContent = `User: ${score.user}, Score: ${score.score}`;
        const scoreList = document.getElementById('highscores');
        scoreList.appendChild(liScore);
    });

// Allow user to clear scores from local storage and from page upon button click
let clearButton = document.getElementById('clear')
clearButton.addEventListener('click', function() {
    const scoreList = document.getElementById('highscores');
    localStorage.clear()
    scoreList.innerHTML = '';
}
)