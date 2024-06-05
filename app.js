
// *****create a function to add two numbers
function sumOfTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log(sumOfTwoNumbers(3, 5));

// *****create a function to convert hours to seconds
function hoursIntoSeconds(hours) {
    return hours * 60 * 60;
}
console.log(hoursIntoSeconds(2));

// *****create a function that calculates the perimeter of a rectangle
function calcPerimeter(length, width){
    return 2 * (length + width);
}
console.log(calcPerimeter(10, 20));

// *****create a function to calculate the area of a triangle
function calcTriangleArea(base, height) {
    return 0.5 * base * height;
}
console.log(calcTriangleArea(10, 10));

// *****create a function that accepts a string and adds 'Frontend' onto the end of it
function appendFrontend(word) {
    return word + 'Frontend';
} 
console.log(appendFrontend('Apple'));

// *****Greater than 100? Given two numbers, return true if the sum of both numbers is greater than 100.
// Otherwise, return false.
function sumGreaterThan100(num1, num2){
    return num1 + num2 > 100;
}
console.log(sumGreaterThan100(50, 60));

// *****write a function that accepts a number and returns true if it is less than or equal to zero. 
// Otherwise, return false.
function lessThanOrEqualToZero(num) {
    return num <= 0;
}
console.log(lessThanOrEqualToZero(0));

// *****Given a boolean (true or false), return the opposite boolean.
function oppositeBoolean(value) {
        return !value;
    }
console.log(oppositeBoolean(true));

// *****Given ANY element, return true if it is NOT the number 0.
function isNotZero(num) {
    return num !== 0;
    }
console.log(isNotZero(5));

// *****Given two numbers, return their remainder when divided by each other.
function calcRemainder(num1, num2) {
    return num1 % num2;
}
console.log(calcRemainder(7, 8));

// *****Given two numbers, return true if the number is odd.
function isOdd(num) {
    return num % 2 !== 0;
}
console.log(isOdd(15));

// *****Create a function that takes a number argument and returns 1 if the number is even.
// If the number is odd, return -1. Use the ternary operator (? stmt1(if) : stmt2(else))
function booleanInteger(num) {
    return num % 2 ===0 ? 1 : -1;
}
console.log(booleanInteger(5));

// *****Create a function that takes in two strings. If the first string is equal to 
// 'LOGGED_IN' AND the second string is equal to 'SUBSCRIBED' return true, otherwise
// return false.
function isLoggedInAndSubscribed(LOGGED_IN, SUBSCRIBED) {
    return LOGGED_IN === 'LOGGED_IN' && SUBSCRIBED === 'SUBSCRIBED' ? true : false;
}
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
