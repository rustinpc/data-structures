// Complexity: Fixed
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

// Complexity: Fixed
  list.addToTail = function(value){
    if (list.head === null) {
      list.head = makeNode(value);
      list.tail = list.head;
    } else {
      list.tail.next = makeNode(value);
      list.tail = list.tail.next;
    }
  };

// Complexity: Fixed
  list.removeHead = function(){
    if (list.head !== null) {
      result = list.head.value;
      list.head = list.head.next;
      return result;
    }
  };

// Complexity: Linear
  list.contains = function(target,obj) {
    var obj = obj || list.head;

    if (obj.value === target) {
      return true;
    }
    if (obj !== list.tail) {
      return list.contains(target,obj.next);
    }
    return false;
  };

  return list;
};

// Complexity: Fixed
var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
