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
  // TODO: Your code here
  var args=Array.prototype.slice.call(arguments);
  var myMethod=args[0];
  var obj=args[1];
  var rest=args.slice(2) || null;
  console.log (rest);
  //Array.prototype.slice.call(arguments, 2) || null;
  if (obj ===null) {
    return function(){
      myMethod(rest);
    }
  }
  else {
    return function(){
    myMethod.apply(obj, rest);
    }
  }
};

 var func = function(a, b){ return a + b };
 var boundFunc = bind(func, null, 'foo');
 var result = boundFunc('bar');
 result === 'foobar'; // true
 console.log(result);


 

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
  var args=Array.prototype.slice.call(arguments);
  var obj=args[0];
  var rest=args.slice(1);
  return bind(this,obj,rest);
};

