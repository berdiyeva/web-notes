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

let seatingChart = [['Kristen', 'Erik', 'Namita'], ['Kevin', 'Joe', 'Jane', 'Olivia'], ['Yuma', 'Sakura', 'Jack', 'Steven']]
for (let i = 0; i < seatingChart.length; i++) {
    let row = seatingChart[i];
    console.log(`Row ${i+1} ${row}`)
    // for (let j = 0; j < row.length; j++) {
    //     console.log(row[j])
    // }
}
