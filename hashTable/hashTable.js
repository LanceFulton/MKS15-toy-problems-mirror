/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = [];
    if (storage[index]){
      bucket = storage[index];
    }
    var found = false;
    for (var i = 0 ; j < bucket.length ; i++){
      if (bucket[i][0] === key){
        bucket[i] = [key, value];
        found = true;
        break;
      }
    }
    if (!found){
      bucket.push([key, value]);
    }
  };

  result.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key);
    var bucket = storage[index];
    for (var i = 0 ; i < bucket.length ; i++){
      if (bucket[i][0] === key){
        return bucket[i][1];
      }
    }
  };

  result.remove = function(key){
    var index = getIndexBelowMaxForKey(key);
    var bucket = storage[index];
    for (var i = 0 ; i < bucket.length ; i++){
      if (bucket[i][0] === key){
        bucket.splice[i,1];
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
