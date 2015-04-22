
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
// TODO: Implement me!

  var number = DIGIT_VALUES[romanNumeral[romanNumeral.length - 1]];

  //Begin at end of the string - 1 to implement subtractive operations if necessary
  for(var i = romanNumeral.length - 2; i >= 0; i--){
    if(DIGIT_VALUES[romanNumeral[i-1]] < DIGIT_VALUES[romanNumeral[i]] && DIGIT_VALUES[romanNumeral[i-2]] < DIGIT_VALUES[romanNumeral[i]]){
      return null;
    }

    //if there is a numeral to the right of the current position
    if(romanNumeral[i+1]){
    //check if that numeral value is greater than the current value
      if(DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i+1]]){
        number -= DIGIT_VALUES[romanNumeral[i]];
      } else {
        number += DIGIT_VALUES[romanNumeral[i]];
      }
    }
  }

  return number;
};
