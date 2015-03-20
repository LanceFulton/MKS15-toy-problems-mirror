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

  // {a:1, b: {c:3}}

var deepEquals = function(apple, orange){
  objectDeepEqual = true;

  var recurse = function(obj1, obj2) {
    if ( objectDeepEqual === false ) {
      objectDeepEqual = false;
      return;
    };
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    if ( keys1.length !== keys2.length ) {
      objectDeepEqual = false;
      return;
    };
    for (var i = 0; i < keys1.length; i++) {
      if( keys1[i] !== keys2[i] ) {
        objectDeepEqual = false;
        return;
      };
      debugger;
      if( Object.keys(obj1[keys1[i]])[0] !== undefined && Object.keys(obj2[keys2[i]])[0] !== undefined) {
        recurse(obj1[keys1[i]], obj2[keys2[i]]);
      }
      if( typeof(Object.keys(obj1[keys1[i]])) !== 'object' ) {
        if( obj1[keys1[i]] !== obj2[keys2[i]] ) {
          objectDeepEqual = false;
          return;
        }
      }
    };


  }
  recurse(apple, orange);

  return objectDeepEqual;

};
