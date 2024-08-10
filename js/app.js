/*-------------------------------- Constants --------------------------------*/
const boredomStatEl =document.getElementById('boredom-stat')

const hungerStatEl = document.getElementById('hunger-stat');

const sleepinessStatEl = document.getElementById("sleepiness-stat");

const playBtnEl = document.getElementById('play');

const feedBtnEl = document.getElementById('feed');

const sleepBtnEl = document.getElementById('sleep');

const gameMessageEL = document.getElementById('message');

const resetBtnEl = document.getElementById('restart');

console.log(boredomStatEl); 


/*---------------------------- Variables (state) ----------------------------*/
let state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
};

let timer 

let gameOver = false 

/*------------------------ Cached Element References ------------------------*/





/*-------------------------------- Functions --------------------------------*/
function init () {
    
resetBtnEl.classList.add('hidden');
gameMessageEL.classList.add('hidden');

state.boredom = 0 
state.hunger = 0 
state.sleepiness = 0 

gameOver = false

timer = setInterval(runGame,2000);
}

function runGame () {
        updateStates()
        checkGameOver()
        render(); 
        console.log('running')
}

function render () {
    boredomStatEl.textContent = ` ${state.boredom}`;
    hungerStatEl.textContent = ` ${state.hunger}`;
    sleepinessStatEl.textContent = `${state.sleepiness}`;

 if (gameOver) {
    clearInterval(timer);
    resetBtnEl.classList.remove('hidden');
    gameMessageEL.classList.remove('hidden');
 }
}



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateStates() {
state.boredom += randomNumber(1,3);
state.hunger += randomNumber(1,3);
state.sleepiness += randomNumber (1,3); 
console.log(state)
}

function checkGameOver() {
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
         gameOver = true; 
    }
}

function playBtnClick () {
    state.boredom = Math.max(0,state.boredom - 10);
    render()
}

function feedBtnClick () {
    state.hunger = Math.max(0, state.hunger - 10 )
    render()
}

function sleepBtnClick () {
    state.sleepiness = Math.max(0, state.sleepiness -10);
    render()
}
/*----------------------------- Event Listeners -----------------------------*/

playBtnEl.addEventListener("click",playBtnClick)
feedBtnEl.addEventListener('click',feedBtnClick)
sleepBtnEl.addEventListener('click',sleepBtnClick)
resetBtnEl.addEventListener('click',init)
init();


//create a widget for the game 
//add sound unit one level up (audio)
// add different emojis for each one 
// move the hello kitty up to the middle of the screen using flexbox 
// create a popout with instructions with how to play
// 


