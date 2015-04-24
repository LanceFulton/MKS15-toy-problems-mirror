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
  this.push = function(value){
    this.storage[this.count] = value;
    this.count++;
    return value;
  };

  // remove an item from the top of the stack
  this.pop = function(){
    this.count--;
    var valueDestructified = this.storage[this.count];
    delete this.storage[this.count];
    return valueDestructified;
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
  this.enqueue = function(value){
    inbox.push(value);
    return value;
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    if(outbox.size() === 0){
      for(var i = 0; i < inbox.size(); i++){
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
// console.log(stack.push(5));
// console.log(stack.push(12));
// console.log(stack.push(13));
// console.log("size: " + stack.size());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log("size: " + stack.size());

var queue = new Queue();
console.log(queue.enqueue(5));
console.log(queue.enqueue(12));
console.log(queue.enqueue(13));
console.log(queue.enqueue(15));
console.log(queue.enqueue(20));
console.log("size: " + queue.size());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log("size: " + queue.size());
