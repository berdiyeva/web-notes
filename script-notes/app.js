// Notes on the Logical AND 
// const password = prompt("Enter your password: ");
// if (password.length >= 7 && password.indexOf(' ') === -1) {
//     console.log('Valid Password!');
// } else {
//     console.log('The password should be at least 7 chars and no spaces!');
// }

//For loops 
// for (let i = 1; i <= 10; i ++) {
//     console.log(i);
// }

//Even Numbers 
// for (let even = 0; even <=20; even += 2) {
//     console.log(even);
// }

//Count Down 
// for (let num = 100; num >= 0; num -= 10) {
//     console.log(num);
// }

//Nested Loops
// for (let outer = 1; outer < 5; outer ++) {
//     console.log(`Outer is ${outer}`);
//     for (let inner = 3; inner > 0; inner --) {
//         console.log(`        Inner is ${inner}`);
//     }
// }

// let seatingChart = [['Kristen', 'Erik', 'Namita'], ['Kevin', 'Joe', 'Jane', 'Olivia'], ['Yuma', 'Sakura', 'Jack', 'Steven']]
// for (let i = 0; i < seatingChart.length; i++) {
//     let row = seatingChart[i];
//     console.log(`Row ${i+1} ${row}`)
    // for (let j = 0; j < row.length; j++) {
    //     console.log(row[j])
    // }
// }

// const secret = "BabyHippo";
// let guess = prompt("enter the secret code...");
// while (guess !== secret) {
//     guess = prompt("enter the secret code...");
// }
// console.log("Congrats you guessed the secret!")

// let input = prompt("Hey say something!");
// while (true) {
//     input = prompt(input);
//     if (input.toLocaleLowerCase() === "stop copying me") {
//         break;
//     }
// }
// console.log("Okay you win!")

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     if (i === 10) break;
// }

//the simple guessing game 
let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const randomNum = Math.floor(Math.random() * maximum) + 1;
console.log(randomNum);

let guess = prompt("Enter your first guess!");
let attempts = 1;

while (parseInt(guess) !== randomNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > randomNum) {
        guess = prompt("Too high! Enter a new guess!");
        attempts++;
    } else if (guess < randomNum) {
        guess = prompt("Too low! Enter a new guess!");
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit the game.")
    }
}
if (guess === 'q') {
    console.log("Ok, bye!")
} else {
    console.log(`Congrats! You win! It took you ${attempts} guesses`)
}
