/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input){
  var openParens = "({[";
  var closedParens = ")}]";
  var storage = {};

  for (var i = 0; i < input.length; i++) {


  }

};


//___________________SOLUTION___________________________

var balancedParens = function(input) {

  var stack = [];

  var pairs = { '{' : '}', '[' : ']', '(': ')'};

  for (var i = 0; i < input.length; i++) {
    var chr = input[i];

    if (pairs[chr]) {
      stack.push(chr);

    } else if (chr === '}' || chr === ']' || chr === ')' ) {
      if (pairs[stack.pop()] !== chr) {
        return false;
      }
    }
  }
  return stack.length === 0; //will return true or false
};




















