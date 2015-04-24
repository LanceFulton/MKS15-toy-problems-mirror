/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  this.storage={};
  this.top= -1;

  // add an item to the top of the stack
  this.push = function(value){
    this.top++;
    this.storage[this.top]= value;
  };

  // remove an item from the top of the stack
  this.pop = function(){
    if (this.top <0) {
      return null;
    }
    var value=this.storage[this.top];
    delete this.storage[this.top];
    this.top--;
    return value;
  };

  // return the number of items in the stack
  this.size = function(){
    return (this.top+1);
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
    // TODO: implement `enqueue`
    inbox.push(value);
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    // TODO: implement `dequeue`
    if (inbox.size() <=0) {
      return null;
    }
    while (inbox.size()>0) {
      outbox.push(inbox.pop());
    }
    var value = outbox.pop();
    while (outbox.size()>0) {
      inbox.push(outbox.pop());
    }
    return value;
  };

  // should return the number of items in the queue
  this.size = function(){
    // TODO: implement `size`
    return outbox.size();
  };
};

var myStack= new Stack();
myStack.push(1);
console.log(myStack.storage);
var myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
console.log(myQueue.dequeue());  // should print 1
console.log(myQueue.dequeue());  // should print 2
