/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing only the unique characters found in both strings, in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

//How can i approach this?


function contains(index, array){//------------------------Contains function is being used to check our common letters to make sure we dont duplicate them
  var count = 0;
  for (var i = 0; i < array.length; i++){
    if (index === array[i]){
      count++;
      break;
    }
  }
  if (count > 0){
    return true;
  }
}



var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  //naive implementation
  var common = [];//---------------------------------------Empty array for our common characters
  var letters1 = string1.split('');//----------------------splitting both inputs into letter arrays
  var letters2 = string2.split('');
  for(var i = 0; i < string1.length; i++){

    if (letters1[i] !== " "){//----------------------------handles whitespaces.
      if (!contains(letters1[i], common)){
        for (var j = 0; j < string2.length; j++){
          if (letters1[i] === letters2[j]) {
            common.push(letters1[i]);
            break;//-----------------------------------------If we find a common character, we want to break the current loop to avoid unnecessary duplications.
          }
        }
      }
    }
  }
  return common;
};

