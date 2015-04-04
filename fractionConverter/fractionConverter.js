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
  if (number === Math.round(number)) {
    return number + '/' + '1';
  }
  var result = '';
  var decimal = number % 1;
  var whole = number - decimal;
  var decimalNumber = decimal.toString();
  decimalNumber = decimalNumber.slice(2);
  decimalNumber = Number(decimalNumber);
  var decimalPlace = decimalNumber.toString().length;
  console.log(decimalNumber);

  var commonDenominator = function (target) {
    var numerator = target;
    var denominator = Math.pow(10, decimalPlace);
    console.log("numer:" + numerator);
    console.log("denom: "+ denominator);

    for (var i = numerator; i > 0; i--) {
      if (numerator % i === 0 && denominator % i === 0) {
        var bottom = (denominator / i).toString();
        var top = ((numerator / i) + (whole * bottom)).toString();
        result = top + '/' + bottom;
        return;
      }
    }
  };

  commonDenominator(decimalNumber);
  return result;
};
