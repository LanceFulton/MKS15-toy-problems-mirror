
var bind = function(functiontoRun, context) {
  var args = [];
  for(var i = 2; i < arguments.length; i++){
  	args.push(arguments[i]);
  }

  return function(){
  	for(var i = 0; i < arguments.length; i++){
  		args.push(arguments[i]);
  	}
  	context = context || null;
  	functiontoRun.apply(context, args);
  }

};
/*
//example 1:

var alice = {
 name: 'alice',
 shout: function(){
   console.log(this.name);
 }
}
var boundShout = bind(alice.shout, alice);
boundShout(); // alerts 'alice'
boundShout = bind(alice.shout, {name: 'bob'});
boundShout(); // alerts 'bob'

//example 2:

var func = function(a, b){ return a + b };
var boundFunc = bind(func, null, 'foo');
var result = boundFunc('bar');
console.log(result);
result === 'foobar'; // true
*/

Function.prototype.bind = function(context) {
	functiontoRun = this;
  var args = [];
  for(var i = 1; i < arguments.length; i++){
  	args.push(arguments[i]);
  }

  return function(){
  	for(var i = 0; i < arguments.length; i++){
  		args.push(arguments[i]);
  	}
  	context = context || this;
  	functiontoRun.apply(context, args);
  }
};

/*
//example 1:

var alice = {
  name: 'alice',
  shout: function(){
    console.log(this.name);
  }
}
var boundShout = alice.shout.bind(alice);
boundShout(); // alerts 'alice'
boundShout = alice.shout.bind({name: 'bob'});
boundShout(); // alerts 'bob'

//example 2:

var func = function(a, b){ return a + b };
var boundFunc = func.bind(null, 'foo');
var result = boundFunc('bar');
result === 'foobar'; // true
*/



