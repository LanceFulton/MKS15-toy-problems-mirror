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

  var lastParen = '(';
  // set counts
  var changeCount = 0;
  var openCount = 0;
  var closedCount = 0;

  // iterate through characters
  for (var i = 0 ; i < input.length ; i++){
    var char = input.charAt(i);

    // if changeCount > 1, return false
    if (changeCount > 1){
      return false;
    }

    // check if character matches lastParen
    if (char === lastParen){
      // if so, increment type count
      if (char === ')'){
        openCount++;
      } else {
        closedCount++;
      }
      // if not, change lastParen, increment change count, and increment type count
    } else {
      if (lastParen === '('){
        lastParen = ')';
      } else {
        lastParen = '(';
      }
      changeCount++;
    }



  }

  // if openCount and closedCount don't match, return false

  return true;

};

// var balancedParens = function(input){

//   // set nextParen value to open
//   var nextParen = '(';

//   // iterate through characters
//   for (var i = 0 ; i < input.length ; i++){
//     var char = input.charAt(i);

//     // if the character is a parenthesis
//     if (char === ')' || char === '('){

//       // check if it matches the nextParen value
//       if (char === nextParen){
//         // if so, change nextParen value
//         if (nextParen === '('){
//           nextParen = ')';
//         } else {
//           nextParen = '(';
//         }
//         // if not, return false
//       } else {
//         return false;
//       }

//     }

//   }

//   return false;

// };

