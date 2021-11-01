// Timing Events Exercise 11-1-2021 

// 1. Use a setTimeout method to have "Hi" displayed as a p element/tag inside the div with the id of "first" 1 second after the page loads.
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);
  }, 1000);
  

// 2. Use nested setTimeout methods to complete the following: Have the text of "One" displayed as a p element/tag inside the div with the id of "timeout-nesting" 2 seconds after the page loads. Also, below the "One" p element/tag, have the text of "Two" also displayed as a p element/tag inside the same div 3 seconds after the page loads.
setTimeout(() => {
const div2 = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    div2.append(p2);
}, 2000);

setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p3 = document.createElement(`p`);
    p3.innerText = `Two`;
    div2.append(p3);
  }, 3000);


// 3a.  Use a setInterval method to display a counter in the console that starts at 1 and continues going up one number at a time every second.
let time = 1;
const counter =
setInterval(() => {
    console.log(time);
    time++;
  }, 1000);
// 3b. Have the "STOP" button set up so that when it is pressed the setInterval method created in 3a will stop continuously running (HINT: Need to create a variable).
const stop = document.querySelector(`button`);

stop/addEventListener(`click`, () => {
    clearInterval(counter);
});

// BONUS…
// 4. Using setInterval, display a countdown clock as a p element/tag inside the div with the id of "countdown". Have the countdown clock start at 2 minutes and count down. The countdown clock should display in the following format (Example: 2:00 to start and 0:00 at end). ALSO, when the countdown timer hits zero have it display a message saying… "TIME IS UP" instead of the clock (AKA 0:00).

let startingMinutes = .1;
let clock= startingMinutes * 60; 
const p4 = document.createElement(`p`);

const countdownElement = document.getElementById('countdown'); 

setInterval(updateCountdown, 1000); 
function updateCountdown() {
  const minutes = Math.floor(clock / 60); 
  let seconds = clock % 60; 

  seconds = seconds < 10 ? `0` + seconds : seconds; 

  
  countdownElement.innerHTML = `${minutes}:${seconds}`; 

  if (clock > 0){
  clock--; 
  clock = clock < 0 ? 0 : clock; 

  } else {
    countdownElement.innerHTML = (`TIME IS UP`);
}
};