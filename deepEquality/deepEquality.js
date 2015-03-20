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
  //recurse through both objects at the same time
  //compare keys and values on each iteration
  var isEqual = true;

  var recurse = function(obj1, obj2){
    //get keys from obj1 and store in an array
    var obj1Keys = Object.keys(obj1);

    //loop through the key array
    for (var i = 0; i < obj1Keys.length; i++){
      var key1 = obj1Keys[i];
      //check if the key from obj1 exists in obj2
      if(obj2[key1] === undefined){
        isEqual = false;
        return;
      } else {
        //check if the value at the key is an object
        if(typeof obj2[key1] === "object" && typeof obj1[key1] === "object"){
          //recurse with nested objects
          recurse(obj1[key1], obj2[key1]);
        //if not objects check if the values at that key are equal
        } else if (obj1[key1] !== obj2[key1]){
          isEqual = false;
        }

      }
    }
  }

  recurse(apple, orange);
  return isEqual;
};
