/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function(key, value){
    // TODO: implement `insert()`
    var hashedKey = getIndexBelowMaxForKey(key, storageLimit);
    if(!storage[hashedKey]){
      storage[hashedKey] = [];
    }
    storage[hashedKey].push(key);
    storage[hashedKey].push(value);
  };

  result.retrieve = function(key){
    // TODO: implement `retrieve()`
    var hashedKey = getIndexBelowMaxForKey(key, storageLimit);
    if(!storage[hashedKey]){
      return null;
    }
    if(storage[hashedKey].length > 1){
      for(var i = 0; i < storage[hashedKey].length; i++){
        if(storage[hashedKey][i] === key){
          return storage[hashedKey][i + 1];
        }
      }
    }
  };

  result.remove = function(key){
    // TODO: implement `remove()`
    var hashedKey = getIndexBelowMaxForKey(key, storageLimit);
    if(storage[hashedKey].length === 1){
      storage[hashedKey].pop();
    } else {
      for(var i = 0; i < storage[hashedKey].length; i++){
        if(storage[hashedKey][i] === key){
          storage[hashedKey].splice(i, 2);
        }
      }
    }
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
