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
    if (list.head !== null) {
      result = list.head.value;
      list.head = list.head.next;
      return result;
    }
  };

  list.contains = function(target){
    var obj = arguments[1] || list.head;
    var result = arguments[2] || false;
    debugger;

    if (obj.value === target) {
      result = true;
      console.log(obj);
      console.log(list.tail);
    }
    if (result === false && obj!== list.tail) {
      list.contains(target,obj.next,result);
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
