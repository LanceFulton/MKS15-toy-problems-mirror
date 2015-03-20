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

  var result = true;

  var subroutine = function(object1, object2){
    if(Array.isArray(object1)){
      for(var key=0; key < object1.length; key++){
        //check if the object exists
        if(object2[key] === undefined){
          result = false;
          return;
        }
        //compare the objects if there are objects
        if(typeof object1[key] === "object" && typeof object2[key] === "object"){

          subroutine(object1[key], object2[key]);
          if(result === false){return;}

        }else if(object1[key] !== object2[key]){
          result = false;
          return;
        }
      }
    }else{
      for(var key in object1){
        //check if the object exists
        if(object2[key] === undefined){
          result = false;
          return;
        }
        //compare the objects if there are objects
        if(typeof object1[key] === "object" && typeof object2[key] === "object"){

          subroutine(object1[key], object2[key]);
          if(result === false){return;}

        }else if(object1[key] !== object2[key]){
          result = false;
          return;
        }
      }
    }
  }
  subroutine(apple, orange)
  return result;
};
