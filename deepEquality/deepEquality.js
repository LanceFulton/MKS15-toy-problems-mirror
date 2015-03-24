/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange){

  //check each value of key in each object
  if (apple === orange) {
    return true;
  }
  if (!(Object.getOwnPropertyNames(apple)) || !(Object.getOwnPropertyNames(orange))) {
    return false;
  }

  //get all apple and orange keys
  var appleKeys = Object.keys(apple);
  var orangeKeys = Object.keys(orange);

  //if there is more keys in apple than orange then its false
  if (appleKeys.length !== orangeKeys.length) {
    return false;
  }

 //use for loop to check each key
  for (var i = 0; i < appleKeys.length; i++) {
    if (!deepEquals(apple[appleKeys[i]], orange[appleKeys[i]])) {
      return false;
    }
  }

  return true;
};
//deepEquals({a:1, b: {c:5}},{a:1, b: {c:5}});