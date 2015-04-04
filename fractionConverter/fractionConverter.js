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
  var numerator = number;
  var denominator = 1;
  while (numerator % 1) {
    numerator *= 10;
    denominator *= 10;
  }

  var gcd = function(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
  };

  var myGcd = gcd(numerator, denominator);
  numerator /= myGcd;
  denominator /= myGcd;

  return numerator+'/'+denominator;
};

// console.log(toFraction(.5));
// console.log(toFraction(3.0));
// console.log(toFraction(2.5));
// console.log(toFraction(1/3));
