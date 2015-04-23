/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function(key, val){
    // TODO: implement `insert()`
    var i = getIndexBelowMaxForKey(key, storageLimit);
    if (!storage[i]) {
      storage[i]=[[key, val]]; 
    }
    else{
      storage[i].push([key, val]);
    }
  };

  result.retrieve = function(key){
    // TODO: implement `retrieve()`
    var i = getIndexBelowMaxForKey(key, storageLimit);
    if(!storage[i]){
      return null;
    }
    for(j = 0; j < storage[i].length; j++){
      currentIndx = storage[i][j]
      if(key === currentIndx[0]){
        return currentIndx[1];
      }
    }
  };

  result.remove = function(key){
    // TODO: implement `remove()`
    var i = getIndexBelowMaxForKey(key, storageLimit);
    storage[i] = null;
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
