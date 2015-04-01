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
  var openParens = false;
  var countParens = 0;
  var openBrackets = false;
  var countBrackets = 0;
  var openCurly = false;
  var countCurly = 0;

  for( var i = 0; i < input.length; i++ ) {
    if( '[](){}'.indexOf(input[i]) >= 0) {
      if( input[i] === '(' ) {
        if( !openParens ) {
          openParens = true;
        } else {
          countParens++;
        }
      } else if( input[i] === '[' ) {
        if( !openBrackets ) {
          openBrackets = true;
        } else {
          countBrackets++;
        }
      } else if( input[i] === '{' ) {
        if( !openCurly ) {
          openCurly = true;
        } else {
          countCurly++;
        }
      } else if( input[i] === ')' ) {
        if( countParens > 0 ) {
          countParens--;
        } else if( openParens ) {
          openParens = false;
        } else {
          return false;
        }
      } else if( input[i] === ']' ) {
        if( countBrackets > 0 ) {
          countBrackets--;
        } else if( openBrackets ) {
          openBrackets = false;
        } else {
          return false;
        }
      } else if( input[i] === '}' ) {
        if( countCurly > 0 ) {
          countCurly--;
        } else if( openCurly ) {
          openCurly = false;
        } else {
          return false;
        }
      }
    }
  }

  if( !openParens && !openBrackets && !openCurly && countParens === 0 && countBrackets === 0 && countCurly === 0 ) {
    return true;
  } else {
    return false;
  }
};
