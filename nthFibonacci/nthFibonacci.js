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
    var retFib = 0;
    var fib = 0;
    var s = 0;
    var arr = [];

    var fibber = function (x) {
        if (x <= n) {
            fib += x;
            fibber(x+1);
            console.log("fib = " + fib + "; x = " + x);
        }
        return fib;
    }

    retFib += fibber(s);

    return retFib;
};


console.log( "nthFibonacci = " + nthFibonacci(2) );
