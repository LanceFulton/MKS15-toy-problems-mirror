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
	// loop through context array
	for (var i = 0 ; i < this.length ; i++){
		var element = this[i];
		var found = false;
		// loop through the input array
		for (var j = 0 ; j < array.length ; j++){
			// if the element is found, change found to true
			if (element = array[j]){
				found = true;
			}
		}
		// if it isn't found, return false
		if (found === false){
			return false;
		}
	}
	// if all are found, return true
	return true;
};




// Array.prototype.isSubsetOf = function(array){

// 	// create object to store if checked
// 	var storage = {};

// 	// loop through context array
// 	for ( var i = 0 ; i < this.length ; i++){
// 		var element = this[i];
// 		console.log(element);
// 		// for each element, see if previously checked
// 		if (!storage[element]){
// 			console.log(storage[element]);
// 			// if not checked, check to see if it is in input array
// 			for (var j = 0 ; j < array.length ; j++){
// 				if (element = array[j]){
// 					var checked = true;
// 					// if it is, store checked in storage
// 					storage[element] = checked;
// 					console.log(storage[element]);
// 				} else {
// 					// if it isn't, return false
// 					return false;
// 				}
// 			}
// 		}
// 	}
// 	// if all are found, return true
// 	return true;

// };
