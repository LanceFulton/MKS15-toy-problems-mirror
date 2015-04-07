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

var gcd = function(a,b) {
  while (b>0) {
    t = b;
    b = a % b;
    a = t;
  }
  return a;
}

var toFraction = function(number) {
  var originalNumber = number;
  var denominator = 1;

  while (number !== Math.floor(number)) {
    denominator *= 10;
    number = originalNumber*denominator;
  }

  var g = gcd(number, denominator);
  numerator = number/g;
  denominator = denominator/g;

  return numerator+"/"+denominator;

}

