var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.count = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count += 1;
};

stackMethods.pop = function() {
  this.count -= 1;
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
};

stackMethods.size = function() {
  if (this.count < 0) {
    this.count = 0;
  }
  return this.count;
};
