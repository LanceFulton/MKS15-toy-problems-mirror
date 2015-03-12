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
   var tempArray = [];
    if (this > array){
        return false;
    }
    for (var i =0; i< this.length; i++){

        for (var j=0; j<array.length; j++){
            if (array[j]===this[i]){
                //add to temp array
                tempArray.push(this[i]);
            } 
        }
    }
    //check temp length vs this.length
    if (tempArray.length === this.length){
        //if length matches then true
        return true;
    }
    //if length doesn't match then its false
    return false;
};