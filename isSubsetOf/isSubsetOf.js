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
	var match = 0;
	// loop through context array
	for (var i = 0 ; i < this.length ; i++){
		var element = this[i];
		// loop through the input array
		for (var j = 0 ; j < array.length ; j++){
			console.log("array: " + array[j]);
			// if the element is found, increment match
			if (element === array[j]){
				console.log('match');
				match++
			}
		}
	}
	// if match count is equal to context array length, return true
	if (match === this.length){
		return true;
	} else {
		return false;
	}
};

