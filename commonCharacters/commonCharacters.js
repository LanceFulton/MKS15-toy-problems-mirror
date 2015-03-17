 * Write a function `f(a, b)` which takes two strings as arguments and returns a
/**
 * string containing only the unique characters found in both strings, in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */


var commonCharacters = function(string1, string2) {
    var string = string1.replace(' ','');
    string = string1.toLowerCase();
    characters = string1.split('');
    var primaryObject = {};
    var sharedCharsObject = {};
    characters.forEach(function(char){
      if (!primaryObject[char]){
        primaryObject[char] = false;
      }
    });
    // if (arguments>1){
    //   for (var i = 1; i <= arguments.length -1; i++)
    var currentString = string2.replace(' ', '');
    currentString = currentString.toLowerCase();
    charactersOfArg = currentString.split('');
    charactersOfArg.forEach(function(charArg){
      if (primaryObject[charArg] === false){
        console.log(charArg);
        sharedCharsObject[charArg] = true;
        primaryObject[charArg] = false;
      }
    });
return Object.keys(sharedCharsObject);

};

console.log(commonCharacters('acexivou','aegihobu'));
  // transmute strings into arrays of characters, make it unique and lower case

  // transmute string1 into an object

  // if string 1 has something from further strings, make that property's val true
  // for loop to check through other strings

  // TODO: Your code here!



var firstNonRepeatedCharacter = function(string) {
  var characters = string.split('');
    if (characters.length === 0) {
      return null;
    } else if (characters.length === 1) {
      return characters[0];
    } else {
      var charCounter = function(char) {
        for(var count=-1,index=-2; index != -1; count++,index=string.indexOf(characters[i],index+1));
        return count;
      }
      for (var i = 0; i < characters.length; i++) {
        if (charCounter(characters[i]) === 1) {
          return characters[i];
      };
    }
  }
};
