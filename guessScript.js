    let max = 100;
    let min = 1;
    let sealNum = Math.floor(Math.random() * (max - min) + min);

    let guessAttempt = 0;
    let guessLimit = 10;

    // display prev guess

    function guessHistory() {
        
    }

    //comments

let winComment = [
    "ourour. you guessed my number but you won't next time.",
    "you win but i don't have fish to give you. imagine one.",
    "i proclaim i have no extra comment on the matter. oh and you won.",
    "you only won because i was thinking about tinned fish...",
    "i think you should be using your mind powers for something better than guessing games. you win.",
];
let randomWinComment = Math.floor(Math.random() * winComment.length);

let higherComment = [
    "the magic number is higher than your guess.",
    "more than that. i can count to 100.", 
    "add more numbers to that integer. maybe like 2 or 47 more?", 
    "that's not enough tinned fi - sorry i meant numbers. higher.", 
    "your number isn't high enough. quit fooling around.",
    "how high can YOU count? you need to learn higher numbers for this guess."];
let randomHigherComment = Math.floor(Math.random() * higherComment.length);

let lowerComment = [
    "the integer in question is lower than that.",
    "your number isn't low enough. are you taking this seriously?.",
    "no. my number is smaller in size, mass, and density. and value.",
    "eat 70 or 15 fish from - numbers from that guess.",
    "try unlearning the biggest number you know because my number isn't anywhere NEAR as tall as that guess."
];
let randomLowerComment = Math.floor(Math.random() * lowerComment.length);

let loseComment = [
    "womp womp. you're not smarter than the average seal.",
    "i told you to take this seriously but you didn't listen.",
    "i don't believe in positive reinforcement when i benefit from your failure.",
    "time for my tinned fish. i was lying about not having any.",
    "an mri in 2024 scanned a lump of dead salmon and found it could interpret human emotions. that was probably you. come closer."
];
let randomLoseComment = Math.floor(Math.random() * loseComment.length);

let restartComment = [
    "they said if i beat you enough times they'll unbald me.",
    "heheheh okie dokie.",
    "you and i have something special going on.",
    "i like passing the time until i get eaten by an orca with you.",
    "i lied about lying about not having any fish to share."
];
let randomRestartComment = Math.floor(Math.random() * restartComment.length);

    function sealComment() {
        winComment.value = "";
        randomWinComment = Math.floor(Math.random() * winComment.length);
        higherComment.value = "";
        randomHigherComment = Math.floor(Math.random() * higherComment.length);
        lowerComment.value = "";
        randomLowerComment = Math.floor(Math.random() * lowerComment.length);
        loseComment.value = "";
        randomLoseComment = Math.floor(Math.random() * loseComment.length);
        restartComment.value = "";
        randomRestartComment = Math.floor(Math.random() * restartComment.length);
    }

    //actual

function guessNumber(event) {
    event.preventDefault();

    let guess = parseFloat(document.getElementById('guess').value);
    console.log(sealNum, guess);
    console.log(sealNum === guess);

    switch(true) {
        case(sealNum === guess): {
            document.getElementById("numberInput").textContent = 
            document.getElementById("sealSpeaking").textContent = (winComment[randomWinComment])
            document.getElementById("submit").disabled = true;
            break;
        }
    } switch(true) {
        case(sealNum > guess): {
            guessAttempt++;
            document.getElementById("numberInput").textContent = 
            document.getElementById("sealSpeaking").textContent = (higherComment[randomHigherComment])
            break;
        }
    } switch(true) {
        case(guess > sealNum): {
            guessAttempt++;
            document.getElementById("numberInput").textContent = 
            document.getElementById("sealSpeaking").textContent = (lowerComment[randomLowerComment])
            break;
        }
    };

    if (guessAttempt === guessLimit) {
            document.getElementById("numberInput").textContent = 
            document.getElementById("submit").disabled = true;
            document.getElementById("sealSpeaking").textContent = (loseComment[randomLoseComment])
    };
};

// restart

function restartGuess() {
    guess.value = "";
    guessAttempt = 0;
    sealNum = Math.floor(Math.random() * (max - min) + min);
    document.getElementById("submit").disabled = false;
    document.getElementById("sealSpeaking").textContent = (restartComment[randomRestartComment])
    return false;
};