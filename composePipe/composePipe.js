/*
 * Write Compose and Pipe functions.
 * 
 * Step 1: Implement the function Compose: 
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
    var greet = function(name){ return 'hi: ' + name;}
    var exclaim = function(statement) { return statement.toUpperCase() + '!';}
    var welcome = compose(greet, exclaim);
    welcome('phillip'); // 'hi: PHILLIP!'
 */

'use strict';

var compose = function(){

	// store functions (arguments) in array
	var funcs = arguments;

	// return function
	return function(arg){
		currentValue = arg;
		// for each function, starting with the last
		for (var i = funcs.length-1 ; i >= 0 ; i--){
			// run function and store value
			var currentValue = funcs[i](currentValue);
		}
		return currentValue;
	}

};

 /*
 *
 * Step 2: Implement the function Pipe:
 * Pipe composes a series of functions and returns the resulting function.
 * 
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 * 
 * Pipe Example:
   var add2 = function(number){ return number + 2; }
   var multiplyBy3 = function(number){ return number * 3; }
   pipe(add2, multiplyBy3)(5) // 21
   pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

var pipe = function(){

	// store functions (arguments) in array
	var funcs = arguments;

	// return function
	return function(arg){
		currentValue = arg;
		// for each function, starting with the first
		for (var i = 0 ; i < funcs.length ; i++){
			// run function and store value
			var currentValue = funcs[i](currentValue);
		}
		return currentValue;
	}

};












