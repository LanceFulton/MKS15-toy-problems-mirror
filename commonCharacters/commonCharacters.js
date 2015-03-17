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


var commonCharacters = function(string1, string2) {
  var obj1 = {};
  var obj2 = {};
  var uniques = {};
  var results = [];
  //put string1 in an object with a counter
  for (var i = 0; i < string1.length; i++) {
    if (obj1[string1[i]]) {
      obj1[string1[i]] += 1;
    }else {
      obj1[string1[i]] = 1;
    }
  }
  console.log("obj1: ", obj1)
  //put string2 in an object with counter
  for (var j = 0; j < string2.length; j++) {
    if (obj2[string2[j]]) {
      obj2[string2[j]] += 1;
    } else {
      obj2[string2[j]] = 1;
    }
  }
  console.log("obj2: ", obj2)
  // taking the unique characters from obj1 and putting them in a seperate object.
  for (var key in obj1) {
    if (obj1[key] === 1) {
      uniques[key] = obj1[key];
    }
  }
  //adding obj2 uniques to the uniques object
  for (var k in obj2) {
    if (uniques[k]) {
      uniques[k] += 1;
    } else {
      uniques[k] = 1;
    }
  }
  console.log("uniques: ", uniques)
  for (var l in uniques) {
    if (uniques[l] > 1) {
      results.push(l)
    }
  }
  return results;
};

//As I push this I am realizing a better way to do this with less objects and loops etc. I will keep working on it. 
