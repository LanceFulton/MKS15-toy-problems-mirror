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

var bind = function(func, context) {
  var args = Array.prototype.slice.call(arguments, 2);
  return function() {
    var aa = args.concat(Array.prototype.slice.call(arguments));
    return func.apply(context, aa);
  }
};


var alice = {
  name: 'alice',
  shout: function(){
    console.log('SHOUTING!!!  this.name = ' + this.name);
  }
}

console.log("OUTPUT:") 
var boundShout = bind(alice.shout, alice);
boundShout(); // alerts 'alice'
boundShout = bind(alice.shout, {name: 'bob'});
boundShout(); // alerts 'bob'


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

Function.prototype.bind = function(context) {
  var fn = this;
  var args = Array.prototype.slice.call(arguments, 2);
  return function() {
    var aa = args.concat(Array.prototype.slice.call(arguments));
    return fn.apply(context, aa);
  }
};
