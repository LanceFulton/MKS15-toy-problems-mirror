
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

var getNum = function(numeral, i) {
  return DIGIT_VALUES[numeral[i]];
}

var translateRomanNumeral = function(romanNumeral){
// TODO: Implement me!
  total = 0;
  var i = 0;

  while (i < romanNumeral.length) {

    if ( (i < romanNumeral.length - 1) && (getNum(romanNumeral, i) < getNum(romanNumeral, i + 1)) ) {
      total += getNum(romanNumeral, i+1) - getNum(romanNumeral, i);
      i+=2;
    } else {
      total += getNum(romanNumeral, i);
      i++;
    }
  }

  return total;

};
