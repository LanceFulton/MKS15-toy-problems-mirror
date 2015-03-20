/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */
/*
Solution:

array = array.slice().sort();
var n = 
var lastProduct = array[n-1] * array[n-2] * array[n-3]

return Math.max(firstProduct, lastProduct;

*/

var largestProductOfThree = function(array) {
  // Find the 3 largest numbers
  var choices = 3;
  var top3Array = [];

  // Find and copy the 1 largest value.
  var proc = function(largest) {
    var indexToCopy = -1;
    for(var i=1; i<array.length; i++ ) {
      if(largest<array[i]) {
        largest = array[i];
        indexToCopy = i;
      }
    };
    if(indexToCopy>=0) { 
      console.log("indexToCopy = " + indexToCopy);
      top3Array.push( array[indexToCopy] );
      delete array[indexToCopy];
    }
  }
  
  for(var n=0; n<3; n++){
    proc( top3Array[n] || -1 );
  }

  

  // Calc the product
  console.log(top3Array[0]+ " " +top3Array[1] + " " + top3Array[2])
  return top3Array[0] * top3Array[1] * top3Array[2];

};

console.log( largestProductOfThree([2, 1, 3, 7]) );
console.log( largestProductOfThree([2, 1, 3, 10, 7, 11]) );

};
