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

	var startValue = [0,1];
  
	var recurse = function(times, array){
		console.log(array[array.length-2]);
		console.log(array[array.length-1]);
		array.push(array[array.length-2] + array[array.length-1]);
		if (times === 0){
			return array[array.length-1];
		}
		recurse (times-1, array);
		return array;
	}

	recurse(n, startValue);
};



