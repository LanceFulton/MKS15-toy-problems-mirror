/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function(){
  var result = {};
  var storage = []; 
  var storageLimit = 1000;

  result.insert = function(str, max){
    // TODO: implement `insert()`
    var i = getIndexBelowMaxForKey(str, this.storageLimit);
    var bucket = []; //Bucket used to avoid collisions
    if (!storage[i]) {
      storage[i] = 
    }
  };

  result.retrieve = function(str){
    // TODO: implement `retrieve()`
    var i = getIndexBelowMaxForKey(str, this.storageLimit);
    var bucket = this.storage[i];
    

  };

  result.remove = function(str){
    // TODO: implement `remove()`
    var i = getIndexBelowMaxForKey(str, this.storageLimit);

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
