/* Write a function that finds the largest possible product of any three numbers
 * from an array.
<<<<<<< HEAD
 *
=======
 * 
>>>>>>> 33f7642681e7ad989bb4969dc7a37f67f8e8c2f4
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // TODO: everything
<<<<<<< HEAD
  //Largest product of three will be the three largest numbers multiplied by each other
  var bubbleSort = function(num1, num2, index){
    if(num2 === undefined){
      return;
    }

    if(num1 > num2){
      array[index] = num2;
      array[index+1] = num1;
      swapCount++;
    }

    index++;
    bubbleSort(array[index], array[index+1], index);
  }

  //bubble sort three times to get the three largest numbers
  for (var i = 0; i < 3; i++){
    var swapCount = 0;
    bubbleSort(array[0], array[1], 0);
    if(swapCount === 0){
      break;
    }
  }
  //then multiply the last three items in array together
  return array[array.length - 1] * array[array.length - 2] * array[array.length - 3];
=======
>>>>>>> 33f7642681e7ad989bb4969dc7a37f67f8e8c2f4
};
