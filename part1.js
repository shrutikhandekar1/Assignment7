/*
1. Write a function called halfNumber() that accepts one argument (a number), 
divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".
*/

var myNumber1 = 5;
function halfNumber(number) {
    "use strict";
    var newNumber = number / 2;
    return newNumber;
}

window.document.write("Half of " + myNumber1 + " is " + halfNumber(myNumber1) + "<br>");



/*
2. Write a function called squareNumber() that accepts one argument (a number), square that number, 
and return the result. It should also log a string like "The result of squaring the number 3 is 9."
*/

var myNumber2 = 5;

function squareNumber(number) {
    "use strict";
    var newNumber = number * number;
    return newNumber;
}

window.document.write("The result of squaring the number " + myNumber2 + " is " + squareNumber(myNumber2) + "<br>");




/*
3. Write a function called percentOf() that accepts two numbers, figure out what percent the first number 
represents of the second number, and return the result. It should log a string like "2 is 50% of 4."
*/

var myNumber3 = 5;
var percent = 50;

function percentOf(percentValue, number) {
    "use strict";
    var newNumber = (number * percentValue) / 100;
    return newNumber;
}

window.document.write(percentOf(percent, myNumber3) + " is " +  percent + "% of " + myNumber3 + "<br>");



/*
4. Write a function called findModulus() that accepts two numbers. Within the function write a statement that 
returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."
*/

var myNumber4 = 5;
var myNumber5 = 11;

function findModulus(number1, number2) {
    "use strict";
    var newNumber = number2 % number1;
    return newNumber;
}

window.document.write(findModulus(myNumber4, myNumber5) + " is the modulus of " +  myNumber4 + " & " + myNumber5 + "<br>");



/*
5. Create a JavaScript function that accepts a certain amount of numbers as parameters. Those numbers should be 
collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the 
sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type 
conversion global functions to accomplish this task.
*/


var sumOfNumbers = 0;

function sum(number) {
    "use strict";
    sumOfNumbers = sumOfNumbers + number;
    return sumOfNumbers;

}

function main() {
    "use strict";
    var number;
    var totalSum;
    var enterMore = "y";
    
    while (enterMore === "y") {
        
        number = parseInt(window.prompt("Enter a number"));
        enterMore = window.prompt("Do you want to enter more numbers? (Y/N)");
        totalSum = sum(number);
    }
     
    return totalSum;
}

window.document.write("The total sums of the numbers is " + main() + "<br>");


