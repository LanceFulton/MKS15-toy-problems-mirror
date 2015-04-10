
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
  if (!romanNumeral  || romanNumeral.length ===0) {
    return null;
  }
  var arr = romanNumeral.split('');
  var sum=0;
  var biggestNum; 

  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      biggestNum = DIGIT_VALUES[arr[i]];
    }
    switch (arr[i]) {
      case 'V':
      case 'X':
      case 'L':
      case 'C':
      case 'D':
      case 'M':
        if ( DIGIT_VALUES[arr[i]] > biggestNum ) {
          return null; // invalid
        } else {
          sum += DIGIT_VALUES[arr[i]];
        }
        break;

      case 'I':
        if (arr[i+1]!== 'I') {
          sum -= DIGIT_VALUES[arr[i]];
        } else if (!arr[i+1]) {
          sum += DIGIT_VALUES[arr[i]];
        } else {
          sum += DIGIT_VALUES[arr[i]];
        }
        break;

      default: // invalid roman numeral detected
      return null;
    }
  }

  return sum;

};

console.log(translateRomanNumeral("LX"));
console.log(translateRomanNumeral("DIS"));
console.log(translateRomanNumeral("XIV"));
console.log(translateRomanNumeral("VIC"));