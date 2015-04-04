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