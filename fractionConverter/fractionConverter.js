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
  var lim = Math.min(number, denom);
  while (lim > 1) {
    if (number % lim === 0 && denom % lim === 0) {
      number /= lim;
      denom /= lim;
      break;
    } else {
      lim--;
    }
  }

  return number + '/' + denom;
};
