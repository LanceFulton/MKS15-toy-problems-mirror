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

var bind = function(fn, context) {
  var args;
  if(arguments.length > 2) {
    args = Array.prototype.slice.call(arguments, 2);
  }

  if( args ) {
    return function() {
      return fn.apply(context, args);
    };
  } else {
    return function() {
      return fn(context);
    };
  }
};

// solution
// var bind = function(func, context) {
//   var prevArgs = Array.prototype.slice.call(arguments, 2);

//   return function() {
//     var args = Array.prototype.slice.call(arguments);
//     args = prevArgs.concat(args);

//     return func.apply(context, args);
//   };
// };

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
  var prevArgs = Array.prototype.slice.call(arguments, 1);
  var func = this;

  return function() {
    var args = Array.prototype.slice.call(arguments);
    args = prevArgs.concat(args);

    return func.apply(context, args);
  }
};
