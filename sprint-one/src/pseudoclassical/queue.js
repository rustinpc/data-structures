var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.begin = 0;
  this.end = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end += 1;
};
Queue.prototype.dequeue = function() {
  var result = this.storage[this.begin];
  delete this.storage[this.begin];
  this.begin += 1;
  return result;
};
Queue.prototype.size = function() {
  if (this.end < this.begin) {
    this.end = this.begin;
  }
  return this.end - this.begin;
};

var someInstance = new Queue();
