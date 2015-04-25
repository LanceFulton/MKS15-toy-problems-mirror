/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  this.storage = {};
  this._size = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this._size] = value;
  this._size++;
  return value + " added";
};

  // remove an item from the top of the stack
Stack.prototype.pop = function() {
  if (this._size) {
    this._size--;
    var temp = this.storage[this._size];
    delete this.storage[this._size];
    return temp;
  }
  return null;
};

  // return the number of items in the stack
Stack.prototype.size = function() {
  return this._size;
};


/**
  * Queue Class
  */

var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
Queue.prototype.enqueue = function(value) {
  inbox.push(value);
  return value + " added";
};

  // called to remove an item from the `queue`
Queue.prototype.dequeue = function() {
  while(inbox._size > 1) {
    var value = inbox.pop();
    outbox.push(value);
  }

  var result = inbox.pop();

  while(outbox._size > 0) {
    value = outbox.pop();
    inbox.push(value);
  }

  return result;
};

  // should return the number of items in the queue
Queue.prototype.size = function(){
    return inbox.size();
  };
};

var myQueue = new Queue();

console.log(myQueue.enqueue("A"));
console.log(myQueue.enqueue("B"));
console.log(myQueue.enqueue("C"));
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.size());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.size());

