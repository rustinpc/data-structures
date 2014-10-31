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
  //check if obj's value === target value
  if (this.value === target) {
  // return true
    return true;
  } // if obj's value !== target value
  else {
    if (this.children === undefined) {
      return false;
    }
    else {
      for (var i = 0; i < this.children.length; i++) {
        return this.children[i].contains(target);
      }
    }
  }
  // check if obj has children;
  //      if obj has children
  //          check if children's value == target
  //          return true
  //
  //          if children's value !== target;
  //            check child's child (recursive)
  //
  //      if obj doesn't have chidlren
  //          return false;


};


/*
 * Complexity: What is the time complexity of the above functions?
 */
