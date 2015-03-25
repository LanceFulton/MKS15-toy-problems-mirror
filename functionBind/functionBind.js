/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function() {
	//convert arrguments into array
	var args = Array.prototype.slice.call(arguments);
	//save arguments 0 
	var self = args[0];
	//slice arguments 0
	args = args.splice(1,args.length);
	//return annon. function
	return function (){
		 //return function with a given this value and arguments provided as an array
		 return self.apply(args[0], args.splice(1, args.length));
	};
};

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/


//edge case, if there is no null, then ill have to use first argument
//if null then it will do this, else will be arguments[0]


Function.prototype.bind = function() {
	//convert arrguments into array
	var args = Array.prototype.slice.call(arguments); 
	//slice arguments 0
	args = args.splice(1,args.length);
	//return annon. function
	var self = arguments[0] || this;
	return function (){
		//getting arguments from anno function
		var temp = Array.prototype.slice.call(arguments);
		//join arguments with bind args
		var params = args.concat(temp);
		//return function with a given this value and arguments provided as an array
		return self.apply(self, params);
	};
};
