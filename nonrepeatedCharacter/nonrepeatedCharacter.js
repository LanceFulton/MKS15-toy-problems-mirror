var firstNonRepeatedCharacter = function(string) {

  var letterArray = string.split(''); //String is split into array of characters
  var previous; //Setting variable to represent our array that will be sliced below
  for (var i = 0; i < letterArray.length; i++){
    previous = letterArray.slice(0, letterArray[i]); //This sets our previous array of letters to a slice of our letter array
    if (previous.indexOf(letterArray[i], 0) === -1){ //Using indexOf, if our letter is not inside of our sliced array, we know that it is an original character
      return letterArray[i]; //Return original
    }
  }
};
