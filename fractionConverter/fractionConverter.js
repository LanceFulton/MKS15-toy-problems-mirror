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
  var arr = number.toString().split('.');
  var whole = +arr[0];
  if(!arr[1]) {
    arr[1]=0;
  }
  var deci = +arr[1];
  var denom = (deci === 0) ? 1 : 10/deci;
  var numerator = denom*whole+ ((deci === 0) ? 0:1) ;
  return numerator + "/" + denom;

};

/*
console.log(toFraction(0.5));
console.log(toFraction(3.0));
console.log(toFraction(2.5));
console.log(toFraction(4.2));
*/