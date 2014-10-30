var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  _.extend(someInstance,stackMethods);
  return someInstance;
};

var stackMethods = {};

//push
stackMethods.push = function(value){
  this.storage[this.count] = value;
  this.count += 1;

};
//pop
stackMethods.pop = function(){
  this.count -= 1;
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;

};
//size
stackMethods.size = function(){
  if (this.count < 0 ) {
    this.count = 0;
  }
  return this.count;

};

