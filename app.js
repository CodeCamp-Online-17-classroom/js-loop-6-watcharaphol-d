let targetNum = null;
let temp = null;
let guessNum = null;
let guessRange = [0, 100];

// Player-1 Fill the number
while (true) {
    temp = prompt(`PLAYER 1: \n\tEnter the target number 1-100:`);
    if (temp == "") {
        alert("PLAYER 1: \n\tYou are not enter any target number in the field!");
    } else {
        temp = +temp;
        if (isNaN(temp)) {
            alert("PLAYER 1: \n\tThe received value is NOT NUMBER");
            continue;
        } else if (temp >= 0 && temp <= 100) {
            targetNum = temp;
            temp = null;
            break;
        } else {
            alert("PLAYER 1: \n\tThe received number is OUT OF RANGE");
        }
    }
}

// Player-2 Guess the number
while (true) {
    guessNum = prompt(`PLAYER 2: \n\tGuess the player-1 target number ${guessRange[0]} - ${guessRange[1]}:`);
    if (guessNum == "") {
        alert("PLAYER 2: \n\tYou don't guess any number!");
    } else {
        guessNum = +guessNum;
        if (isNaN(guessNum)) {
            alert("PLAYER 2: \n\tThe received value is NOT NUMBER");
            continue;
        } else if (!(guessNum >= 0 && guessNum <= 100)) {
            alert("PLAYER 2: \n\tThe received number is OUT OF RANGE");
        }
        else {
            if (guessNum < targetNum) {
                alert(`The guess number ${guessNum} is TOO LOW`);
                guessRange[0] = guessNum;
            } else if (guessNum > targetNum) {
                alert(`The guess number ${guessNum} is TOO HIGH`);
                guessRange[1] = guessNum;
            } else {
                alert(`Congratulations, the target player-1 number is ${targetNum}`);
                break;
            }
        }
    }
}