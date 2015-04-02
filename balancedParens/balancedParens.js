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
  input = input.match(/[{}[\]()]+/g).join('');

  if (input.length % 2 === 1) {
    return false;
  };

// cut the array in half and check both halves
  for (var i = 0 ; i < input.length / 2; i++) {
    if (input.length - 1 - i !== '(')
      return false;

  }  // ran out of time
  return true;
};

/* Solution:
var balancedParens = function(input) {
  var stack = [];
  var pairs = {'{':'}','[':']','(':')'}

  for (var i = 0; i < input.length; i++) {
    var chr = input[i];
    if (pairs[chr]) {
      stack.push(chr);
    }
    else if ( chr === '}' || chr === ']' || chr === ')' ) {
      if (pairs[stack.pop()] !==chr) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
*/





