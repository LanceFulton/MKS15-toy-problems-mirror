// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
  var result = 0;
  for (var i = 0 ; i < y ; i++){
    result = result + x;
  }
  return result;
};

var divide = function(x, y) {
  var dividend = x;
  var times = 0;
  if (x >= y){
    while (dividend > y){
      dividend = dividend - y;
      times++;
    }
    // var remainder = x - y*times;
    console.log('remainder ', remainder);
    return times + remainder;
  } else {

  }
};

var modulo = function(x, y) {
  // TODO: should return the remainder of x / y
};


