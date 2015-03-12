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
var array = ['one', 'two', 'three'];
var subset = ['one', 'two'];

//in python you can just use if subset[i] in array. That would be handy right now. 

// Use indexof?

//count === subset.length

// put them all in an object and keep a count but that wouldn't account for repeated values in the array



Array.prototype.isSubsetOf = function(array){
  var storage = [];
  var moreStorage = {};
  var count = 1;
  var subset = // not sure how to get the subset
  for ( var i = 0; i < array.length; i++) {
    storage.push[array[i]]
  }
  for ( var i = 0; i < subset.length; i++) {
    storage.push[subset[i]]
  }
  for ( var i = 0; i < storage.length; i++) {
    if (moreStorage[storage[i]]) {
      moreStorage[storage[i]] = count++;
    } else {
      moreStorage[storage[i]] = count;
    }
  for (var key in moreStorage)
};

// quad for loops. probably not a great idea. 











