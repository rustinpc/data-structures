var makeQueue = function(){
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    count += 1;
    storage[count] = value;
  };

  someInstance.dequeue = function(){
    var keyRange = [];
    for (var key in storage) {
      keyRange.push(key);
    }
    var location = Math.min.apply(null,keyRange);
    var itemToBeReturn = storage[location];
    delete storage[location];
    return itemToBeReturn;
  };

  someInstance.size = function(){
    var counter = 0;
    for (var key in storage){
      counter += 1;
    };
    return counter;
  };

  return someInstance;
};
