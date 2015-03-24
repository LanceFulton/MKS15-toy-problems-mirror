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
  // check null types of objects
  if (apple === null && orange === null) {
    return true;
  } else if (apple === null || orange === null) {
    return false;
  // compare if primitive types
  } else if (!(typeof apple === 'object' || typeof orange === 'object')) {
    if (apple === orange)
      return true;
    else
      return false;
  } else {
    // do deep comparison of object properties
    var orangeProps = [];
    // check prop1 objects
    for (var prop1 in apple){
      var found = false;
      for (var prop2 in orange){
        if (deepEquals(apple[prop1], orange[prop2])) {
          found = true;
          orangeProps.push(prop2);
          break;
        }
      }
      // if any property
      if (found === false)
        return false;
    }
    // check that all props in orange were used
    for (var prop2 in orange){
      if (orangeProps.indexOf(prop2) === -1)
        return false;
    }
    return true;
  }
};
