/*-------------------------------- Constants --------------------------------*/
boredomStatEl

hungerStatEl

sleepinessStatEl

playBtnEl

feedBtnEl

sleepBtnEl

gameMessageEL

resetBtnEl

/*---------------------------- Variables (state) ----------------------------*/
let state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
};

let timer 

let gameOver = false 
/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.getElementById('bordeom-stat');

const hungerStatEl = document.getElementById('hunger-stat');

const sleepinessStatEl = document.getElementById('sleepiness-stat');

const playBtnEl = document.querySelector('play');

const feedBtnEl = document.querySelector('feed');

const sleepBtnEl = document.querySelector('sleep');

const gameMessageEL = document.querySelector('game-status');

const resetBtnEl = document.querySelector('play again');





/*-------------------------------- Functions --------------------------------*/
function init () {
timer = setInterval()
}

init();
setInterval(runGame,2000)

function runGame () {
updateStates()
checkGameOver()
render(
    boredomStatEl.textContent = 'Boredom: ${states.boredom}',
    hungerStatEl.textContent = 'Hunger: ${state.hunger}',
    sleepBtnEl.textContent= 'Sleepiness: $ {state.sleepiness}'
)

}

function render () {
if (checkGameOver = true){
timer.clearInterval()
} if (state.gameOver) {
    resetBtnEl.classList.remove('hidden')
    gameMessageEL.classList.remove('hidden')
}
}


function randomNumber (min, max) {
let min = 0 
let max = 3
return Math.random() * (min - max) + min;
}

function updateStates(state) {
state.forEach(states => { states += randomNumber();
    
});   
}

render();

function checkGameOver () {
    if (state() >= 0) {
        return gameOver = true 
    }
}

function playBtnClick () {
    state.boredom = 0 
    render()
}

function feedBtnClick () {
    state.hunger = 0
    render()
}

function sleepBtnClick () {
    state.sleepiness = 0 
    render()
}
/*----------------------------- Event Listeners -----------------------------*/

playBtnEl.addEventListener("click",playBtnClick)
feedBtnEl.addEventListener('click',feedBtnClick)
sleepBtnEl.addEventListener('click',sleepBtnClick)






