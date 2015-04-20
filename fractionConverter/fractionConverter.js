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

var toFraction = function(number) { //doesn't account for negative numbers or decimals over .5
  var x = 1;
  var y = 1;
  var fraction;

  if (number % 1 === 0) {
    x = number;
    fraction = x + '/' + y;
    return fraction;
  }


  var array = number.toString().split('.');
  array[1] = '.' + array[1];
  console.log(array);

  if (parseInt(array[0]) !== 0) {
    console.log(parseInt(array[0]));
    x = (array[0] / array[1]) + 1;  
    y = (1/array[1]);
  
  } else {
    y = (1/array[1]);

  }
  fraction = x + '/' + y;
  return fraction;
};



//____________________________SOLUTION____________________________________________



var toFraction = function(num) {

  var denom = 1;
  if (num < 0) {
    return '-' + toFraction(-num);
  } else {
     while (num % 1 !== 0) {
    num = num * 10; 
    denom = denom * 10;
  }
}

  var gcd = 1;
  for (var i = num; i > 0; i--) {
    if (num % i === 0 && denom % i === 0) {
      gcd = i;
      break;
    }
  }
  return num/gcd + '/' + denom/gcd;
};









