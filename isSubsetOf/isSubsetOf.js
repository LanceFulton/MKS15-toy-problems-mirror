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


//MVP achieved with extra credit!!
Array.prototype.isSubsetOf = function(array){

  var truthCount = 0;//----------------------Checks how many times our subset value is true within our array
  for (var i = 0; i < this.length; i++){//---For loop iterates through our sub array
    for(j = 0; j < array.length; j++){//-----Second for loop iterates through our main array
      if (this[i] === array[j]) {//----------Conditional check to see if our current subarray index val equals our current main array index value
        truthCount++;//----------------------If its true, we will add to our truth counter
        break;//-----------------------------then break the current loop to immediately check the next subarray value
      }
    }
  }
  
  if (truthCount === this.length){//---------Our function officially returns true if each value of our subset added to our truth counter
    return true;
  }
  return false;//----------------------------Otherwise the function returns false 
};
