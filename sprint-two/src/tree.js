var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree,treeMethods);
  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){
  if (this.children === undefined) {
    this.children = [];
  }
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var result;
  if (this.value === target) {
    return true;
  }
  else if (this.children !== undefined) {
    for (var i = 0; i < this.children.length; i++) {
      result = result || this.children[i].contains(target);
    }
    return result || false;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
