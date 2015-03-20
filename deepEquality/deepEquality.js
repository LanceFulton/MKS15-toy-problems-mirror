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

//this may be cheating.
var deepEquals = function(apple, orange){

  if (JSON.stringify(apple) === JSON.stringify(orange)) {
    return true;
  } else {
    return false
  }
};
// need to use recursion to be able to check objects in the values of other objects.
// can not compare objects directly
// can not compare arrays directly (aslo techinacally objects)

// for (var i = 0; i < Object.keys(apple).length; i++ {
//   if (apple[i] in orange) {
//     return true;
//   }
// }
