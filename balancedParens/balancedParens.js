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
  var containers = '';
  var closeString = '';
  for (var i = 0; i < input.length; i++) {
    if ( checkChars(input[i]) ) {
      containers += input[i];
    }
  };

  //check to make sure they all close and also in proper nesting order

  for (var i = 0; i < containers.length; i++) {
    containers[i] 
  };
};

var checkChars = function (char) {
    if( char === '(') {
      return 'openparen';
    } else if ( char === ')') {
      return 'closeparen';
    } else if ( char === '[') {
      return 'openbracket';
    } else if ( char === ']') {
      return 'closebracket';
    } else if ( char === '{') {
      return 'openbrace';
    } else if ( char === '}') {
      return 'closebrace';
    } else {
      false;
    }
}

/*
var balancedParens = function(input){
  var stack = [];
  var pairs = {'{': '}', '[': ']', '(':')'}
  for(var i = 0; i < input.length; i++) {
    var (pairs[chr]) {
      stack.push(chr)
    } else if ( chr === '}' || ']' || ')' ) {
        if (pairs[stack.pop()] !== chr) {
          return false;
        }
      }
  }
  return stack.length === 0;
}
