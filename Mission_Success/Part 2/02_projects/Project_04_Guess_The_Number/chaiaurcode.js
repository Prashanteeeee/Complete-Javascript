let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userinput = document.querySelector("#guessField");
const guessslot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startover = document.querySelector(".resultParas");

const p = document.createElement("p");

let PrevGuess = [];

let numGuess = 0;
let PlayGame = true;

if(PlayGame)
{
    submit.addEventListener('click' ,(e) => {
        e.preventDefault();
        
        const guess = parseInt(userinput.value);
        ValidateGuess(guess);
    })
}
function ValidateGuess(guess)
{
 if(isNaN(guess))
 {
    alert("Please Enter a Valid Number");
 }
 else if(guess < 1)
 {
    alert("Please Enter a Number more than 1");
 }
 else if(guess > 100)
 {
    alert("Please Enter a Number less than 100");
 }
 else{
    PrevGuess.push(guess);
    if(numGuess === 10)
    {
        DisplayGuess(guess);
        DisplayMessage(`Game Over. Random Number Was: ${random}`);
        endGame();
    }
    else{
        DisplayGuess(guess);
        CheckGuess(guess);

    }
 }
}


function CheckGuess(guess)
{
if(guess === random){
    DisplayMessage(`You Guessed it Right!`);
    endGame();
}
else if(guess<random)
{
    DisplayMessage("Your Guess is Too Low");
}
else{
    DisplayMessage("Your Guess is Too High");
}
}


function DisplayGuess(guess)
{
userinput.value = '';
guessslot.innerHTML += `${guess}  `;
numGuess++;
remaining.innerHTML = `${10 - numGuess}`;

}

function DisplayMessage(message)
{
 lowOrHi.innerHTML = `${message}`;
}




function endGame()
{
    userinput.value = '';
    userinput.setAttribute('disabled' , '');
    p.classList.add("button");
    p.innerHTML = '<h2 id = "newgame"> Start New Game</h2>';
    startover.appendChild(p);
    PlayGame = false;
    NewGame();
}


function NewGame()
{
 const newgamebutton = document.querySelector("#newgame");
 newgamebutton.addEventListener('click' , () => {

    random = parseInt(Math.random() * 100 + 1);
    PrevGuess =[];
    numGuess = 0;
    guessslot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    userinput.removeAttribute('disabled');
    startover.removeChild(p);
    PlayGame = true;

 })
}

