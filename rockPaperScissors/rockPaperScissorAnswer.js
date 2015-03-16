

var rockPaperScissors = function(rounds) {
	round =  round || 3; //Either we set rounds to equal rounds, or we set it to three automatically. 
	var rpsArray = ['rock', 'paper', 'scissor'];
	var results = [];
	//Define recursive function that takes in an array arg. 
	var recurse = function(currentArray){
		//first we need a base case 
		if (currentArray.length === rounds){
			results.push(currentArray);
			return;
		}
		//Recursive functions tend to have loops within them, so we can place one here
		for(var i = 0; i < rpsArray; i++){
			var currentPlay = rpsArray[i];
			recurse(currentArray.concat(currentPlay));
		}
	}
	//Call recursive function initially
	recurse( [] );

	return results;
}