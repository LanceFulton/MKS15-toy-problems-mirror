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

var nthFibonacci = function (n) {
  // TODO: implement me!
  var fibNumbers = [0, 1];//------------------------------------Set beginning of fibonacci sequence.
  for (var i = 2; i < n; i++){//--------------------------------Create a for loop that will continually add to our fibNumbers array
    fibNumbers.push(fibNumbers[i - 2] + fibNumbers[i - 1]);//---We are adding the sum of previous two numbers of our fibArray to the end of the array.
  }
  return fibNumbers[n];//---------------------------------------Return the value of our nth index.
};



