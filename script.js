const scoreSection = document.getElementById('score-section');

// Function to create a new score section
function createNewScoreSection() {
    const newScoreInput = document.createElement('div');
    newScoreInput.className = 'score-input';

    const newScoreColumn = document.createElement('div');
    newScoreColumn.className = 'score-column';

    const newStars = document.createElement('div');
    newStars.className = 'stars';
    newStars.textContent = '☆☆☆☆☆'; // Default: no stars

    const newTextArea = document.createElement('textarea');
    newTextArea.className = 'text-area';
    newTextArea.placeholder = 'Your evaluation metric here...'; // Placeholder for user input

    const newButtonStats = document.createElement('button');
    newButtonStats.className = 'button button-stats';
    newButtonStats.textContent = '🤖📊'; // Statistics button

    const newExplanation = document.createElement('div');
    newExplanation.className = 'explanation-section';
    newExplanation.textContent = 'Explanation for the score or additional information goes here.'; // Default explanation text

    newScoreColumn.appendChild(newStars); // Add stars to the column
    newScoreColumn.appendChild(newButtonStats); // Add stats button

    newScoreInput.appendChild(newScoreColumn); // Add score column to input
    newScoreInput.appendChild(newTextArea); // Add text area
    newScoreInput.appendChild(newExplanation); // Add explanation section

    scoreSection.appendChild(newScoreInput); // Add new score section to scoreSection

    assignEventListeners(); // Reassign event listeners for the new section
}

// Event listeners for various interactions
function assignEventListeners() {
    // Event listener for "Run Rating Score For All" button
    const runAllButton = document.querySelector('.button-run-all');
    runAllButton.addEventListener('click', () => {
        const allStars = document.querySelectorAll('.stars');
        const allExplanations = document.queryurator.querySelectorAll('.explanation-section');

        allStars.forEach((starsElement) => {
            starsElement.textContent = '⭐️⭐️⭐️⭐️☆'; // Set all star ratings to 4/5
        });

        allExplanations.forEach((explanation) => {
            explanation.textContent = 'Updated explanation text after clicking the "Run Rating Score For All" button.'; // Change explanation
        });
    });

    const statsButtons = document.querySelectorAll('.button-stats');
    statsButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const parentScoreInput = event.target.closest('.score-input');
            const starsElement = parentScoreInput.querySelector('.stars');
            const explanationElement = parentScoreInput.querySelector('.explanation-section');

            starsElement.textContent = '⭐️⭐️⭐️⭐️☆'; // Adjust to 4/5
            explanationElement.textContent = 'Explanation after clicking the stats button.'; // Update explanation
        });
    });
}

// Create new score sections when there's input in the last text area
scoreSection.addEventListener('input', (event) => {
    const allTextAreas = Array.from(document.querySelectorAll('.text-area'));
    const lastTextArea = allTextAreas[allTextAreas.length - 1];

    if (event.target === lastTextArea && lastTextArea.value.trim() !== '') {
        createNewScoreSection(); // Create a new score section when there's input in the last text box
    }
});

assignEventListeners(); // Initial assignment of event listeners
