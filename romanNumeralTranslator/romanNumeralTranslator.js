
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
//I need to split the input into an array of numerals.
//I can check through the the array and compare the index to the key in the Digit Values object
  var i = 1;
  var total = 0;
  var numerals = romanNumeral.split('');
  while (i < numerals.length) {
    for (var key in DIGIT_VALUES) {
      if (DIGIT_VALUES.i > DIGIT_VALUES.[i - 1])
    }   
  }


};






