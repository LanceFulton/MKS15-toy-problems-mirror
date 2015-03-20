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
  if( Object.keys(apple).length !== Object.keys(orange).length ) {
    return false;
  }

  var equality = true;
  var recurse = function(obj1, obj2) {
    for( var key in obj1 ) {
      if( key in obj2 ) {
        // check for nulls
        if( obj1[key] === null ) {
          if( obj1[key] !== obj2[key] ) {
            equality = false;
          }
        // check for arrays and objects
        } else if( typeof obj1[key] === 'object' ) {
          recurse(obj1[key], obj2[key]);
        // otherwise compare primitives
        } else if( obj1[key] !== obj2[key] ) {
          equality = false;
        }
      } else {
        equality = false;
      }
    }
  };

  recurse(apple, orange);
  return equality;
};