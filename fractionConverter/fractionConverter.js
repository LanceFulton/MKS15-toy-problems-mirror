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

var log10 = function(n) {
  return Math.log(n)/Math.log(10);
}

var toFraction = function(number) {

  var denominator = 1;
  var orderOfMag = Math.floor(log10(number) + 1)
  while (number !== Math.floor(number)) {
    number *= 10;
    denominator *= 10;
  }
  denominator *= Math.pow(10,orderOfMag);
  var g = gcd(number, denominator);
  numerator = number/g;
  denominator = denominator/g;

  return "'"+numerator+"/"+denominator+"'";

}

