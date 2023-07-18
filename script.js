//1

function toSquare(num) {
    return num*num*num;
}

console.log(`${toSquare(2)}, ${toSquare(3)}`);

//2

const number = Number(prompt('Input NUMBER'));
let salary;

if (typeof number != "number") {
    alert('Its not a number');
} else {
    salary = number - countTaxes(number);
}

console.log(`Размер заработной платы за вычетом налогов равен ${salary}`);

function countTaxes(money) {
    return money*0.13;
}

//3

const number1 = Number(prompt('1'));
const number2 = Number(prompt('2'));
const number3 = Number(prompt('3'));

console.log(maxNumber(number1, number2, number3));

function maxNumber(num1, num2, num3) {
    let max = num1;
    if (num2>max) {
        max=num2;
    } else if (num3>max) {
        max = num3;
    }
    return max;
}

//4

function sum(a, b) {
    return a+b;
}

function substraction(a, b) {
    if (a>b) {
        return a-b;
    } 
    return b-a;
}

function multiplication(a, b) {
    return a*b;
}

function division(a, b) {
    if (a/b) {
        return a/b;
    } 
    return b/a;
}

console.log(sum(3,5), substraction(3,5), multiplication(3,5), division(3,5));