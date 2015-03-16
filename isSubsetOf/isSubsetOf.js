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
  // Your code here
  // initilialize a blank object to store each of the array as key
  var map={};
  for (var i=0; i<array.length; i++){
    // stringify each array element
    var key=JSON.stringify(array[i]);
    // if the key is not already in the object, then add the key to object
    if (!map[key]){
      map[key]=1;
    }
    // else, if duplicated key, simply ignore
  }

  // assume the suspected sub array is a subset of original array
  var subset=true;
  // iterate through the suspected sub array to examine each element
  for (var i=0 ; i<this.length; i++){
    var sub_array_key=JSON.stringify(this[i]);
    // if found an value in the sub array that is not in original array, 
    // then it's in violation of subset, so no longer a subset
    if (!map[sub_array_key]){
      subset=false;
    }
    // else, continue with the assumption that the sub array is a subset
    // if it finished all the sub array key and found all its key in original array
    // then indeed is a subset, else it's not a subset. 
  }
  return subset;
};

// test code
/*
var b=['commit','rebase','push','blame'];
var a= ['commit','push'];
var c=['commit', 'withdraw'];
var d=[1,2,3,4];
var e=[1,2];
console.log(a.isSubsetOf(b));
console.log(c.isSubsetOf(b));
console.log(e.isSubsetOf(d));
*/