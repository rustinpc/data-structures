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
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentValue = this._storage.get(i);
  for (var index = 0; index < currentValue.length; index ++) {
    if (currentValue[index][k]) {

    }
  }



  // this._storage.each(function(value, index, storageArray) {
  //   if (index === i) {
  //     storageArray[index] = null;
  //   }
  // });
  // take key passed in, get unique id with hash fx
  // take unique hash id and remove value from storage array based on hash index id;
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
