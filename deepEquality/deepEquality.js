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
  var appleObj = [];
  var orangeObj = [];

  var objToArray = function(object){
    result = [];
    for (var key in object){
      result.push(key, orange[key]);
    }
    for (var i = 0; i<result.length; i++){
      if (typeof result[i] === 'object'){
        objToArray(result[i]);
      }
    }
    return result [];
  }

  var appleArray = objToArray(apple);
  var orangeArray = objToArray(orange);

  if (appleArray.length != orangeArray.length) {
    return false;
  }

  //create a function that compares both arrays for equality.

  for (var i = 0; i < )
  for (var key in orange){
    tempArr=[];
    tempArr.push([key, orange[key]]);
  }
  orangeObj.push(tempArr);
 }
};

deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false

// problem with approach of comparing objects: cannot flatten objects without potentially
// overwriting object keys/properties. also, objects, when searched through using 'for x in obj'
// may yield results in an unexpected order.
