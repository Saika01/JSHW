// 1

const num1 = Number(prompt);
const num2 = Number(prompt);
if (num1<=1 && num2>+3) {
    console.llog('it fits');
} else {
    console.log("it doesn't fit");
}

// 2

let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

test===true ? console.log('+++') : console.log('---');

// 3

let day;

if (day<=10) {
    console.log("It's in first decade");
} else if (day<=20 && day>10) {
    console.log("It's in the second decade");
} else {
    console.log("It's in the third decade");
}

// 4

let userNumber = Number(prompt());
console.log(userNumber%10);
userNumber = Math.floor(userNumber/10);
console.log(userNumber%10);
console.log(Math.floor(userNumber/10));