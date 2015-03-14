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
 * nthFibonacci(2); // => 1  (0 1)
 * nthFibonacci(3); // => 2  (0 1 1 = 2)
 * nthFibonacci(4); // => 3   0 1 1 2
 * etc...
 *
 */

var nthFibonacci = function (n) {
    if( n<2 ) {
        return 1;
    } else {
        return nthFibonacci(n-2) + nthFibonacci(n-1);
    }
};

console.log( "2nd Fibonacci = " + nthFibonacci(2) );
console.log( "3rd Fibonacci = " + nthFibonacci(3) );
console.log( "4th Fibonacci = " + nthFibonacci(4) );
console.log( "5th Fibonacci = " + nthFibonacci(5) );
console.log( "6th Fibonacci = " + nthFibonacci(6) );
console.log( "7th Fibonacci = " + nthFibonacci(7) );
