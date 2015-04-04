/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here

  //take the number and put it over 1
  //multiply by 10 for every point after the decimal
  //reduce

  var numString = number.toString();
  var topNumber = number;
  var bottomNumber = 1;

  numString = numString.split('');
  var decimalIndex = numString.indexOf('.');

  var leftOfDecimal = numString.slice(0, decimalIndex);
  var rightOfDecimal = numString.slice(decimalIndex + 1);

  var numDecimals = rightOfDecimal.length;
  rightOfDecimal = rightOfDecimal.join();
  leftOfDecimal = leftOfDecimal.join();
  rightOfDecimal = parseInt(rightOfDecimal);
  leftOfDecimal = parseInt(leftOfDecimal);

  for(var i = 0; i < numDecimals; i++){
    topNumber *= 10;
    bottomNumber *= 10;
  }

  //find greatest common factor and divide by it
  var greatestFactor = greatestCommonFactor(topNumber, bottomNumber);

  topNumber /= greatestFactor;
  bottomNumber /= greatestFactor;

  return topNumber + '/' + bottomNumber;
};


var greatestCommonFactor = function(num1, num2){
  factors1 = {};
  factors2 = {};
  gcf = 0;

  for(var i = 1; i <= num1; i++){
    if(num1 % i === 0){
      factors1[i] = i;
    }
  }

  for(var i = 1; i <= num2; i++){
    if(num2 % i === 0){
      factors2[i] = i;
    }
  }

  for(var key in factors1){
  if(factors2[key] && factors2[key] > gcf){
      gcf = key;
    }
  }

  return gcf;
}

