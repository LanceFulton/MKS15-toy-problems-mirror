/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function(value) {
  var stack = {}
  var size = 0

  // add an item to the top of the stack
  this.push = function(value){
    stack[size] = value
    size++
  };

  // remove an item from the top of the stack
  this.pop = function(){
    var result = storage[size]
    size--
    return result;
  };

  // return the number of items in the stack
  this.size = function(){
    return size
  };
};

/**
  * Queue Class
  */
var Queue = function(value) {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();
  var length = 0

  // called to add an item to the `queue`
  this.enqueue = function(value){
    // TODO: implement `enqueue`
    inbox.push(value);
    length++;
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    // TODO: implement `dequeue`
    //if outbox is empty
    if(outbox.size() === 0){
      //if inbox has items
      if(inbox.size() > 0){
        outbox.push(index.pop())
      }
      else{
        return null;
      }
    }
    length--;
    return outbox.pop();
  };

  // should return the number of items in the queue
  this.size = function(){
    // TODO: implement `size`
    return length;
  };
};
