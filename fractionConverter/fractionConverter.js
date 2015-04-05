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

// Had issues getting 3.0 to a string.. decided to add an if statement - wasted lots of time on what was a v. simple answer.

var toFraction = function(number) {
  var gcd = function(a, b) {
    if ( ! b) {
      return a;
    }
    return gcd(b, a % b);
  };
  if (number % 1 === 0){
    wholeNum = number+ '/1';
    return wholeNum;
  } else {
    var result;
    var numberString = number+ '';
    var digits = numberString.split('');
    var decimal = digits.indexOf('.');
    var decimalDigits = digits.slice(decimal+1, digits.length);
    var magnitudeDeci = decimalDigits.length;
    var decimals = decimalDigits.join('');
    var denominator = Math.pow(10, magnitudeDeci);
    var integers = digits.slice(0, decimal);
    var magnitudeInt = integers.length;
    integers = parseInt(integers.join(''));
    var intNumerator = (integers*denominator + parseInt(decimals));
    var gcf = gcd(intNumerator, denominator);
    return ((integers*denominator/gcf) + decimals/gcf + '/' + denominator/gcf);
}
}


