/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
   // var x = string.sort();
   var result =[];
   var array = string.split("").sort();
    console.log(array);
    for (var i =0; i<array.length; i++) {
        //we only want first result to be returned
        if(result.length === 0) {
            //if this = to next then we want to skip
            if (array[i] == array[i+1]){
            i++;
            }  else {
            //if this is unique then add to results    
            result.push(array[i]);
            }   
        }
    }
    //we want to return our result as a string
    return result.toString();
};
//tested both cases and got correct values
//firstNonRepeatedCharacter('ABA'); 
//firstNonRepeatedCharacter('AACBDB');

