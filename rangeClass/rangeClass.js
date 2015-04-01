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
  if( !start ) {
    return null;
  }
  this.start = start;
  this.end = end;
  this.step = step;
  if( !step ) {
    this.step = 1;
  }

  /*
  if start is null, return null
  if end is undefined, range returns start only
  if step is undefined,
    if end < start, step is -1
    else, step is 1

  */

};

Range.prototype.size = function () {
  if( !this.start ) {
    return null;
  } else if( !this.end ) {
    return 1;
  }
  var counter = 0;
  var i = this.start;

  if( this.step > 0 ) {
    while( i <= this.end ) {
      i += this.step;
      counter++;
    }
  } else {
    while( i >= this.end ) {
      i += this.step;
      counter++;
    }
  }

  return counter;
};

Range.prototype.each = function (callback) {
};

Range.prototype.includes = function (val) {
  if( !this.start ) {
    return false;
  }
  var i = this.start;

  if( this.step > 0 ) {
    while( i <= this.end ) {
      if( val === i ) {
        return true;
      }
      i += this.step;
    }
  } else {
    while( i >= this.end ) {
      if( val === i ) {
        return true;
      }
      i += this.step;
    }
  }

  return false;
};

var range = new Range(1);

