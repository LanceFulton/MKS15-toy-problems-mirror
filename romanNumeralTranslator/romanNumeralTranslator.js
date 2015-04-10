
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
 *
 * http://www.onlineconversion.com/roman_numerals_advanced.htm
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
  var output = 0;

  var convert = function(k) {
    var val = DIGIT_VALUES[k];
    return val;
  }

  for (var i = 0; i < romanNumeral.length; i++) {
    var p = convert(romanNumeral.charAt(i-1));
    var m = convert(romanNumeral.charAt(i));
    if (i>0 && p<m) {
      m = m - p*2; // Subtract the p from the previous loop, and substract p again from THIS loop.
    }
    console.log(" " + m);
    output += m;
  };  

  return output;
};



console.log( "Test 1: " + translateRomanNumeral("LX") );
console.log( "Test 2: " + translateRomanNumeral("IV") );
console.log( "Test 3: " + translateRomanNumeral("MMIII") );
console.log( "Test 3: " + translateRomanNumeral("MMMMCMXCIX") );
