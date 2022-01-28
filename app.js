/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import functions and grab DOM elements
const case1Button = document.getElementById('case1-button');
const case2Button = document.getElementById('case2-button');
const case3Button = document.getElementById('case3-button');

const case1Container = document.getElementById('case-container');
const case2Container = document.getElementById('case2-container');
const case3Container = document.getElementById('case3-container');
const results = document.getElementById('results');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

const cases = ['case', 'case2', 'case3'];
// let state
let totalScore = 0;
let totalWins = 0;

// set event listeners 
case1Button.addEventListener('click', () => {
    const caseSelect = Math.floor(Math.random() * 3);
    const answer = cases[caseSelect];
    handleGuess(answer, 'case1');
});

case2Button.addEventListener('click', () => {
    const caseSelect = Math.floor(Math.random() * 3);
    const answer = cases[caseSelect];
    handleGuess(answer, 'case2');
});

case3Button.addEventListener('click', () => {
    const caseSelect = Math.floor(Math.random() * 3);
    const answer = cases[caseSelect];
    handleGuess(answer, 'case3');
});

function reset() {
    case1Container.classList.remove('money');
    case2Container.classList.remove('money');
    case3Container.classList.remove('money');
}

function displayResults() {
    winsEl.textContent = totalWins;
    totalEl.textContent = totalScore;
    lossesEl.textContent = totalScore - totalWins;
}
function handleGuess(correctSpot, userGuess) {
    // reset the styles
    reset();
    // then increment the guesses
    if (userGuess === correctSpot) {
        totalWins++;
        const correctHidingPlaceEl = document.getElementById(`${correctSpot}-container`);
        correctHidingPlaceEl.classList.add('money');
        console.log(correctHidingPlaceEl);
    }
    totalScore++;
    displayResults();
    // then add the face class to that element so that the face shows up
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
}
