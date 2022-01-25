/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
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

const cases = ['case', 'case2', 'case3'];
// let state
let totalScore = 0;
let totalWins = 0;

// set event listeners 

// get user input
// use user input to update state 
// update DOM to reflect the new state

// initialize state
caseButton.addEventListener('click', () => {
  // reset the reveal class for all the balls
  case1.classList.remove('money');
  case2.classList.remove('money');
  case3.classList.remove('money');
  // increment total plays (total++)
  totalScore++;
  // let the computer decide where the ball is hidden (using Math.random)
  //    i.e. generate a random number between 1 and 3
  //    store in variable called ballLocation
  const moneyLocation = Math.ceil(Math.random() * 3);
  console.log('money is in location', moneyLocation);
  // update the reveal class for whichever ball was chosen
  //   case.classList.add('money')
  if (moneyLocation === 1) {
    case1.classList.add('money');
    totalWins++;
  } else if (moneyLocation === 2) {
    case2.classList.add('money');
  } else {
    case3.classList.add('money');
  }
  // update our state
  //    if ball is under shell # 1 -- increment wins
  //    update the wins / losses / totals spans with new state
  totalEl.textContent = totalScore;
  winsEl.textContent = winsEl;
  lossesEl.textContent = totalScore - totalWins;
}); 