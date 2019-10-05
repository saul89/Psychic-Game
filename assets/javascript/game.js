var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
wins = 0,
losses = 0,
gLeft = 9,
gMade = [],
user,
computer;

computer = letters[Math.floor(Math.random() * letters.length)];

document.addEventListener('keypress', saveKey, false);

function saveKey(e){

    user = e.key.toLowerCase();
    
        if(gLeft > 1){

            if(user === computer){
                wins++;
                document.getElementById("wins").innerHTML = "Wins: " + wins;
                gMade = [];
                document.getElementById("guessesMade").innerHTML = "Your Guesses so far: " + gMade;
                gLeft = 9;
                document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + gLeft;
                computer = letters[Math.floor(Math.random() * letters.length)];
            } else if (!gMade.includes(user)){
                gMade.push(user);
                document.getElementById("guessesMade").innerHTML = "Your Guesses so far: " + gMade;
                gLeft--;
                document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + gLeft;
            }

        } else {
            losses++;
            document.getElementById("losses").innerHTML = "Losses: " + losses;
            gMade = [];
            document.getElementById("guessesMade").innerHTML = "Your Guesses so far: ";
            gLeft = 9;
            document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + gLeft;
            computer = letters[Math.floor(Math.random() * letters.length)];
        }
}