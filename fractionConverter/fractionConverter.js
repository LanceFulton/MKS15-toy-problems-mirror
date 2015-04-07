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
  if (number % 1 === 0){
    wholeNum = number+'/1'
    return wholeNum;
  } else {
    var numberString = number+'';
    var digits = numberString.split('');
    var decimal = digits.indexOf('.');
    var result = [];
    console.log(decimal);
    if (decimal > 0){
      var integers = digits.slice(0, decimal);
      var base = integers * 10; //*denominator?
    }
    var decimals = digits.slice(decimal+1, digits.length)
    console.log('fractions', fractions)
    // loop through decimals[i]/10 + i/100 + i/1000 + i/10000 ... etc+ 1/100000 + 9/1000000
    // at end of loop, determine denominator, factor in the base x denominator.
  }
};


toFraction(3.3);

