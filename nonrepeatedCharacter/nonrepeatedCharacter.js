/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(sampleData) {
  var repeatedChars = [];
  var nonRepeatedChars = [];
  var i = 0;

  // var process = function( index, nonRepeatedChars ) {
  //   var tempArray = [];
  //   var repeatedChars = [];

  //   // base case
  //   if( index >= sampleData.length - 1 ) {
  //       return tempArray;
  //   }


  //   // recurse loop
  //   for (var i = 0; i < sampleData.length; i++) {
  //       if(sampleData.indexOf( repeatedChars )) {
  //           process( x, nonRepeatedChars );
  //       }
  //   };

    var numFound = 0;
    var dataSet = sampleData;
    var answerData = [];

    // Collect Repeated Chars
    for (var i = 0; i < sampleData.length; i++) {
      numFound = 0;
      for (var k = 0; k < sampleData.length; k++) {
        if( sampleData[i] === sampleData[k]) {
            numFound++;
            foundChar = sampleData[k];
            if(numFound===2) {
               repeatedChars.push(sampleData[k]);
            }
        }

      };
    };


    // Remove Repeated Chars from SampleData
    
    for (var i = 0; i < sampleData.length; i++) {
      for (var k = 0; k < sampleData.length; k++) {
        if( sampleData[k] === repeatedChars[i] ) {

        }
      }
    };



  //process( 0, nonRepeatedChars );

  return nonRepeatedChars;

};

console.log( firstNonRepeatedCharacter('ABACBDEE') );

