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
  /* solution 1 */
  // base case, if n is 0, or 1, just return 0 or 1 (since there's no previous 2 element for n=0 and n=1)
  if (n===0 || n ===1) {
    return n;
  }
  // else, recursively call to return fib(n-1)+fib(n-2)
  else {
    return nthFibonacci(n-1) + nthFibonacci(n-2);
  }


  /* solution 2
  // algorithm
  // construct an array of fib numbers, fill index 0 with 0, index 1 with 1. (default initial)
  // for i= 2..n
  // fib_array[i]= fib_array[i-1]+fib_array[i-2];
  // return fib_array[n]
  // this method may be good if want to repeatedly call the fibonacci function to generate number.... 
  */
};

/*
console.log(nthFibonacci(1)); // 0
console.log(nthFibonacci(2)); // 1
console.log(nthFibonacci(3)); // 1
console.log(nthFibonacci(4)); // 2
console.log(nthFibonacci(10)); // 55
*/


