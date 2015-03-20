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
// check against compareTo array
// keep count, then coerce result to true / false

var inputArray = this;
var compareTo = array;

var count = 0;

  for (var i = 0; i < inputArray.length; i++) {
    for (var j = 0; j < compareTo.length; j++) {
      if (inputArray[i] === compareTo[j]) {
        count++;
      }  
    }
  }
  return count === inputArray.length;
};

  
console.log(b.isSubsetOf(['commit','rebase','push','blame']));
};
