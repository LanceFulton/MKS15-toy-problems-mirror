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

var getUniqueChars = function(string, array){

  for (var i = 0; i < string.length; i++){
    if (checkChar(string[i], i, string) === true){
      array.push(string[i]);
    }
  }

  return array;
}

var getDuplicateChars = function(string, obj){

  for (var i = 0; i < string.length; i++){
    if (checkChar(string[i], i, string) === false){
      obj[string[i]] = 1;
    }
  }

  return obj;
}

var checkChar = function(character, index, string){
  for (var i = 0; i < string.length; i++){
    if (index !== i && character === string[i]){
      return false;
    }
  }
  return true;
}

var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  var uniqueChars = [];
  var result = [];
  var sameCharObj = {};  //object to store the duplicate characters, dupes will be stored as keys to prevent storing the same letter twice

  //get unique characters of every string passed into function
  for (var i = 0; i < arguments.length; i++){
    getUniqueChars(arguments[i], uniqueChars);
  }

  //store all duplicates in an object as keys
  sameCharObj = getDuplicateChars(uniqueChars, sameCharObj);

  //return the keys of the object
  return Object.keys(sameCharObj);

};
