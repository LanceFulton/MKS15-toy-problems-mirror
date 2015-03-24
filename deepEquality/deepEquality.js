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
  var equals=false;
  function recursiveDeepEqual(apple, orange){
    if (typeof apple !== "object" && typeof orange !== "object"){
      // base case
      if (apple === orange){
        equals=true;
      }
      else{
        equals=false;
      }
      return;
    }
    else{
      for (key in apple){
        if (!orange[key] ){
          equals=false;
          return;
        }
        else {
          recursiveDeepEqual(apple[key], orange[key]);
        }
      }
    }
  }
  recursiveDeepEqual(apple,orange);
  return equals;
};

/*
console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}));
console.log(deepEquals(2,2));
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}));
*/
