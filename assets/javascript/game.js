//Setting the game up with 9 lives and selecting the random word.
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var letterPicked = alphabet[Math.floor(Math.random() * alphabet.length)];
var guessesLeft = 9 //lives left
var wins = 0;
var losses = 0;
var guessMade = [];
var audioLoss = new Audio('assets/audio/gameover.wav');
var audioWin = new Audio('assets/audio/winner.wav');

// window.addEventListener("keyup", eventKeyPressed, true);
document.onkeyup = function(entry) {
    
    //capture the user's guess and sets to lowercase
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    //checks the user's guess against the randomly selected letter
    if (userGuess == letterPicked) {
        wins++;
        letterPicked = alphabet[Math.floor(Math.random() * alphabet.length)];
        audioWin.play();
        alert ("Congrats!  You are psychic!");
        guessesLeft = 9;
        guessMade = [];
    }
    else {
        guessMade.push (event.key);
        guessesLeft--;
    }
    if (guessesLeft == 0) {   
        audioLoss.play();
        alert("Game Over Man!");
        losses ++;
        guessesLeft = 9;
        guessMade = [];
        letterPicked = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('loss').innerHTML = "losses: " + losses;
document.getElementById('guess').innerHTML = "Guesses left: " + guessesLeft;
document.getElementById('guessmade').innerHTML = "Your guesses so far: [" + guessMade + "]";
}