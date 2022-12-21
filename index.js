let choices = ["rock", "paper", "scissors"];

function getComputerChoice () {
    var computer_choice = Math.floor(Math.random() * 3);
    console.log("I pick: " + choices[computer_choice]);
    return choices[computer_choice];
};

function getUserChoice () {
    var user_choice = prompt('Enter choice here: (rock, paper, scissors)').toLowerCase();
    if (user_choice !== null && choices.indexOf(user_choice) !== -1) {
        let computer_choice = getComputerChoice();
        if (user_choice === computer_choice) {
            var result = "D";
            console.log('Draw');
            return result;
        } else if (
            (user_choice === 'rock' && computer_choice === 'scissors') ||
            (user_choice === 'paper' && computer_choice === 'rock') ||
            (user_choice === 'scissors' && computer_choice === 'paper')
        ) {
            var result = "W";
            console.log('You win!');
            return result;
        } else {
            var result = "L";
            console.log('You lose!');
            return result;
        }
    }
}

function game() {
    var user = 0;
    var computer = 0;
    for (var i=0; i < 5; i++) {
        var result = getUserChoice();
        if (result === 'D') {
            // pass
        } else if (result === 'W') {
            user++;
        } else {
            computer++;
        }
        console.log(user + ' : ' + computer);
    }
}