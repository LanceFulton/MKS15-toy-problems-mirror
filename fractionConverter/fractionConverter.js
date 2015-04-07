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
  var whole = Math.floor(number);
  var decimal = +(number % 1).toFixed(4);
  var fraction = 1;
  var denominator = decimal > 0 ? 1 / decimal : 1;
  while( denominator % 1 !== 0 ) {
    denominator = denominator * 2;
    fraction++;
  }
  var numerator = decimal > 0 ? whole * denominator + fraction : whole * denominator;

  return numerator + '/' + denominator;
};


// solution
var toFraction = function(num) {
  var denom = 1;
  if( num < 0 ) {
    return '-' + toFraction(-num);
  } else {
    while( num % 1 !== 0 ) {
      num = num * 10;
      denom = denom * 10;
    }
  }

  var gcd = 1;
  for( var i = num; i > 0; i-- ) {
    gcd = i;
    break;
  }

  return num/gcd + '/' + denom/gcd;
};
