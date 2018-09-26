var letters =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var movesleft = 9;
var guessesSoFar = [];
var computerChoice;

// this function has computer choose a random letter
var newLetter = function() {
	computerChoice = letters[Math.floor(Math.random() * letters.length)];
	};

// this function is called to push the guesses into the array and display it on webpage
var soFar = function() {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guessesSoFar.join(",");
	};

// this function displays the number of moves left
var guessesLeft = function() {
    document.getElementById("left").innerHTML = "Guesses Left: " + movesleft;
	};


// this function sets clock back to zero for a new round of play
var newGame = function() {
	guessedLetters = [];
    guessesSoFar = []
	movesleft = 9;
    newLetter();
    guessesLeft();
    soFar();
	}

// This is the game play
// game begins with each press of the letter keys
// NOTE!!!! need to add blocker for repeated key presses and null like ctrl and esc
document.onkeyup = function(event) {
	console.log("you've entered the game")
	newLetter()
	console.log("computer has chosen " + computerChoice);
	var userGuess = event.key;
	movesleft--;
	
	console.log("you have " + movesleft + " moves left")

	// update number of guesses left on web page
    guessesSoFar.push(userGuess);
    soFar();
	guessesLeft();

	// check the users choice against the computers
    if (movesleft > 0) {
		// this is the path for win 
        if (userGuess == computerChoice) {
        	wins++;
			alert("Wow, you read my mind!!!")
			document.getElementById("wins").innerHTML = "Wins:" + wins;
			newGame();
		}
		
		// this is the path for loss
			} else if (movesleft == 0) {
				losses++;
				document.getElementById("losses").innerHTML = "Losses:" + losses;
				alert("Sorry, you lost!");
				newGame();
				}
	};