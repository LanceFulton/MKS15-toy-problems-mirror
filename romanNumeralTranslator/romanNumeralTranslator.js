
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral){
  var result = 0;
  var lastVal = 0;
  for (var i=0; i<romanNumeral.length; i++) {
    var currentVal = DIGIT_VALUES[romanNumeral[i]];
    if (!currentVal) {
      return null;
    } else {
      result += currentVal;
    }
    if (lastVal < currentVal) {
      result -= 2 * lastVal;
    }
    lastVal = currentVal;
  }
  return result;
};

// console.log(translateRomanNumeral("LX")); // 60
// console.log(translateRomanNumeral("IV")); // 4
