#! /usr/bin/env node
import inquirer from 'inquirer';
async function guess_a_number() {
    let userInput;
    do {
        let score = 0;
        for (let index = 0; index < 3; index++) {
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            const user = await inquirer.prompt({
                message: 'Guess a number from 1 till 10',
                type: 'number',
                name: 'guessedNumber',
            });
            console.log(randomNumber);
            if (user.guessedNumber === randomNumber) {
                score++;
                console.log('You guessed correct!');
            }
        }
        console.log(`You guessed ${score} out of 3 correctly.`);
        const exitOrContinue = await inquirer.prompt({
            message: 'Press any key to exit or "y" to play again.',
            type: 'input',
            name: 'option',
        });
        userInput = exitOrContinue.option;
        console.clear();
    } while (userInput === 'y');
}
guess_a_number();
