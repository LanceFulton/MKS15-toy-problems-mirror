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
 * '{([]())}'
 */

 /*
SOLUTION:
var balancedParens = function(input){
  var stack = [];
  var pairs = {'{':'}', '[':']', '(':')'};

  var len = input.length;
  for(var i=0; i<len; i++) {
    var chr = input[i];

    if (pairs[chr]) { // Matches an open paren? (undefined if not a paren)
      stack.push(chr);
    } else if (chr === '}' || ']' || ')' ) {
      if (pairs[stack.pop()])  ...
    }
  }





}
  */

var balancedParens = function(input){
  // Count the parens pairs, like with a stack.
  var len = input.length;

  if( len<=1 ) {
    return false;
  }

  var pairs = 0; 
  var parensCountA = 0;
  var parensCountB = 0;
  var parensCountC = 0;

  // Walk thru string chars...
  for(var i=0; i<len; i++) {
    var ch = input.charAt(i);
    if(ch==='(') { parensCountA++; }
    if(ch===')') { parensCountA--; }

    if(ch==='[') { parensCountB++; }
    if(ch===']') { parensCountB--; }

    if(ch==='}') { parensCountC++; }
    if(ch==='}') { parensCountC--; }

    if(parensCountA<0) { return false; }
    if(parensCountB<0) { return false; }
    if(parensCountC<0) { return false; }

    if(parensCountA>0) { wasSetA = true; }
    if(parensCountB>0) { wasSetB = true; }
    if(parensCountC>0) { wasSetC = true; }

    if(parensCountA==0 && parensCountB!=0 && wasSetB) {
      return false;
    }

  }

  return true;
};

console.log( "STEP 1" );
console.log( balancedParens('(') );  // false
console.log( balancedParens('()') ); // true
console.log( balancedParens(')(') );  // false
console.log( balancedParens('(())') );  // true

console.log( "STEP 2" ); // NOT WORKING YET
console.log( balancedParens('[](){}') ); // true
console.log( balancedParens('[({})]') );   // true
console.log( balancedParens('[(]{)}') ); // false

console.log( "STEP 3" ); // NOT WORKING YET

 