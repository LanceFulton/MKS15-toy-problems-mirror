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
  var count = 0;
  var balance = true;
  characters = input.split("");
  for (var i = 0; i<characters.length; i++){
    if (characters[i] === '('){
      count += 1;
      if (balance === false) {
        return false;
      }
    } else if (characters[i] === ')') {
      count -= 1;
      if (count === 0){
        balance = false;
      }
    }

    if (count === 0 && i === characters.length){
    return true;
    } // else return false?
  }
};

