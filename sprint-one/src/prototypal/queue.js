var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.begin = 0;
  someInstance.end = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end += 1;

};

queueMethods.dequeue = function(){
  var result = this.storage[this.begin];
  delete this.storage[this.begin];
  this.begin += 1;
  return result;

};

queueMethods.size = function(){
  if (this.end - this.begin < 0) {
    this.end = this.begin;
  }
  return this.end - this.begin;
};


