/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */

var Stack = function() {
  this.storage = [];
  this.top = 0;
}

Stack.prototype.push = function(value) {
  this.storage.push(value);
  this.top++;
}

Stack.prototype.pop = function() {
  if (this.top === 0) {
    return null;
  } else {
    this.top--;
    return this.storage[this.top];
  }
}

Stack.prototype.size = function() {
  return this.top;
}

var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();

}

Queue.prototype.enqueue = function(value) {
  this.inbox.push(value);
  this.outbox.push(this.inbox.pop());
}

Queue.prototype.dequeue = function() {
  return this.outbox.pop();
}
