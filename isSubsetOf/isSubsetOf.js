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
    var subsetObj = {};


    // Gather into object subsetObj...
    var subsetLen = subsetArray.length;
    var subsetObj = {};
    for (var j = 0; j < subsetLen; j++) {
        var value = subsetArray[j];
        subsetObj[value] = value;
    }
    console.log("Subset obj: ", subsetObj);

    // Check array against subObject
    var foundCount = 0;
    for (var i = 0; i < array.length; i++) {
        console.log("TEST: " + array[i]); 
        if(subsetObj[array[i]]) {
            foundCount++;
        }
    }
    console.log("foundCount = " + foundCount + "  subsetLen = " + subsetLen);
    if(foundCount===subsetLen) {
        return true;
    }


    console.log(array);




    return false;
};

var a = ['commit','push']
console.log("ANSWER 1: " + a.isSubsetOf(['commit','rebase','push','blame']) ); // true

var b = ['merge','reset','reset']
console.log("ANSWER 2: " + b.isSubsetOf(['reset','merge','add','commit']) ); // true 
