/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

 // issue: I fear that storing a key is simiar to storing plain text passwords,
 // and so the preferred method would be to resize the hash table.

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit)
    var bucket = [];
    var storedHash = bucket.push(key, value);
    if (!storage[index]){
      storage[index] = storedHash;
    } else {
      storage[index].push(storedHash);
    }
  };

  result.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (!storage[index]){
      return null;
    } else {
      for (var i = 0; i < storage[index].length; i++){
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };

  result.remove = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
     if (!storage[index]){
      return null;
    } else {
      for var(i = 0; i < storage[index].length; i++){
        if (storage[index][i][0] === key) {
          storage[index][i][1] = null;
          break;
        }
      }
    };
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
