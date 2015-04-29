/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function(){
  var result = {};
  var bucket = [];
  var storageLimit = 1000;

  result.insert = function(value){
    var hash = getIndexBelowMaxForKey('string', storageLimit);
    if (!result.hash) {
      result.hash = value;
    } else {
      bucket.push({hash: value});
      result.hash = bucket;
    }
  };

  result.retrieve = function(hash){
    if (result.hash && Array.isArray(result.hash)) {
      for (var i = 0; i < result.hash.length; i++) {
        return result.hash[i];
      }
    } else {
      return result.hash;
    }
  };

  result.remove = function(hash) {
    //use retrieve function to find the value
    //if result.hash is the value; delete it
    //if there is a bucket with more than one value, not sure which one to delete. 
    
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


//__________________________SOLUTION___________________________


var makeHash = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function(key, value){
    // Calculate the hash (index)
    var hash = getIndexBelowMaxForKey(key, storageLimit);
    // Grab and initialize the storage slot
    storage[hash] = storage[hash] || [];
    var pairs = storage[hash];

    var replaced = false;
    // Replace the pair, if it already exists
    _.each(pairs, function(pair) {
      if (pair[0] === key) {
        pair[1] = value;
        replaced = true;
      }
    });
    // Add the pair, if it is new
    if (!replaced) {
      pairs.push([key, value]);
    }
  };

  result.retrieve = function(key){
    // Calculate the hash (index)
    var hash = getIndexBelowMaxForKey(key, storageLimit);
    // Grab the storage slot
    var pairs = storage[hash] || [];
    var pair;

    // Loop through the storage slot
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      // If the keys match, return its value
      if (pair[0] === key) {
        return pair[1];
      }
    }
  };

  result.remove = function(key){
    // Calculate the hash (index)
    var hash = getIndexBelowMaxForKey(key, storageLimit);
    // Grab the storage slot
    var pairs = storage[hash] || [];
    var pair;

    // Loop through the storage slot
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        // The only difference:
        // Remove the key-value pair
        var removedPair = pairs.splice(i,1);
        // And return the value
        return removedPair[1];
      }
    }
  };

  return result;
};

var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


