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

 //I could set up a conditional to at least count all of the parenthesese to make sure we have an even count. 
 //If ) is followed by a ( it is false! Otherwise we're good to go kinda
var balancedParens = function(input){
  var lintArr = input.split('');
  console.log(lintArr);
  var currentChar;
  var balanced = true;

  for (var i = 0; i < lintArr.length; i++){
  // debugger;
    if (lintArr[i] === '(') {
      currentChar = '(';
    }
    if (lintArr === ')') {
      currentChar = ')';
    }
    if (lintArr = '(' && currentChar === ')') {
      balanced = false;
      break;
    } 
  }
  return balanced;
};


