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
  var preDecimal  = Math.floor(number);
  var postDecimal = number - Math.floor(number);

  var sub = function(pre, post){
    if(post <= 0.5){  //need to fix.
      var denominator = post ? parseInt(1/post) : 1;
      var numerator   = number * denominator;
      return Math.ceil(numerator) + "/" + denominator;
    }else{
      return sub(pre/2, post/2);
    }
  };

  return sub(preDecimal, postDecimal);
};
