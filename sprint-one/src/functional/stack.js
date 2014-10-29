var makeStack = function(){
  var count = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[count] = value;
    count += 1;

  };

  someInstance.pop = function(){
    count -=1;
    return storage[count];
    delete storage[count];
  };

  someInstance.size = function(){
    if (count<0) {
      count = 0;
    }
    return count;
  };
  return someInstance;
};
