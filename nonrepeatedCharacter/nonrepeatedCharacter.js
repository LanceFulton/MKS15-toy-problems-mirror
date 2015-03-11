/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  // Solution 1
  // find any matching for repeated characters
  var found=string.match(/(\w)\1+/);
  // if didn't find any repeated characters
  if (!found){ 
    // then return the 2nd char, like example 1 ^
    return string[1];
  }
  // else, found repeated characters
  // if the starting index of repeated sequence is > 1, this means first non repeated  char is index 1
  var index=string.indexOf(found[0]);
  if (index>1){
    return string[1];
  }
  // else, return the 1st char after the end of repeated sequence
  index+=found[0].length;
  console.log(found);
  return string[index];

  /* Solution 2 algorithm
  array-lize the string
  start at index 0, remember the char, set flag to false
  for each char in the array
  if the current char is === previous char,
    // then a repeated squence is found
      // if this sequence start at index 0, flag =true, continue serching
      // else, return the index of the repeated sequence-1
  // if finished iterating the array and no repeating char is found,
    // then return the index 1 element.

  */
};


console.log(firstNonRepeatedCharacter("ABA")); // B
console.log(firstNonRepeatedCharacter("AACBDB")); // C
console.log(firstNonRepeatedCharacter("APPLE")) // L
console.log(firstNonRepeatedCharacter("BABBLE")) // A
