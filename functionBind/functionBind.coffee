# /*
#  * function bind():
#  *
#  * example 1:
#  *
#  * var alice = {
#  *   name: 'alice',
#  *   shout: function(){
#  *     alert(this.name);
#  *   }
#  * }
#  * var boundShout = bind(alice.shout, alice);
#  * boundShout(); // alerts 'alice'
#  * boundShout = bind(alice.shout, {name: 'bob'});
#  * boundShout(); // alerts 'bob'
#  *
#  * example 2:
#  *
#  * var func = function(a, b){ return a + b };
#  * var boundFunc = bind(func, null, 'foo');
#  * var result = boundFunc('bar');
#  * result === 'foobar'; // true
#  *
# */

bind = (func, me, args...) ->
  #hold possible extra argumenst
  rest = args
  #call callback function on the correct value context
  return func.call(me, rest)

# got too caught up in coffeescript lost track of time 




# /*
#  * Function.prototype.bind:
#  *
#  * example 1:
#  *
#  * var alice = {
#  *   name: 'alice',
#  *   shout: function(){
#  *     alert(this.name);
#  *   }
#  * }
#  * var boundShout = alice.shout.bind(alice);
#  * boundShout(); // alerts 'alice'
#  * boundShout = alice.shout.bind({name: 'bob'});
#  * boundShout(); // alerts 'bob'
#  *
#  * example 2:
#  *
#  * var func = function(a, b){ return a + b };
#  * var boundFunc = func.bind(null, 'foo');
#  * var result = boundFunc('bar');
#  * result === 'foobar'; // true
#  *
# */

Function.prototype.bind = (func, me, args...) ->
  
