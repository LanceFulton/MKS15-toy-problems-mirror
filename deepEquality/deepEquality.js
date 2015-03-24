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

//this may be cheating. This does not keep the keys in any order so is not a great idea

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

//_____________________________Solution____________________________________

//check if 2 things are equal

//if not, check if they are objects

//if they are objects, get all their keys

//recurse to check if all key value pairs are th same


var deepEquals = function(apple, orange){

  if (apple === orange) {return true;}
  if (!orange || !apple) {return false;}

  var appleKeys = Object.keys(apple);
  var orangeKeys = Object.keys(apple);

  if (appleKeys.length !== orangeKeys.length) {return false;}

  if (appleKeys.length === 0) { return true }

  for (var key in apple) {
    if (!deepEquals(apple[key], orange[key])) {return false}
  }
return true; 
};

