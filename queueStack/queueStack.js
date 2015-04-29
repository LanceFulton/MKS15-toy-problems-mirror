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

  if (inbox._size) {

    var outboxCounter = inbox._size - 1;

    while(inbox._size > 1) {
      var value = inbox.pop();
      outbox.push(value);
    }

    var result = inbox.pop();

    while(outboxCounter > 0) {
      value = outbox.pop();
      inbox.push(value);
      outboxCounter--;
    }

    outbox.push(value);

    return result;

  }

  return null;

};

  // should return the number of items in the queue
Queue.prototype.size = function() {
    return inbox.size();
};

/* MKS Solution:

var Stack = function()
  var storage = [];
  var length = 0;
  this.push = function(value){
    storage[length++] = value;
  };
  this.pop = function(){
    if(length){
      var value = storage[--length];
      delete storage[length];
      return value;
    }
  };
  this.size = function(){
    return length;
  };
};

var Queue = function(){
  var inbox = new Stack();
  var outbox = new Stack();
  this.enqueue = function(item){
    inbox.push(item);
  };
  this.dequeue = function(){
    if(outbox.size() === 0){
      while(inbox.size() !== 0){
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  };
  this.size = function(){
    return inbox.size() + outbox.size();
  };
};

*/

