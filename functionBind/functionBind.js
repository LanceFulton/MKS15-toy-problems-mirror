/*
 function bind():
  example 1:
  var alice = {
   name: 'alice',
   shout: function(){
     alert(this.name);
   }
 }
 var boundShout = bind(alice.shout, alice);
 boundShout(); // alerts 'alice'
 boundShout = bind(alice.shout, {name: 'bob'});
 boundShout(); // alerts 'bob'

  example 2:
  var func = function(a, b){ return a + b };
 var boundFunc = bind(func, null, 'foo');
 var result = boundFunc('bar');
 result === 'foobar'; // true
 */

var bind = function(cb) {
  // TODO: Your code here
  var args = [];
  for (var i = 1; i < arguments.length; i++){//This will create an array of arguments that excludes the initial callback.
    args.push(arguments[i]);
  }
  return cb.apply(this, args);//The idea is to apply all of the arguments to the callback that we are using as our argument.
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

Function.prototype.bind = function() {
  // TODO: Your code here
};
