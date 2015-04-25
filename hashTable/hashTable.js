/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function() {
  var result = {};
  result.storage = [];
  result.storageLimit = 1000;

  result.insert = function(string, value) {
    var index = getIndexBelowMaxForKey(string, this.storageLimit);
    if ( Array.isArray(this.storage[index])) {
      this.storage[index].push({ string: value });
    } else {
      this.storage[index] = { string: value };
    }
  };

  result.retrieve = function(string) {
    var index = getIndexBelowMaxForKey[string, this.storageLimit];
    if ( Array.isArray(this.storage[index])) {
      return this.storage[index][string];
    } else {
      return this.storage[index];
    }

  };

  result.remove = function(string, value) {
    var index = getIndexBelowMaxForKey[string, this.storageLimit];
    delete this.storage[index][string];
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
