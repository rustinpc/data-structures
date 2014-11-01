var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var keyValueObj = {};
  keyValueObj[k] = v;

  if (!this._storage.get(i)) {
    this._storage.set(i,[keyValueObj]);
  } else {
    var currentValue = this._storage.get(i);
    currentValue.push(keyValueObj);
    this._storage.set(i, currentValue);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentValue = this._storage.get(i);
  for (var index = 0; index < currentValue.length; index++) {
    if (currentValue[index][k]) {
      return currentValue[index][k];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentValue = this._storage.get(i);
  for (var index = 0; index < currentValue.length; index ++) {
    if (currentValue[index][k]) {
      currentValue.splice(index, 1);
      this._storage.set(i, currentValue);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
