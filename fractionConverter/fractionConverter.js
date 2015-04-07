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

Solution:
1) Turn our decimal into a 1 denominator fraction.
2) multiply out fraction by 10/10 until we eliminate all decimals
3) divide 



toFraction = function(num) {
  var denom = 1;
  while(num % 1 !== 0) { // Keep processing until all decimal places are processed (0.333333336)
    num = num * 10; 
    denom = denom*10;
  }  // --> ex. 15/100 (next reduce)

  // Reduce -- What is the largest divisor for both numbers?
  // 100 vs 15 (Start w/ 15, 14, 13...  5!)
  var gcd = 1;
  for(var i = num; i>0; i--) {
    if(num%i === 0 && denom%i === 0) {
      gcd=i;
      brealk;
    }
  }
  return num/gcd + '/' + denom/gcd;
}
 */

var toFraction = function(number) {
  var retVal = "";

  // Split the values
  var wholeAmt = Math.floor( number ); // ex. 2
  var fractionalAmt = Math.abs( number - wholeAmt ); // ex. .5

  var x = ( wholeAmt / fractionalAmt ) + 1;  // ex. 2 / 0.5 + 1

  var y = 1 + Math.round( x * fractionalAmt );
  
  retVal = x + '/' + y;

  // Numerator = the whole number (ones place)
  // Denom     = Numerator+1 * Denom percent
  //   

  return retVal;
};


console.log( "A: " + toFraction(0.5) );
console.log( "B: " + toFraction(3.0) );
console.log( "C: " + toFraction(2.5) );