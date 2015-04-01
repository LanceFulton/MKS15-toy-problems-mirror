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
  if (input === undefined) {
    return true;
  } else {
    var input_arr = input.split('');
    var parensStack = [];
    if (input_arr[0] === ')' || input_arr[0] === ']'  || input_arr[0] === '}') {
      return false;
    }
    else if (input_arr[0] === '(' || input_arr[0] === '[' || input_arr[0] === '{')
    parensStack.push(input_arr[0]);
    for (var i = 1; i < input_arr.length; i++) {
      switch (input_arr[i]) {

        case ')':
          if (parensStack[parensStack.length-1] === '(') {
            parensStack.pop();
          } else {
            parensStack.push(input_arr[i]);
          }
        break;

        case ']' :
          if (parensStack[parensStack.length-1] === '[') {
            parensStack.pop();
          } else {
            parensStack.push(input_arr[i]);
          }
        break;

        case '}' :
        if (parensStack[parensStack.length-1] === '{') {
            parensStack.pop();
          } else {
            parensStack.push(input_arr[i]);
          }
        break;

        case '(':
        case '[':
        case '{':
          parensStack.push(input_arr[i]);
          break;
        default: 
          break; 
      } // end switch
    } // end for loop
    console.log(parensStack);
    return (parensStack.length > 0 ? false: true);
  }
};

/*
console.log(balancedParens('[({})]'));
*/
