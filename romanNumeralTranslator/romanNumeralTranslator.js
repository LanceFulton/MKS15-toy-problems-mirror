
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

//doesn't subtract yet, ran out of time

var translateRomanNumeral = function(romanNumeral) {

  var results = 0;

  for (var i = 0; i < romanNumeral.length; i++) {
    if (romanNumeral[i] !== 'I' && romanNumeral[i] !== 'V' && romanNumeral[i] !== 'X' && romanNumeral[i] !== 'L' && romanNumeral[i] !== 'C' && romanNumeral[i] !== 'D' && romanNumeral[i] !== 'M') {
      return null;
    }
    results += DIGIT_VALUES[romanNumeral[i]];
  }

  return results;

};
