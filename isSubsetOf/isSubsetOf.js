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
  // for( var i = 0; i < this.length; i++ ) {
  //   if(array.indexOf(this[i]) < 0) {
  //     return false;
  //   }
  // }
  var counter = 0;

  for( var i = 0; i < this.length; i++ ) {

    // check if this[i] is an array
    if( Array.isArray(array[i]) ) {
      for( var j = 0; j < array.length; j++ ) {
        //look for arrays to compare to
        if( Array.isArray(array[j]) && array[i].isSubsetOf(array[j]) ) {
          counter++;
          return;
        }
      }
    }

    // check other types (strings, numbers & booleans)
    else {
      for( var j = 0; j < array.length; j++ ) {
        if( array[j] === this[i] ) {
          counter++;
          break;
        }
      }
    }
  } 

  debugger;
  return counter === this.length;
};
