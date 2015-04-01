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
      //String.fromCharCode('('.charCodeAt(0)+1)
      if (current === ')') {
        if (lastChar !== String.fromCharCode(current.charCodeAt(0)-1)) {
          return false;
        }
      } else if (lastChar !== String.fromCharCode(current.charCodeAt(0)-2)) { // '}' and ']' are 2 away
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
