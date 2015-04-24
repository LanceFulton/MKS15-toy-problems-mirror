/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  var memory = {};
  var last = 0;

  // add an item to the top of the stack
  this.push = function(val){
    memory[last] = val;
    last++;
  };

  // remove an item from the top of the stack
  this.pop = function(){
    if (last !== 0) {
      var result = memory[--last];
      delete memory[last];
      return result;
    }
    return null;
  };

  // return the number of items in the stack
  this.size = function(){
    return last;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(val){
    inbox.push(val);
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    //the outbox is filled every time it is empty
    if (!outbox.size()) {
      while (inbox.size()) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  };

  // should return the number of items in the queue
  this.size = function(){
    return inbox.size() + outbox.size();
  };
};
