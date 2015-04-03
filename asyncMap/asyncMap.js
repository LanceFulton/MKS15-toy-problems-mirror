'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */


var asyncMap = function(tasks, callback) {
  var results = [];

  for (var i = 0; i < tasks.length; i++) {
    results[i] = setTimeout(function() {
      return tasks[i](callback);
    }, 1);
  }

  return results;
};


var asyncMap = function(tasks, callback) {
  var resultsArray = []; // store the results of task in results array
  var resultsCount = 0; // count the number of tasks we performed
// then execute the callback on the results Array;

  for (var i = 0; i < tasks.length; i++) {
    (function(ind) { // the ind is passed in from an immediate function innocation (i) from line 69
      tasks[ind] (function (val) {
        resultsArray[ind] = val;
        resultsCount++;
        if(resultsCount === tasks.length) {
          callback(resultsArray);
        }
      });
    })(i);
  }
};
