//Linked List constructor function
function LinkedList() {
//when we create a new linked list, we will not have any HEAD/TAIL nodes and hence it will be null
    this.head = null;
    this.tail = null;
}
//Node constructor function
function Node(value,next,prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

var userList = new LinkedList();

LinkedList.prototype.addToHead = function(value) {
    var newNode = new Node(value,this.head,null);
    //add a new node if nodes are already present and hence check if(this.head)
    //say user2 is the only node present and we need to add a new node as HEAD i.e., first position. 
    //So, user1(newNode) has to be previous node to user2.
    if(this.head) this.head.prev = newNode;
    //if there is no nodes in linkedlist which means linkedlist is empty then this newNode is firstnode and hence its both HEAD and TAIL node
    if(!this.head) this.tail = newNode; //only node acts as HEAD and TAIL node
    this.head = newNode; //irrespective of empty list or not. make newNode to be HEAD node
}

LinkedList.prototype.addToTail = function (value) {
    var newNode = new Node(value,null,this.tail);
    if(this.tail) this.tail.next = newNode;
    if(!this.tail) this.head = newNode;
    this.tail = newNode;
}


//let pass a value of 100 as first node. this will be both HEAD & TAIL node
userList.addToHead(100);
//let pass a value of 200 as HEAD node
userList.addToHead(200);
userList.addToHead(300);
userList.addToTail(10);
userList.addToTail(20);
console.table(userList);

//you can also check the node value
console.log(userList.head);
console.log(userList.head.next);
console.log(userList.tail);
console.log(userList.tail.prev);
console.log(userList.tail.prev.prev);