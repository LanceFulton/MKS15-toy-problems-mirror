/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

 // really big work in progress! 

// realizing at submission that I could have continually built an array and that I reduced on each
// recursive call... using the length of the array as my base case for when to pull out? 

var nthFibonacci = function (n) {
  if (n === 0){
    return 0;
  }

   if (n === 1){
    return 1;
  }

  var first = 0;
  var second = 1;
  result = 1;
  counter = 2;

  var addUpDigits = function(n, result){
    if (counter === n) {
      return newResult;
    }

    newResult += result;
    counter++;
    addUpDigits(n, newResult);
  }

  return addUpDigits(n, result);
};

