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

// exponential time complexity:
var nthFibonacci = function (n) {

	return n < 2 ?
	n : nFib(n-1) + nFib(n-2);

};

// linear time complexity, linear space complexity:
var nFib = function(n) {
	var mem = [];
	for (var i = 0 ; i <= n ; i++){
		mem[i] = i < 2 ? i : mem[i-1] + mem[i-2];
	}
	return mem[n];
}

var nFib = function(n) {
	var mem = [0,1];
	for (; n > 1; n--) {
		mem.push(mem.shift() + mem[0]);
	}
	return mem[n];
};