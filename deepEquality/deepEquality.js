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

  // convert both objects to strings
  var stringApple = JSON.stringify(apple);
  var stringOrange = JSON.stringify(orange);

  // check length of each string
  if (stringApple.length !== stringOrange.length){
    return false;
  }

  // loop through stringApple and compare characters to stringOrange
  for (var i = 0 ; i < stringApple.length ; i++){
    if (stringApple.charAt(i) !== stringOrange.charAt(i)){
      return false;
    }
  }

  // otherwise return true
  return true;

};

// var deepEquals = function(apple, orange){

//   var recurse = function(obj1, obj2) {

//     // setup object key count variables to compare # of keys:
//     var obj1Count = 0;
//     var obj2Count = 0;
//     for (var key in obj1){
//       obj1Count++;
//     }
//     for (var key in obj2){
//       obj2Count++;
//     }
//     console.log(obj1Count, obj2Count);
//     if (obj1Count !== obj2Count){
//       return false;
//     }

//     // if first test passes, check if values match
//     for (var key in obj1){
//       console.log(obj1[key], obj2[key]);
//       if (typeof obj1[key] === "object"){
//         recurse (obj1[key], obj2[key])
//       }
//        else if (obj1[key] !== obj2[key]){
//         return false;
//       }
//     }

//     // if all tests pass, return true
//     return true;
//   }

//   recurse(apple, orange);

// };