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
  var idx = 0;
  var end = input.length;

  var search = function(char) {
    var check;
    while (input[idx] !== char && idx !== end) {

      //call itself if an open is found
      if (input[idx] === '(') {
        idx++;
        check = search(')');
        if (!check) {
          return false;
        }
      } else if (input[idx] === '[') {
        idx++;
        check = search(']');
        if (!check) {
          return false;
        }
      } else if (input[idx] === '{') {
        idx++;
        check = search('}');
        if (!check) {
          return false;
        }
      } else if (
          input[idx] !== char &&
          ( input[idx] === ')' ||
            input[idx] === ']' ||
            input[idx] === '}' )) {
        return false;
      }
      //return false if a close is found that is not what it is looking for
      idx++;
    }
    if (idx === end && char === '' ||
        input[idx] === char) {
      return true;
    } else {
      return false;
    }
  }

  return search('');
};