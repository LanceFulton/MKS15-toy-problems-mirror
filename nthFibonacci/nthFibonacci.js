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
  var recurse = function(accumulator, nextNum){
    //first two numbers are each 1
    

    if (nextNum === n){
      return accumulator;
    }
    if (n === 2){
      accumulator = 1;
      return recurse(accumulator, nextNum + 1);
    } else {
      accumulator = accumulator + nextNum;
    }
    
    if (accumulator === 1){
      return recurse(accumulator, nextNum);
    }
    return recurse(accumulator, nextNum + 1);
  }

  return recurse(0, 1);
};



