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
  var result = false;
  if (this.value = target) {
    result = true;
  }
  return result;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
