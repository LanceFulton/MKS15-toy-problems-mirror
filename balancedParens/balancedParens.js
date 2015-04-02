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
  // use stack
  var unbalancedParens = [];
  for (var i=0; i<input.length; i++) {
    var current = input.charAt(i);
    if (current === '[' || current === '{' || current === '(') {
      unbalancedParens.push(current);
    } else if (current === ']' || current === '}' || current === ')') {
      var lastChar = unbalancedParens.pop();
      var lastCharCode = lastChar ? lastChar.charCodeAt(0) : -1;
      var currentCharCode = current.charCodeAt(0);
      if (lastCharCode !== currentCharCode-1 && lastCharCode !== currentCharCode-2) {
        return false;
      }
    }
  }
  return !unbalancedParens.length;
};

// console.log(balancedParens('('));  // false
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())'));  // true

// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]'));   // true
// console.log(balancedParens('[(]{)}')); // false


// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
