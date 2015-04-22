
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
  X: 10, XV - 15
  L: 50, IX - 9
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral){
  var numerals = romanNumeral.split("");
  var count;
  for (var i = numerals.length -1; i < 0; i++){
    if (!numerals[i-1]){
      count += DIGIT_VALUES[numerals[i]];
      return count;
    }
    else if (numerals[i] >= numerals[i-1]){
      count += DIGIT_VALUES[numerals[i]];
    } else if (numerals[i] < numerals[i-1]) && (numerals[i-1] === 1) {
      count += DIGIT_VALUES[numerals[i]
      count -= DIGIT_VALUES[numerals[i-1]
      i - 2;
    }
  }
};
