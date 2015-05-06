/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {

  // create subarrays

  var storage = {};
  var result = [];

  var countEm = function(string){
    for (var i = 0 ; i < string.length ; i++){
      var character = string[i];
      if ( storage[character] ){
        storage[character]++;
      } else {
        storage[character] = 1;
      }
    }
  };

  var arrayify = function(object){
    for (var key in object){
      var subArray = [];
      subArray.push(key);
      subArray.push( object[key] );
      result.push(subArray);
    }
  };

  // sort subarrays by count
  var sortByQuanitity = function(array){
    array.sort(function(a,b){
      return a[1] - b[1];
    })
    return array;
  };

  countEm(string);
  arrayify(storage);
  sortByQuantity(result);


  // sort equal-count subarrays by character


  return result;
};

















