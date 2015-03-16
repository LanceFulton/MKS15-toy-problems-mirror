/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/

Array.prototype.isSubsetOf = function(array){
  // loop through items in this
  for (var item1 = 0; item1 < this.length; item1++) {
    var inArray = false;
    // see if it is in items of the comparison array
    for (var item2 = 0; item2 < array.length; item2++){
      if (this[item1] === array[item2]){
        inArray = true;
        break;
      }
    }
    // if any item not found return false
    if (inArray === false){
      return false;
    }
  }
  
  return true;
};
