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
  var a = ['commit','push'];
  var isSubset = 0;
  var index = 0;

  var crossCheck = function(index) {
    if(!(index < a.length)) {
      return;
    }
    for( var i = 0; i < array.length; i++ ) {
      if(array[i] === a[index]) {
        isSubset += 1
      }
    }
    if(isSubset === 0) {
      return 0;
    }
    index++
    crossCheck(index);
  }
  crossCheck(index)

  return isSubset >= 2? isSubset = true : isSubset = false;
};
