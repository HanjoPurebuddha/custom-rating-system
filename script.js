const scoreSection = document.getElementById('score-section');

// Function to create a new score section with consistent formatting
function createNewScoreSection() {
    const newScoreInput = document.createElement('div');
    newScoreInput.className = 'score-input';

    const newScoreColumn = document.createElement('div');
    newScoreColumn.className = 'score-column';

    const newStars = document.createElement('div');
    newStars.className = 'stars';
    newStars.textContent = '☆☆☆☆☆'; // Default: no stars (empty)

    const newTextArea = document.createElement('textarea');
    newTextArea.className = 'text-area';
    newTextArea.placeholder = 'Your evaluation metric here...'; // Placeholder text

    const newButtonStats = document.createElement('button');
    newButtonStats.className = 'button button-stats';
    newButtonStats.textContent = '🤖📊'; // Statistics button text

    const newExplanation = document.createElement('div');
    newExplanation.className = 'explanation-section';
    newExplanation.textContent = 'Explanation for the score or additional information goes here.'; // Default explanation text

    // Append components in the proper order
    newScoreColumn.appendChild(newStars);
    newScoreColumn.appendChild(newButtonStats);

    newScoreInput.appendChild(newScoreColumn);
    newScoreInput.appendChild(newTextArea);
    newScoreInput.appendChild(newExplanation);

    scoreSection.appendChild(newScoreInput); // Add new score input to the score section

    assignEventListeners(); // Ensure event listeners are assigned to the new section
}

// Function to assign event listeners for buttons and other interactions
function assignEventListeners() {
    // Event listener for "Run Rating Score For All" button
    const runAllButton = document.querySelector('.button-run-all');
    runAllButton.addEventListener('click', () => {
        const allStars = document.querySelectorAll('.stars');
        const allExplanations = document.querySelectorAll('.explanation-section');

        // Set all star ratings to 4/5 and update text
        allStars.forEach((starsElement) => {
            starsElement.textContent = '⭐️⭐️⭐️⭐️☆'; // Adjust stars to 4/5 with emojis
        });

        allExplanations.forEach((explanation) => {
            explanation.textContent = 'This is the updated explanation text after clicking the "Run Rating Score For All" button.'; // Change explanation text
        });
    });

    // Event listener for individual stats buttons
    const statsButtons = document.querySelectorAll('.button-stats');
    statsButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const parentScoreInput = event.target.closest('.score-input');
            const starsElement = parentScoreInput.querySelector('.stars');
            const explanationElement = parentScoreInput.querySelector('.explanation-section');

            starsElement.textContent = '⭐️⭐️⭐️⭐️☆'; // Set to 4/5 with emojis
            explanationElement.textContent = 'This is the updated text for this section after clicking the stats button.'; // Update explanation text
        });
    });
}

// Add new score sections when there's input in the last text area
scoreSection.addEventListener('input', (event) => {
    const allTextAreas = [Array.from(document.querySelectorAll('.text-area'))];
    const lastTextArea = allTextAreas[allTextAreas.length - 1];

    if (lastTextArea.value.trim() !== '') {
        createNewScoreSection(); // Create a new score section when input is detected
    }
});

assignEventListeners(); // Initial assignment of event listeners
