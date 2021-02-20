'use strict';
// console.log('hello');
// REPL.it
// ES - ES1, ES2, ES3, ES4....... 2015 ES6
// DETECTS BUGS EASILY
// PREVENT BUGS FROM HAPPENING

// INT, CHAR, DOUBLE, FLOAT
// VAR, LET, CONST

// let ok = false;
// console.log(typeof ok);
// in JS, DATA TYPES EXIST , BUT WE DO NOT DECLARE THEM SEPARATELY. THE JS ENGINE UNDERSTANDS THE DATA TYPE AUTOMATICALLY

// variable - named storage
// data can be - a number, a string, boolean
// 'true', 'false'
// true, false
// let msg = 'hello learners';
// console.log(msg);
// console.log(typeof msg);
// let character = 'c';
// console.log(typeof character);
// const - means constant - the values you do not want to change
// var - before ES6 (old school)
// let - modern way to declare variables

// IN CLASS CODING CHALLENGE 1 -
// 1. declare 2 variables - admin and name
// 2. name should have value of 'joe'
// 3. admin should have value of name

// let admin, name;
// name = 'joe';
// admin = name;

// datatypes
// 1. Number
// let n = 12.35;
// let n = 15;
// let n = 12.87439128319273;
// special numeric values - Infinity, -Infinity, NaN

// infinity - 1/0
// -infinity - -1/0
// NaN - not a number - ('joe'/2)

//  numbers include int, float, double

// 2.BigINt
// 2^53-1 - this is the limit of nNumber data type
//  let x = 90071992547409916598486515615648n;
// bigINt is supported in chrome, safari, firefox but not in IE

// 3. String
//  3 ways to declare strings
// "joe"
// 'joe'
// `joe`

// 4. Boolean
//  true or false
// let n = true;
// let x = 4 < 1;
// console.log(x);

// 5. null datatype
// let x = null;

// 6. undefined
// let y;
// console.log(y);

// what is javascript
// what are variables
// datatypes
// strict mode
// typeof
// console.log

// TYPE CONVERSION

// let value = true; //boolean
// EXPLICIT
// value = String(value); //now it becomes a string
// console.log(typeof value);

// in js, when you use operators, sometimes it changes to Number
// IMPLICIT
// console.log('6' / '2');
// check the operator
// check the data types of operands
// now, 6 and 2 become numbers
// console.log('6' + '2');
// console.log('6' / 2);
// console.log('4' * '7');
// console.log('8' - '1');
// console.log('62' - '2');
// console.log('4' * 7);

// let age = 'any normal string';
// age = Number(age);
// alert('welcome to this page, we use cookies on this page');
// console.log(age);
// // NAN has the data type of Number
// console.log(typeof age);

// Boolean : 2 Rules
// 1. empty values - 0, empty String, null, undefined, NaN ->>>> false
// 2. other than them everything is true

// console.log(Boolean('0'));

// 1. addition +
// 2. subtraction -
// 3. multiplication *
// 4. division /
// 5. remainder %
// 6. exponentiation **
// console.log(2**2);
// console.log(5%2);
// console.log(8/2);
// console.log(8*2);
// console.log(4+2);
// let x = true;
// console.log(+x);
// x = Number(x);
// console.log(x);
// console.log(typeof x);
// increment  ++
// decrement  --

// comparason operators return bool
// console.log(2 > 1);
// console.log(2 == 2);
// console.log('Z' > 'A');
// console.log('Glow'> 'Glee');
// line 139 - only check the value
// console.log('5' == 5);
// line 141 - checks the data type also
// console.log('2' === 2);
// 1. value - Same
// 2. data type - not same
// console.log(true == 0);
// console.log('G' > 'g');
// console.log('glee' == 'glee');

// let year = '2021';

// if (false) {
//     console.log('corona is almost over');
// } else {
//     console.log('it is not');
// }

// 1 -> true
// 0-> false
// let year = ;

// if(year == 2021){
//     console.log('pandemic over');
// }

// else if(year< 2021){
//     console.log("pandemic exists");
// }
// else{
//     console.log("you are in future");
// }

// -> year = 2021 ->
// -> year < 2021 -> pademic exists
// -> year > 2021 -> you are in the future

// 1. let oranges = 35
//     let apples = 40
// 2. let oranges = 3
//     let apples = 30
// 3. let oranges = 40
//     let apples = 0
// 1. You have a bag of apples and a bag of oranges.
// You need to take fruits home, but there is a rule:
//     a.if the number of oranges are greater than 0, then take one orange from the bag
// b.if the number of oranges is 0, then take one apple from the bag
// c.repeat this process till you get 50 fruits in your basket.
// d. if it is not possible to get 50 fruits, then print "sorry cannot do it, the basket is empty"

// let us rewind
// 1. type CONVERSION
// 2. operators
// 3. comparisons
// 4. if else
// ->>> 1 is true, 0 is false
// ->>> ==, ===
// ->>> '6'/'3'

// // tomorrow ->
// 1. loops
// 2. functions
// 3. DOM manipulation

// PROJECTS FOR BEGINNERS IN JS
// 1. CALCULATOR
// 2. MAP
// 3. GAME
// 4. LOGIN AUTHENTICATION
// 5. TO-DO LIST
// 6. QUIZ
// 7. VIRTUAL KEYPAD
// let s = 'joe';
// console.log(s[0]);
// // 0-> j
// // 1-> o
// // 2-> e

// if - else
// DOM - document object model
// example - bulb changes color to yellow
// click on button - color might change

// document - > index.html
// querySelector - > class, id

// logic building
// if the number i entered is same as the number behind question mark - then i win
// if score becomes 0 then i lost the game
// 1. number i entered -> got it!
//i want to use the tag with "guess" class
// class-> dot
// id -> #

// 2. the number behind the question mark????????? - got it
// i dont know the number behind question mark
// Math.random();
// 0.1 * 20 =
// 0.9999999999999999999999
// generates a number between 0 and 1
//  0 to 20
// 19.99999999999999999999999

// console.log(guess);

// if the number i entered is same as the number behind question mark - then i win
// edge case->if user entered nothing
// exclamation means negation
// exclamation makes true to false
// exclamation makes false to true
// guess has a null value(false) -> !guess will be true

// LOGIC 1 - GET THE NUMBERS
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// camelCase
// lOGIC 2 - MATCH THE NUMBERS
// logic for function
// i change the message tp be displayed according to the score
function displayMessage(msg) {
    document.querySelector('.message').textContent = msg;
}

// logic -
// 1. i need to select check button -> document.q.('.check')
// 2. i need to play the game when it is clicked

let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    if (!guess) {
        displayMessage('Invalid input');
    } else if (guess == secretNumber) {
        displayMessage('You won');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
    } else if (guess !== secretNumber) {
        // ?
        // condition ? _a___ : __b__
        guess > secretNumber ?
            displayMessage('Too high') :
            displayMessage('Too low');

        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// what is changing:
// color should be returned back to normal - black DONE
// my question mark should come back again DONE
// my score should be reset to 20 DONE
// my html input section should be empty again DONE
// my message should change back to start playing DONE
// i need a new random number

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('body').style.backgroundColor = '#000';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    displayMessage('Start playing');
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});

// functions - DRY principle
// LOGIC 3 - CHECK FOR SCORE AND HIGHSCORE
// i want my score to decrease if my number is wrong
// but if my  number is right , i need to increase score by one , then i will check highscore< my score then i have a new highscore

// lOGIC 4 - DISPLAY RELEVANT MSGS
// ------------------------------------->>
// LOOPS
// to iterate over something again and again
// 2,3,4,5,6
// clg(2)
// clg(3)
// clg(4)

// i had 100 elements -> i would never want to write 100 lines of code right?
// better way -> loops!

// while loop
// syntax -> while(condition is true){
// execute this code
// }
// let i = 0;
// while (i < 3) {
//     console.log(i);
//     i++;
// }
// i=0 -> condition is true -> clg(i)
// i=1 -> condition is true -> clg(i)
// i=2 -> condition is true -> clg(i)
// i=3 -> condition is false -> stop the loop
// remember to avoid infinite loop
// let i = 4;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }

// for loop
// syntax -> for(start ; condition ; increment or decrement){
// code to be executed
// }
// let i = 0;
// while (i < 3) {

//     i++;
// }
// let i =0;
// for (i; i < 3; i++) {
//     console.log(i);
// }

// do-while
// syntax -> do{
//     code to be executed
// } while(condition)

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i <= 3);

// let i = 5;
// for (i; i < 10; i += 2) {
//     if (i % 2 == 0) console.log('even');
//     else console.log('odd');
// }
// iteration 1 - > i = 5 -> i%2!=0 -> odd
// iteration 2 -> i = 7 -> odd
// iteration 3 -> i= 9 -> odd
// iteration 4 -> i = 11 -> loop ends

// --------------------------------------->
// FUNCTIONS
// they are made to stop code repetition

// let i = 5 ;
// let j = 6 ;
// let k = 10 ;
// let l = 15 ;

// for each variable i need to add 5 to every variable then multiply is by 3 then add 7 ..........

// i+=5
// j+=5
// k+=5
// l+=5
// solution -> create functions
// syntax -> function nameOfTheFunction(parameters){
// inside code of function
// }

// function definition
// function showMessage(i) {
//     console.log(i);
//     // console.log('hello everybody');
// }
// function calls
// function call 1 -> 5 goes in the function -> i becomes 5 -> output it
// showMessage(5);
// // function call 2 -> 6 goes in the function -> i becomes 6
// showMessage(6);
// showMessage(10); // i is 10
// showMessage(11); // i is 11

// function showMessage(i) {
//     // console.log(typeof st);
//     console.log(i);
// }
// print 0 to 99
// clg 1
// clg 2
// for (let i = 0; i < 100; i++) {
//     showMessage(i);
// }
// let returnValue = showMessage(10);
// console.log(returnValue);

// FUNCTION EXPRESSION

// const showMessage = function(i) {
//     // console.log(typeof st);
//     console.log(i);
// };
// showMessage(10);

// function -> simple function

// function f1(i) {
//     console.log(i);
// }
// f1(10);

// function f1(k, j) {
//     console.log(k);
//     console.log(j);
// }

// f1(20, 30);
// function expression
// f2(15);
// const f2 = function(i) {
//     console.log(i);
// };

// simple functions can be called anywhere but function expressions can only be called after they are declared

// ARROW FUNCTIONS
showMessage(10);
var showMessage = i => {
    console.log(i);
};
// hoisting

// loops -> for, while, do-while
// functions, function expression, arrow functions
