/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(value){
    var hashedKey = getIndexBelowMaxForKey(value, storageLimit);
    if(storage[hashedKey]!=="undefined") {
      storage[hashedKey] = [value];
    } else {
      var tempArray = storage[hashedKey]; // Collect the existing arrayed entry
      tempArray.push([value]); // automatically updated in storage.
    }
    
    //console.log("insert -> storage: ", storage, " key: ", hashedKey, " value: ", value);
  };

  result.retrieve = function(key){
    var retVal;
    var hashedKey = getIndexBelowMaxForKey(value, storageLimit);
    if(storage[hashedKey]!=="undefined") {

    }
    return retVal;
  };

  result.remove = function(value){
    console.log("REMOVE.");
    var result = false;
    var hashedKey = getIndexBelowMaxForKey(value, storageLimit);
    if(storage[hashedKey]!=="undefined") {
      var hashedArray = storage[hashedKey];
      var retIndex = hashedArray.indexOf(value);
      if(retIndex>=0) {
        delete hashedArray[retIndex];
      }
    }
    
  };
console.log("RESULT :", result);
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


var myHash = makeHashTable();
myHash.insert("10");
myHash.insert("20");
myHash.insert("21");
myHash.insert("22");
console.log("REMOVED: " + myHash.remove("21"));

