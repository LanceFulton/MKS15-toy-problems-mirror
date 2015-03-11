/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  string = string.split('');
  for(var i = 0; i<string.length; i++){
    for(var j = 0; j<string.length; j++){
    	if(string[i] === string[j] && i !== j){
    		if(i > j){
    			string.splice(i,1);
    			string.splice(j,1);
    		}else{
    			string.splice(j,1);
    			string.splice(i,1);
    		};
    	}
    }
  }
  return string[0];
};

console.log(firstNonRepeatedCharacter('ABA'));
console.log(firstNonRepeatedCharacter('AACBDB'));