/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

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

//   var characters = string.split('');
//   console.log(characters);
//   if (characters.length === 0){
//     return null;
//   } else if (characters.length === 1){
//     return characters[0];
//   } else {
//     hashOfCharacters = {};
//     for (var i = 0; i < characters.length; i++)
//       if (hashOfCharacters[characters[i]]){
//         hashOfCharacters[characters[i]] = hashOfCharacters[characters[i]] += 1;
//       } else {
//         hashOfCharacters[characters[i]] = 1;
//       }
//     }
//   return hashOfCharacters;
// }

// else if (characters[0] != characters[1]){
//     return characters[0]
//     for (var i = 0; i < characters.length - 2; i++)
//       if (characters[i] != characters[i+1]) {
//         return characters[i]
//       } else if ()
//   } 