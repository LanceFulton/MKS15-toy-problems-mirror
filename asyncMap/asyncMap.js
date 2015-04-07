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
 */


//call arguments[0](cb)
//store that result in an array
//call arguments[1](cb)
//store result in array
//log results array

var asyncMap = function(tasks, callback){
  var results = [];
  var i = 0;
  console.log(tasks);

  //trying to run the function and then call my callback
  //when it's done so it waits to call the next function until
  //the previous one has completed

  var func = function(task, cb){
    i++;
    //undefined is not a function error, don't know why
    // console.log(typeof cb);
    cb(task);
  }


  var myCallback = function(result){
    results.push(result);
    func(tasks[i]);
  }

  func(tasks[i], myCallback);
  callback(results);
};
















