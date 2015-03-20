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
    for (var key in obj1) {
      if (typeof obj1[key] === "string" || typeof obj1[key] === "number" || typeof obj1[key] === "boolean") {
        if (obj1[key] !== obj2[key]) {
          result = false;
        }
      }
      else if (Array.isArray(obj1[key])) { // checks for arrays
        // iterates through Array
      }
      else if (typeof obj1[key] === "function") { // checks for functions
      }
      else { //if its an object, use recursion
        recusive (obj1[key], obj2[key])
      }
    }
  };


  recursive (apple, orange);

  return result;

};



// use for-in loop and use recusion(if needed if objects are found), have to check for strings, numbers, arrays, functions, and objects)
/*

console.log('numbers: ', 3 === 3); // true
console.log('string: ', "dd" === "dd"); // true
console.log('boolean: ', true === true); // true
console.log([1,2,3] === [1,2,3]); // false
console.log(myFuncA === myFuncB); //false

*/