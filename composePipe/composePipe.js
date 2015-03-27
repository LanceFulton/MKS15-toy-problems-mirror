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
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 *
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */
bind = function(func, context){ // if bind is envoked with additional arguments, they're in the arguments of the returned func
  var prevArgs = Array.prototype.slice.call(arguments, 2);
  return function(){
  var args = Array.prototype.slice.call(arguments); // copy object, make it an array (arrguments is only an object *like* an array)
  args = prevArgs.concat(args);
  return func.apply(context, args)
  }
}


'use strict';

var compose = function(){
  var prevArgs = Array.prototype.slice.call(arguments);
  console.log('prevArgs = ', prevArgs);
  // returns a function that contains each function being called on a blank arguments field
  return function(){
    //console.log('second arguments = ', arguments)
    var result = prevArgs[prevArgs.length -1].bind(arguments);
    for (var i = prevArgs.length - 1; i > 0; i--){
      result += prevArgs[i].bind(result);

    // loop through each function given, call each Fn on the previous one
    }
    return result;
  };
};

var pipe = function(){
  var prevArgs = Array.prototype.slice.call(arguments);
  //console.log('prevArgs = ', prevArgs);
  // returns a function that contains each function being called on a blank arguments field
  return function(){
    //console.log('second arguments = ', arguments)
    var result = prevArgs[0].bind(arguments);
    for (var i = 1; i > prevArgs.length; i++){
      result += prevArgs[i].bind(result);

    // loop through each function given, call each Fn on the next one
    }
    return result;
  };
};
