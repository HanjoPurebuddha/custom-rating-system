const scoreSection = document.getElementById('score-section');

// Function to create a new score section with consistent formatting
function createNewScoreSection() {
    const newScoreInput = document.createElement('div');
    newScoreInput.className = 'score-input';

    const newScoreColumn = document.createElement('div');
    newScoreColumn.className = 'score-column';

    const newStars = document.createElement('div');
    newStars.className = 'stars';
    newStars.textContent = '☆ ☆ ☆ ☆ ☆';

    const newTextArea = document.createElement('textarea');
    newTextArea.className = 'text-area';
    newTextArea.placeholder = 'Your evaluation metric here...';

    const newButtonStats = document.createElement('button');
    newButtonStats.className = 'button button-stats';
    newButtonStats.textContent = '🤖📊';

    const newExplanation = document.createElement('div');
    newExplanation.className = 'explanation-section';
    newExplanation.textContent = 'Explanation for the score or additional information goes here.';

    newScoreColumn.appendChild(newStars);
    newScoreColumn.appendChild(newButtonStats);

    newScoreInput.appendChild(newScoreColumn);
    newScoreInput.appendChild(newTextArea);
    newScoreInput.appendChild(newExplanation);

    scoreSection.appendChild(newScoreInput);

    assignEventListeners();
}

function assignEventListeners() {
    const statsButtons = document.querySelectorAll('.button-stats');
    statsButtons.forEach((button, index) => {
        button.addEventListener('click', () => console.log(`Statistics Bot (🤖📊) activated for section ${index + 1}.`));
    });
}

scoreSection.addEventListener('input', (event) => {
    const allTextAreas = document.querySelectorAll('.text-area');
    const lastTextArea = allTextAreas[allTextAreas.length - 1];

    if (lastTextArea.value.trim() !== '') {
        createNewScoreSection();
    }
});

assignEventListeners();
