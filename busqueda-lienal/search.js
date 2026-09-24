const Node = require('./node');

function linearSearch(head, el) {
   let current = head;

  while (current !== null) {
    if (current.value === el) {
      return true;
    } else {
      current = current.next;
    }
  }

  return false;
}


const nodeOne = new Node(7);
const nodeTwo = new Node(2);
const nodeThree = new Node(8);
const nodeFour = new Node(4);

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
nodeThree.next = nodeFour;

console.log(linearSearch(nodeOne, 2)); // true
console.log(linearSearch(nodeOne, 7)); // true
console.log(linearSearch(nodeOne, 8)); // true
console.log(linearSearch(nodeOne, 10)); // false
