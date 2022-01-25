// import functions and grab DOM elements
const caseButton = document.getElementById('case-button');
const case2Button = document.getElementById('case2-button');
const case3Button = document.getElementById('case3-button');

const caseContainer = document.getElementById('case-container');
const case2Container = document.getElementById('case2-container');
const case3Container = document.getElementById('case3-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

// initialize state
/*
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
});

function handleGuess(correctSpot, userGuess) {
    // reset the styles
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    // then increment the guesses
    if (userGuess === correctSpot) {
        correctGuesses++;
        totalGuesses++;

        const correctHidingPlaceEl = document.getElementById(`${correctSpot}-container`);
        correctHidingPlaceEl.classList.add('face');

        console.log(correctHidingPlaceEl);
        winsEl.textContent = correctGuesses;
        totalEl.textContent = totalGuesses;
    } else {
        totalGuesses++;
        lossesEl.textContent = totalGuesses - correctGuesses;
    }
    // then add the face class to that element so that the face shows up
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
}