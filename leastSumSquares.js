what is the least number of squared numbers that add up to that number

var minSq = function (val) {
  var results = [];

  if (Math.sqrt(val) % 1 ===0) {
    results.push (Math.sqrt(val));
  } else {
    var tempResults = [];
    var start = Math.floor(Math.sqrt(val));
    var valRemainder = val;

    var recurse = function(val, start) {
      while (!valRemainder && start > 0) {
        if (valRemainder >= start^2) {
          valRemainder = valRemainder - start^2;
          tempResults.push(start);
        } else {
          start--;
        }
      }
    }
    recurse(val, start-1);

    if (tempResults.length < results.length) {
      results = tempResults;
    }
    return results;
  }
}