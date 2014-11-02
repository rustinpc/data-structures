var Graph = function(){
};

Graph.prototype.addNode = function(newNode, toNode){
  //add node to the graph object
  //connect node with edges
  // debugger;
  if (Object.keys(this).length === 1) {
    var singleNode = Object.keys(this)[0];
    this[newNode] = [singleNode];
    this[singleNode].push(newNode);
  }
  else if (toNode){
    this[newNode] = [toNode];
    this[toNode].push(newNode);
  } else {
    this[newNode] = [];
  }
};

Graph.prototype.contains = function(node){
  //check if graph object contains 'node' as a property
  //if yes, return true
  //if no, return false
  return this.hasOwnProperty(node);

};

Graph.prototype.removeNode = function(node){
  //check if the graph object contains 'node' as prop.
  //remove node from graph object
  //remove node from connected edges
  if (this[node]) {
    delete this[node];
  }


};

Graph.prototype.getEdge = function(fromNode, toNode){
  //check if fromNode has edge of toNode;
  //check if toNode has edge of from Node;
  //if both true, return true, else false;
  for (var i = 0; i < this[fromNode].length; i++) {
    return this[fromNode][i] === toNode;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  //add reciprocal edges to both fromNode and toNode

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  //remove reciprocal edges between fromNode and toNodee
};

var graph = new Graph();

/*
 * Complexity: What is the time complexity of the above functions?
 */
