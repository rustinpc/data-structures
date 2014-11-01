var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //insert should take a key, value pair and pass the key into the hash fx to generate unique hash index id;
  //place key/value pair in storage at last position at hash id position
  var keyValueObj = {k:v};
  this._storage.set(i,keyValueObj);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
  //take key and pass to hash fx to get unique index hash id;
  //at hash id, retreive value based on key input by iterating over stored key value pairs at hash id position

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, key, storageArray) {
    if (key === i) {
      storageArray[key] = null;
    }
  });
  // take key passed in, get unique id with hash fx
  // take unique hash id and remove value from storage array based on hash index id;




};





/*
 * Complexity: What is the time complexity of the above functions?
 */
