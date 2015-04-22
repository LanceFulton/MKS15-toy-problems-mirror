
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
  
  // translate each digit to greek numeral
    // iterate through string
    // use DIGIT_VALUES to push value to values array

  var values = [];
  var sum = 0;

  for (var i = 0 ; i < romanNumeral.length ; i++){
    var digit = DIGIT_VALUES[ romanNumeral.charAt(i) ];
    var newValue = {};
    newValue.digit = digit;
    values.push(newValue);
  }

  console.log('values: ', values);

  // prepare for summing
    // for each number, compare it to the number to its right
    // record if it is lesser or greater than the right number

  for (var i = 0 ; i < values.length ; i++){
    if (values[i]['digit'] > values[i+1]['digit']){
      values[i]['relation'] = 'greater';
    } else if (values[i]['digit'] < values[i+1]['digit']){
      values[i]['relation'] = 'less than';
    } else {
      values[i]['relation'] = 'equal';
    }
  }

  console.log('values: ', values)

};























