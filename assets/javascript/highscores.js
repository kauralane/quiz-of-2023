
    let scores = JSON.parse(localStorage.getItem('scores')) || [];

// sort the scores numerically in descending order
    scores.sort(function(a, b){return b.score - a.score});

    scores.forEach(score => {
        const liScore = document.createElement('li');
        liScore.textContent = `User: ${score.user}, Score: ${score.score}`;
        const scoreList = document.getElementById('highscores');
        scoreList.appendChild(liScore);
    });


let clearButton = document.getElementById('clear')
clearButton.addEventListener('click', function() {
    const scoreList = document.getElementById('highscores');
    localStorage.clear()
    scoreList.innerHTML = '';
}
)