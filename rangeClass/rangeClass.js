/**
 * Build a class to represent a range of numbers that takes:
 *   - a beginning index,
 *   - an end index (optional)
 *     If there is no end index, the range should include only the passed-in start value.
 *   - a 'step' (optional)
 *     The step is the interval at which elements are included.
 *     For instance, a step of 1 includes every element in the range,
 *     while a step of 2 includes every other element.
 *
 * The range should have a constructor that accepts these arguments in that order.
 *
 * It should also support the following utility functions:
 *   - size(): return the number of items represented by the range
 *   - each(callback(index)): iterate over the range, passing each value to a callback function
 *   - includes(index): return whether or not the range includes the passed value
 *
 * You should also be aware of the following caveats:
 *   - You should allow a negative value for 'step' to count backwards.
 *     If no step is provided and the start is more than the end, assume we're counting backwards.
 *   - Should return null if we are given no 'start' value.
 *
 * Range should use constant space, even during the `each` method, * i.e. you should *not*
 * use an Array as backing storage.
 *
 * USAGE EXAMPLES:
 * var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively)
 *
 * var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.
 * evenNumbers.each(function(val){
 *   console.log(val+"!");
 * });
 * console.log("Who do we appreciate!?");
 *
 * evenNumbers.size() should be 4
 * evenNumbers.includes(2) should be true, evenNumbers.include(3) should be false
 */


var Range = function(start, end, step) {
};

Range.prototype.size = function () {
  var start = this.start||0;
  var end = this.end||this.start;
  var step = this.step||1;

  //need to count how many total numbers in the range
  //then how many of those numbers are a step %
  //may need to Math.abs on the step in the denominator???
  return Math.floor( (end - start)/step) ; //may be missing edge cases on start/end points
};

Range.prototype.each = function (callback){
  var tempStart = this.start;
  var tempEnd = this.end;
  var tempStep = this.step;

  //blown ternary attempt
  // var miniSteps = function(tempStart, tempEnd, tempStep, callback){
  //   callback(tempStart);
  //   tempStart = tempStart + tempStep;
  //   }

  // this.step >0 ? while (tempStart <= tempEnd){ miniSteps(tempStart, tempEnd, tempStep, callback); } :
  //   while (tempStart >= tempEnd){miniSteps(tempStart, tempEnd, tempStep, callback);};
    //Refactored because ternary's are pretty and need to handle negative cases. not working


    if(this.step >0){
      while (tempStart <= tempEnd){  //Need to adjust < in cases where step is negative
          callback(tempStart);
          tempStart = tempStart + tempStep;
        }
    }else{while (tempStart >= tempEnd){
          callback(tempStart);
          tempStart = tempStart + tempStep;
      }
  };

};  //no syntax errors, havent tested

Range.prototype.includes = function (val) {
  //Need within the range of the start and stop values
  //Need the val to be an even step increment from the starting value
 return ((this.start <= val)&& (this.end >= val) && (val-start)%step ===0) ? true : false;
};

var range = new Range(1);


