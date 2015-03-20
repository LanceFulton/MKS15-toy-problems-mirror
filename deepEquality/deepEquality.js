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


  var checkEquality = function(obj1, obj2) {
    var isEqual = true;
    for (var key in obj1) {
      if((typeof obj1[key] === 'object') && (typeof obj2[key] === 'object')) {
        // console.log("SUB-OBJECTS FOUND");
        return checkEquality(obj1[key], obj2[key]);
      } else if(obj1[key]!=obj2[key]) {
        // console.log("NOT EQUAL FOUND. - " + obj1[key]);
        return false;
        console.log(obj1[key], obj2[key], isEqual);
      }
    }
    return isEqual;
  }

  return checkEquality(apple, orange);
};
console.log("TEST 1:");
console.log( deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}) );
console.log("TEST 2:");
console.log( deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}) );