/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */


var toFraction = function(number) {
  // Your code here
  //I need to take a look at the intial fraction thats being passed in. 
  //if whole number just divide by one
  //if X.5 then we know it can be divided by two. 
  var num1, num2;
  var remain = 0;
  if (number.floor !== 0){
    remain = number % Math.floor(number)).toFixed1;//Getting the remainder of the initial number
  }
  


  if (number % 0.5 === 0) {//Checks for numbers divisible by two
    num1 = Math.floor(number) * 2 + 1;
    num2 = 2
  } 
  if (number === Math.round(number)) {//Checks for whole numbers and produces irregular fractions.
    num1 = number; 
    num2 = 1;
  }
  return num1 + '/' + num2;
};
