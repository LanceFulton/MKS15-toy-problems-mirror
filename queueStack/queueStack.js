/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  this.storage = {};
  this.count = 0;
  // add an item to the top of the stack
  this.push = function(val){
    this.storage[this.count++]=val;
  };

  // remove an item from the top of the stack
  this.pop = function(){
    if (this.count) {
      var item = this.storage[--this.count];
      delete this.storage[this.count];
      return item;
    }
  };

  // return the number of items in the stack
  this.size = function(){
    return this.count;
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

// var stack = new Stack();
// stack.push(2);
// stack.push(3);
// console.log(stack.pop()); // 3
// stack.push(4);
// console.log(stack.size()); // 2
// console.log(stack.pop()); // 4
// console.log(stack.pop()); // 2
// console.log(stack.pop()); // undefined

// var queue = new Queue();
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.dequeue()); // 2
// queue.enqueue(4);
// console.log(queue.size()); // 2
// console.log(queue.dequeue()); // 3
// console.log(queue.dequeue()); // 4
// console.log(queue.dequeue()); // undefined
