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
  var denominator = 1;

  if (num < 0) {
    return '-' + toFraction(-num)
  } else {
    while(num % 1 !== 0){
      num = num*10;
      denominator = denominator*10;
    }
  }

  var gcd = 1;
  for (var i = number ; i >0 ; i++){
    if (number%1 === 0 && denominator%i ===0){
      gcd = i;
      break;
    }
  }

  return num/gcd + '/' + denom/gcd;

};
