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
  if (Array.isArray(apple) && Array.isArray(orange)) {
    if (apple.length === orange.length) {
      for (var i=0; i<apple.length; i++) {
        if (!deepEquals(apple[i], orange[i])) {
          return false;
        }
      }
      return true;
    }
  }
  if (typeof apple==="object" && !Array.isArray(apple) && typeof orange==="object" && !Array.isArray(orange)) {
    for (var key in apple) {
      if (!deepEquals(apple[key], orange[key])) {
        return false;
      }
    }
    for (var key in orange) {
      if (!deepEquals(apple[key], orange[key])) {
        return false;
      }
    }
    return true;
  }
  return apple === orange;
};
