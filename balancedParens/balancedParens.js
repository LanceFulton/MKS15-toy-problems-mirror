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
var findLastParen = function(input) {
  for (var i = 1; i<= input.length; i++) {
    if (input[input.length - i] === ')');
    return input.length - i;
  }
  return -1;
}

var balancedParens = function(input){
  for (var i = 0; i<input.length; i++) {
    if (input[i]==='(') {
      var l = findLastParen(input);
      if (l < 0) {
        return false;
      } else {
        return balancedParens(input.slice(i+1, l));
      }

      break
    } else if (input[i]===')') {
      return false;
    }
  }
  return true;
};


