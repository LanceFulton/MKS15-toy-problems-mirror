/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  var storage = {};
  var length = 0;

  // add an item to the top of the stack
  this.push = function(value){
    storage[length++]=value;
  };

  // remove an item from the top of the stack
  this.pop = function(){
    if(length<=0) {return undefined;}
    return storage[--length];
  };

  // return the number of items in the stack
  this.size = function(){
    return length;
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
    
    // for(var i=inbox.size(); i>0; i--) {
    //   console.log('i = ' + i );
    //   outbox.push(inbox[i]);
    //   outbox.push(inbox[i]);
    //   console.log('outbox : ', outbox.pop());
    // }

    
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    return outbox.pop();
  };

  // should return the number of items in the queue
  this.size = function(){
    return inbox.size;
  };
};

var myStack = new Stack();
myStack.push(10);
myStack.push(11);
myStack.push(12);
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.size());
console.log('---');
var myQueue = new Queue();
myQueue.enqueue(100);
myQueue.enqueue(101);
myQueue.enqueue(102);


