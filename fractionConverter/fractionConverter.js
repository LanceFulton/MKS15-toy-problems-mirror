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
  var denom = 1;

  while (Math.floor(number) !== number) {
    number *= 10;
    denom *= 10;
  }

  //simplify the fraction
  while (number % 5 === 0 && denom % 5 === 0) {
    number /= 5;
    denom /= 5;
  }
  while (number % 2 === 0 && denom % 2 === 0) {
    number /= 2;
    denom /= 2;
  }

  return number + '/' + denom;
};
