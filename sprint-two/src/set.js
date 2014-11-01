var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  //Create a property/value pair the storage object
  this._storage[item] = item;
};

setPrototype.contains = function(item){
  // check if property exists on object
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item){
  //Remove a property/value pair from the storage object
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
