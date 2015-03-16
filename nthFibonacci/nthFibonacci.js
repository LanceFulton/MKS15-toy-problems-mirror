/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3 5 8 13 21 34 55
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


var recursiveFib = function (n) {
  if(n === 0){return 0;}
  if(n === 1){return 1;}
  return recursiveFib(n-1) + recursiveFib(n-2);
};


var iterativeFib = function (n) {
	var prev  = 0;
	var temp = 0;
	var result = 0;
  for(var i = 0; i<n; i++){
  	temp = result;
    result = result + prev;
    prev = temp;
    if(i === 0){result = 1;}
  }
  return result;
};
