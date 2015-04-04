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

var bind = function(func, arg1, arg2) {
// have to check to see if the value is reset and change the function accordingly
//call the function with the new attribute
//everything contained in a new object?
//has to do with the context of 'this'
//I feel like I could solve the problem for one of the examples but not both

//I'll keep working on this problem.

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

};


//___________________SOLUTION__________________________________________________________________

var bind = function(func, context) {

  var prefArgs = Array.prototype.slice.call(arguments, 2);

  return  function () {

    var args = Array.prototype.slice.call(arguments);
    args = prevArgs.concat(args);

    return func.apply(context, args);
  };
};




Function.prototype.bind = function(context) {
  var prevArgs = Array.prototype.slice(arguments, 1);
  var func = this;

  return  function () {

  var args = Array.prototype.slice.call(arguments);
  args = prevArgs.concat(args);

  return func.apply(context, args);
  };

};


























