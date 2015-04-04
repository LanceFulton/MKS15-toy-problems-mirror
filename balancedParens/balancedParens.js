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
var balencedParens = function(input){
   var stack = [];
   var pairs = {
     '{':'}',
     '[':']',
     '(':')',
   };

   for (var i = 0; i < input.length; i++) {
     var chr = input[i];

     if (pairs[chr]) {
       stack.push(chr);
     } else if (chr === ')' || '}' || ')'){
       if (pairs[stack.pop()] !== chr) {
         return false;
       }
     }
   }

   // return false if any unclosed brackets remain
   return stack.length === 0;
};

