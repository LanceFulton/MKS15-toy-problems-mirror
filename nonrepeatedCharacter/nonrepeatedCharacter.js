/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var storage = [];
  var index = 1;
  var objectStorage = {};
  for (var i = 0; i < string.length; i++) {
    storage.push(string[i]);
  }
  for (var j = 0; j < storage.length; j++) {
    if ( objectStorage[storage[j]] ) {
      objectStorage[storage[j]] += 1 ;
    } else {
      objectStorage[storage[j]] = 1;
    }
  };
  for (var key in objectStorage) {
    if (objectStorage[key] === 1) {
      //return objectStorage.key;
    }
  }
};
//Ran out of time. Just need it to return the key when the value is equal to 1. 