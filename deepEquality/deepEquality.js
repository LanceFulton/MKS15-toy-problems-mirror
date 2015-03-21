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

var deepEquals = function(apple, orange) {

  var result = true;

  var recursive = function(obj1, obj2) {

    for (var key in obj2) {
      if (!obj1[key]) {
        return result = false;
      }
    }

    for (var key in obj1) {
      if (!obj2[key]) {
        return result = false;
      }
      if (typeof obj1[key] === "string" || typeof obj1[key] === "number" || typeof obj1[key] === "boolean") {
        if (obj1[key] !== obj2[key]) {
          return result = false;
        }
      }
      else if (Array.isArray(obj1[key])) { // checks for arrays
        // iterates through Array
      }
      else if (typeof obj1[key] === "function") {
        // checks for functions
        // but unsure: http://stackoverflow.com/questions/12216540/how-to-test-for-equality-of-functions-in-javascript.
        continue;
      }
      else { // if it's an object, use recursion
        recursive (obj1[key], obj2[key]);
      }
    }
  };

  recursive (apple, orange);
  return result;

};


var obj3 = {a:1, b: {c:5}, d:'hello'};
var obj4 = {a:1, b: {c:5}, d:'hello'};

console.log(deepEquals(obj3,obj4));


var deepEquals = function(apple, orange) {
  if (apple === orange) {return true;}
  if(!orange || !apple) {return false;}
  if((!apple instanceof Object) || !(orange instanceof Object)) {return false;}
  var appleKeys = Object.keys(apple);
  var orangeKeys = Object.keys(orange);
  if(appleKeys.length !== orangeKeys.length) {return false;}
  if(appleKeys.length === 0) {return true;}
  for (var key in apple) {
    if (!deepEquals(apple[key], orange[key])) {return false;}
  }
  return true;
};
// use for-in loop and use recusion(if needed if objects are found), have to check for strings, numbers, arrays, functions, and objects)
/*

console.log('numbers: ', 3 === 3); // true
console.log('string: ', "dd" === "dd"); // true
console.log('boolean: ', true === true); // true
console.log([1,2,3] === [1,2,3]); // false
console.log(myFuncA === myFuncB); //false

*/
