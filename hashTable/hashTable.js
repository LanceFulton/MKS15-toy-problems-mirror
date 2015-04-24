/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(key, val){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (!storage[index]) {
      storage[index] = [];
    }
    if (!storage[index].some(function(keyValPair) {
        if (keyValPair[0]===key) {
          keyValPair[1]=val;
          return true;
        }
      })) {
      storage[index].push([key, val]);
    }
  };

  result.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[index]) {
      for (var i=0; i<storage[index].length; i++) {
        if (storage[index][i][0]===key) {
          return storage[index][i][1];
        }
      }
    }
    return null;
  };

  result.remove = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[index]) {
      for (var i=0; i<storage[index].length; i++) {
        if (storage[index][i][0]===key) {
          return storage[index].splice(i, 1)[0][1];
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

// var hashTable = makeHashTable();

// hashTable.insert('Steven', 'Seagal');
// console.log(hashTable.retrieve('Steven')); // Seagal

// hashTable.insert('Steven', 'Spielberg');
// console.log(hashTable.retrieve('Steven')); // Spielberg

// hashTable.insert('Steven', 'Tyler');
// hashTable.remove('Steven');
// console.log(hashTable.retrieve('Steven')); // null
