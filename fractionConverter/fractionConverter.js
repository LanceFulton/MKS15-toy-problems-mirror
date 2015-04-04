/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
   var lengthTest;
   var temp = number.toString();
   var count = temp.split(".");
   
   if (count[1]){
       lengthTest = count[1].length;
   }
   
   var timesTen = Math.pow(10, lengthTest)||1;
   var nume = number*timesTen;
   

 
   for (var i = nume; i > 1; i--){
       if (nume % i === 0 && timesTen % i === 0) {
           nume = nume / i;
           timesTen = timesTen/i;
       }
   }
   
   return nume.toString() +"/"+timesTen.toString();
};
