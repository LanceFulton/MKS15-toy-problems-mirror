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
  //prob want to recurse
  //split string into array
  //counter that counts open parens
  //decrememnt counter as it comes across a closed paren

  var array = input.split('');
  var openCount = 0;

  var openChars = {
    '(': 0,
    '[': 0,
    '{': 0
  };

  var closedChars = {
    ')': 0,
    ']': 0,
    '}': 0
  };

  //need to keep track of each type of bracket
  //should use an object with bracket as key, counter as value
  //compare the open values with closed values to see if they match

  for(var i = 0; i < array.length; i++){

    if(openChars[array[i]] !== undefined){
      openChars[array[i]] += 1;
    } else if (closedChars[array[i]] !== undefined){
      closedChars[array[i]] += 1;
    }
  }
  //still need to capture edge cases, a bracket that closes without first opening
  //brackets that aren't closed within closed parens
  //out of time

  if(openChars['('] !== closedChars[')']){
    return false;
  } else if (openChars['['] !== closedChars[']']){
    return false;
  } else if (openChars['{'] !== closedChars['}']){
    return false;
  }

  return true;

};


//Code below will work for all combos of parens

// var array = input.split('');
//   var openCount = 0;


//   for(var i = 0; i < array.length; i++){

//     if(array[i] === '('){
//       openCount++;
//     } else if (array[i] === ')'){
//       if(openCount <= 0){
//         return false;
//       } else {
//         openCount--;
//       }
//     }
//   }

//   if(openCount !== 0){
//     return false;
//   }

//   return true;
