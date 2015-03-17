/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing only the unique characters found in both strings, in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */


var commonCharacters = function(string1, string2) {
  var result ="";
  var check = function(stringA, stringB){
    var temp="";
    for (var i = 0; i<stringA.length; i++){
      for(var j = 0; j<stringB.length; j++){
        if(stringA[i] === stringB[j]){
          temp +=stringA[i];
          //remove letter from sting if checked
          stringB = stringB.slice(j,stringB.length);       
        }
      }
    }
    result=temp;
  };
  //using arguments to check any strings passed inside. 
  for (var i = 0; i<arguments.length; i++){
    if(result.length === 0){
      check(arguments[i],arguments[i+1]); 
    } else {
      check(result,arguments[i]);
    }        
  }   
  return result;
};
//commonCharacters('acexivou', 'aegihobu', 'aei',"ai"); -> 'ai'
