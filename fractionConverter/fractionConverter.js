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
  var decimal = number % 1;
  var whole = number - decimal;
  var decimalNumber = decimal.toString();
  decimalNumber = decimalNumber.slice(2);
  decimalNumber = Number(decimalNumber);
 // console.log(decimalNumber);
  var decimalPlace = decimalNumber.toString().length;
  var result = '';

  var commonDenominator = function (target) {
    var numerator = target;
    var denominator = decimalPlace * 10;
   // console.log("denom: ", denominator);

    for (var i = numerator; i > 1; i--) {
      if (numerator % i === 0 && denominator % i === 0) {
        var top = (numerator / i).toString();
        var bottom = (denominator / i).toString();
        result = top + '/' + bottom;
      }
    }
  };

  commonDenominator(decimalNumber);
  return result;
};
