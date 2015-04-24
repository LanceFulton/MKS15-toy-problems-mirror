/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */

// Stack implemented without using an array
var Stack = function() {
  this.storage = {};
  this.count = 0;
  this.last = null;

  // add an item to the top of the stack
  this.push = function(value){
    this.last = this.count;
    this.storage[this.count++] = value;
  };

  // remove an item from the top of the stack
  this.pop = function(){
    var result = this.storage[this.last];
    this.storage[this.last--] = null;
    this.count--;
    return result;
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
    // TODO: implement `enqueue`
    if(inbox.count === 0){
      outbox.push(value);
    } else {
      var temp = [];
      var length = outbox.count;
      //store all values of outbox stack in array to maintain order
      for (var i = 0; i < length; i++){
        temp.push(outbox.pop());
      }
      //push the newest value first so it's at bottom of stack
      outbox.push(value);
      for (var i = length; i >= 0; i--){
        outbox.push(temp[i]);
      }
    }

    inbox.push(value);


    //push first value onto outbox
    //all subsequent pushes need to do as follows
    //store the last value of outbox in a temp var
    //push the new value
    //push the temp var

  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    // TODO: implement `dequeue`
    return outbox.pop();
  };

  // should return the number of items in the queue
  this.size = function(){
    // TODO: implement `size`
    return outbox.size();
  };
};
