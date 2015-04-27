
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

  var numArray = romanNumeral.split(''); //not needed

  for (var i = 0; i < numArray.length; i++) {
    if (DIGIT_VALUES[numArray[i + 1]] > DIGIT_VALUES[numArray[i]]) {
      result += (DIGIT_VALUES[numArray[i + 1]] - DIGIT_VALUES[numArray[i]]);
      result -= DIGIT_VALUES[numArray[i + 1]];
    } else {
      result += DIGIT_VALUES[numArray[i]];
    }
  }
  return result;
};


//____________________________SOLUTION______________________________

var translateRomanNumeral = function(romanNumeral) {
  var total = 0;
  for (var i = 0; i < romanNumeral.length; i++) {
    var currentValue = DIGIT_VALUES[romanNumeral.charAt(i)];
    var nextValue = DIGIT_VALUES[romanNumeral.charAt(i+1)];
 
    if (nextValue && currentValue < nextValue){
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }
  return total;
};










