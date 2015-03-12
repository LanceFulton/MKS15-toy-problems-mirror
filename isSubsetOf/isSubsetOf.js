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
    var subsetArray = this;
    var isSubset = false;


    // Does an element (string) exist in ARRAY?
    var subsetLen = subsetArray.length;
    for (var j = 0; j < subsetLen; j++) {
        for (var i = 0; i < array.length; i++) {
            if(array[i]===array[j]) {
                isSubset = true;
                break;
            }
        }
    };

    console.log(array);




    return isSubset;
};

var a = ['commit','push']
console.log("ANSWER 1: " + a.isSubsetOf(['commit','rebase','push','blame']) ); // true

var b = ['merge','reset','reset']
console.log("ANSWER 2: " + b.isSubsetOf(['reset','merge','add','commit']) ); // true 
