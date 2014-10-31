var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head === null) {
      list.head = makeNode(value);
      list.tail = list.head;
    } else {
      list.tail.next = makeNode(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
      result = list.head.value;
      list.head = list.head.next;
      return result;
  };

  list.contains = function(target){
    var result = false;
    for (var key in list) {
      var values = list[key].value;
      if (values === target) {
        result = true;
      }
    }
    return result;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
