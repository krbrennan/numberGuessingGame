var randNum = Math.floor(Math.random() * 100)+1;
var button = document.getElementById("guessBtn");
var guess = document.getElementById("guess");
var guessed = document.getElementById("guessed");
var lowOrHigh = document.getElementById("isWin");
var numGuesses = 0;
var timesGuessed = document.getElementById("timesGuessed");
var losingScore = 10;

function newGame(){
    var randNum = Math.floor(Math.random() * 100)+1;
}

button.addEventListener("click", function(){
        guessed.textContent += Number(guess.value)+ "  ";
        if(Number(guess.value) === randNum){
        lowOrHigh.textContent = "YOU GOT IT!";
        lowOrHigh.className="poo";
       }
        else if(Number(guess.value) < randNum){
        lowOrHigh.textContent = "Higher!";
        lowOrHigh.className = "higher";
        guess.value = "poop";


    } else{
        lowOrHigh.textContent = "Lower!";
        lowOrHigh.className = "lower";
        guess.value = "poop";

    }

    numGuesses++;
    timesGuessed.textContent = "Your Total Number of guesses: " + numGuesses;

    if(numGuesses === losingScore){
        lowOrHigh.textContent="GG";
        lowOrHigh.className="gameOver";
        guess.disabled= true;
        button.disabled = true;
        resetButton = document.createElement('button');
        resetButton.className = "button";
        resetButton.textContent = 'Start new game';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
    }
    if(Number(guess.value) === randNum){
        lowOrHigh.textContent = "YOU GOT IT!";
        lowOrHigh.className="poo";
        guess.value = "poop";
        guess.disabled= true;
        button.disabled = true;
        resetButton = document.createElement('button');
        resetButton.className = "button";
        resetButton.textContent = 'Start new game';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
    }

    function resetGame(){
        numGuesses = 0;
        guess.disabled = false;
        button.disabled = false;
        timesGuessed.textContent = " ";
        guessed.textContent = " ";
        lowOrHigh.textContent = "Guess what the new number is!";
        lowOrHigh.className = "new";
        randNum = Math.floor(Math.random() * 100)+1;
        resetButton.parentNode.removeChild(resetButton);


};




})

/*function gameOver(){
    if(numGuesses === losingScore){
        alert("game over!");
    }
}*/
