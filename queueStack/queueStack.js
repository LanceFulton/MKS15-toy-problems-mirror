/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  this.storage = [];
  // add an item to the top of the stack
  Stack.push = function(item){
    this.storage[this.storage.length] = item;
  };

  // remove an item from the top of the stack
  Stack.pop = function(item){
    var temp = this.storage[this.storage.length - 1];
    delete this.storage[this.storage.length - 1];
    return temp;
  };

  // return the number of items in the stack
  Stack.size = function(){
    return this.storage.length;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class

  //So, I'm guessing the goal is to not use shift or unshift because they are expensive. 

  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(item){
    
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    // TODO: implement `dequeue`
  };

  // should return the number of items in the queue
  this.size = function(){
    return inbox.size + outbox.size;
  };
};
