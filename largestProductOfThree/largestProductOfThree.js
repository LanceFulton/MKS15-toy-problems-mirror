/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // TODO: everything
<<<<<<< HEAD
  if (!array || array.length <3){
    // invalid input or not sufficient element
    return null;
  }
  array.sort(); // sort the array ascending
  // construct an array of all the negative number from the input
  var neg_array=[];
  array.map(function(item){
    if (item<0){
      neg_array.push(item);
    }
    return;
  });
  // sor the negative number array
  neg_array.sort();
  if (neg_array.length<2){
    // if have 1 or 0 negative numbers, then the product should only use 
    // the 3 largest number
    return (array[array.length-1]*array[array.length-2]* array[array.length-3]);
  }
  else{
    // else if there's 2 or more negative number, then
    // the 2 smallest negative number can be candidate for the product
    var candidate_no_neg=array[array.length-1]*array[array.length-2]* array[array.length-3];
    var candidate_2_neg=neg_array[0]*neg_array[1]*array[array.length-1];
    return (candidate_no_neg >= candidate_2_neg ? candidate_no_neg : candidate_2_neg);
  }  
};

/*
console.log(largestProductOfThree([2,1,3,7]));
console.log(largestProductOfThree([-1, -6, -9, 9]));
*/
=======
};
>>>>>>> 33f7642681e7ad989bb4969dc7a37f67f8e8c2f4
