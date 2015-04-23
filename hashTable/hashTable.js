/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function(){
  var result = {};
  result.storage = [];
  var storageLimit = 1000;

  result.insert = function(str, value){
    var hashVal = getIndexBelowMaxForKey(str, storageLimit);
    if (this.storage[hashVal] === undefined) {
      this.storage[hashVal] = [];
    }
    this.storage[hashVal].push([str, value]);
  };

  result.retrieve = function(str){
    var hashVal = getIndexBelowMaxForKey(str, storageLimit);
    var location = this.storage[hashVal];

    if (!location) {
      return null;
    } else {
      for (var i = 0; i < location.length; i++) {
        if (location[i] !== null && location[i][0] === str) {
          return location[i][1];
        }
      }
    }
    return null;
  };

  result.remove = function(str){
    var hashVal = getIndexBelowMaxForKey(str, storageLimit);
    var location = this.storage[hashVal];

    if (!location) {
      return null;
    } else {
      for (var i = 0; i < location.length; i++) {
        if (location[i] !== null && location[i][0] === str) {
          location[i] = null;
          return;
        }
      }
    }
    return null;
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
