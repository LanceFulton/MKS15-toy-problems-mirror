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


// bad way:
var deepEquals = function(apple, orange){

  // convert both objects to strings
  var stringApple = JSON.stringify(apple);
  var stringOrange = JSON.stringify(orange);

  if (stringApple !== stringOrange){
    return false;
  }
  return true

};

var deepEquals = function(apple, orange){
  // check if 2 things are equal
  if (apple === orange){
    return true;
  }
  if (!apple || !orange){
    return false;
  }
  // if not, check if they are objects
  if(!(apple instanceof Object) || !(orange instanceof Object)){
    return false;
  }
  // if they are objects, get all their keys
  var appleKeys = Object.keys(apple);
  var orangeKeys = Object.keys(orange);

  if(appleKeys.length !== orangeKeys.length) {
    return false;
  }

  if(appleKeys.length === 0){
    return true;
  }
  // recurse to check if all key/values are equal
  for (var key in apple){
    if(!deepEquals(apple[key], orange[key])){
      return false;
    }
  }
};