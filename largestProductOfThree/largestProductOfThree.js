/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var sorted = array.sort(function(a, b){//-----------Sorting array in descending order so we can pop off the largest values right away
    return b - a;
  });
  return sorted[0] * sorted[1] * sorted[2];//---------Returns the largest product of the three highest values
};

//The largest product will always be made up of the largest three numbers if negatives aren't included. 
//So I should sort the input array and multiply the first three numbers because they will be the largest.


//So far my complexity is linear due to having to sort the array. 

//Thinking about how to deal with negatives. 
  //If I have one negative number I can ignore it. 
  //If I have two or more negatives, it is possible to have a product that is no longer negative. 

//Essentially if I want to deal with negative numbers, I will need to first make sure there are at least two 
//negatives in the array. If there are, I will want to sort them to find out which ones are the lowest negatives.
//I would then need to find the absolute value of the two lowest negatives.
//After obtaining the absolute values, I would want to compare them to the largest positive numbers to see if they
//are both greater than the second and third largest number. 
//If this case is true then I will be able to include them in finding my largest product. 
//If they are lower than the second highest number, then we cannot include them because they will not find the highest product. 
