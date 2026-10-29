    const max = 100;
    const min = 1;
    const sealNum = Math.floor(Math.random() * (max - min) + min);

    let guessAttempt = 0;
    let guessLimit = 10;

function guessNumber(event) {
    event.preventDefault();
    let guess = parseFloat(document.getElementById('guess').value);
    console.log(sealNum, guess);
    console.log(sealNum === guess);

    switch(true) {
        case(sealNum === guess): {
            document.getElementById("sealSpeak").textContent = "that is my number."
            document.getElementById("submit").disabled = true;
            break;
        }
    } switch(true) {
        case(sealNum > guess): {
            guessAttempt++;
            document.getElementById("sealSpeak").textContent = "my number is higher."
            break;
        }
    } switch(true) {
        case(guess > sealNum): {
            guessAttempt++
            document.getElementById("sealSpeak").textContent = "my number is lower."
            break;
        }
    };

    if (guessAttempt === guessLimit) {
            document.getElementById("submit").disabled = true;
            document.getElementById("sealSpeak").textContent = "its over."
    };
};

function restartGuess() {
    const restartButton = document.getElementById("guessGame").reset();
    document.getElementById("submit").disabled = false;
    document.getElementById("sealSpeak").textContent = "heheh."
}
