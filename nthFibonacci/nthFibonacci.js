/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *   0 1 1 2 3 Fibonacci value
     0 1 2 3 4 5 n
     0 1 2 3 4 array index
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
};
// recursive solution

var nthFibonacci = function (n) {
  if (n < 2) { // base condition
    return n;
  } else { // recursive condition
    return nthFibonacci (n-1) + nthFibonacci (n-2);
  }  
};

// iterative solution
var nthFibonacci = function (n) {
  if (n < 2) {
    return n;
  } else {
    var results = [];
    results[0] = 0;
    results[1] = 1;
    for (var i = 2; i <= n; i++) {
      results[i] = results[i-1] + results[i-2];
    }
    return results[n];
  }
}; 

// memozied 
var nFib = function(n) {
  var mem = [];
  for (var i = 0; i <= n; i++) {
    mem[i] = i < 2 ? i : mem[i-1] + mem[i-2];
  }  
  return mem[n];
};

// memozied function

var nFib = function(n) {
  if (nFib.mem[n]) {
    return nFib.mem[n]
  }
  for (var i = 0; i <=n; i++) {
    nFib.mem[i] = i < 2 ? i : nFib.mem[i-1] + nFib.mem[i-2];
  }
  return nFib.mem[n]
};

var nFib.mem = [];



