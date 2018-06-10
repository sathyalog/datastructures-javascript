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

LinkedList.prototype.removeHead = function () {
    //if linkedlist empty
    if(!this.head) return null;
    //list is not empty. save the value of a head node in a variable
    var val = this.head.value;
    //reposition head to the next element so we can remove current head
    this.head = this.head.next; //new head node
    //new head node can be a node itself or null if we start with one node in list
    if(this.head) this.head.prev = null; //only one node in list then make prev as null
    //if list is empty then this.head is already refer to null and hence make tail as null
    else this.tail = null;
    return val; 
}

LinkedList.prototype.removeTail = function () {
    //if linkedlist is empty
    if(!this.tail) return null;
    //list not empty. store the value of tail node
    var val = this.tail.value;
    //change the current tail pointer to the previous node
    this.tail = this.tail.prev;
    //is new tail node just assigned are present or list going to be empty after we remove this node
    //if list is not empty now
    if(this.tail) this.tail.next = null;
    //if list is going to be empty after removing original tail node, all we have to set this.head = null, because this.tail is already null
    else this.head = null;
    return val;
}

LinkedList.prototype.search = function(searchValue) {
    //check if searchvalue exists in linked list or not
    var currentNode = this.head;
    while(currentNode){
        if(currentNode.value === searchValue) return currentNode.value;
        currentNode = currentNode.next;
    }
    return null;
}

// takes a value and return all indexes of the value in an array. 
// Say, we have [3,5,3,8] values at [0,1,2,3] indexes. if you want to find '3' indexes, it should return [0,2]
LinkedList.prototype.indexOf = function (value) {
    var indexes = [];
    var currentIndex = 0;
    var currentNode = this.head;
    while(currentNode){
        if(currentNode.value === value){
            indexes.push(currentIndex);
        }
        currentNode = currentNode.next;
        currentIndex++;
    }
    return indexes;
}

//let pass a value of 100 as first node. this will be both HEAD & TAIL node
userList.addToHead('user1');
console.log(userList.head.value,"added at head");
//let pass a value of 200 as HEAD node
userList.addToHead('user2');
console.log(userList.head.value,"added at head");
userList.addToHead('user3');
console.log(userList.head.value,"added at head");
userList.addToTail('user99');
console.log(userList.tail.value,"added at tail");
userList.addToTail('user100');
console.log(userList.tail.value,"added at tail");
console.log("%cafter adding multiple nodes at head and tail, table updated as shown in below",'color:green')
console.table(userList);
console.log("%cafter removing head, table updated as shown in below",'color:red')
userList.removeHead();
console.table(userList);
console.log("%cafter removing tail, table updated as shown in below",'color:red')
userList.removeTail();
console.table(userList);
//add multiple users with same value to find the indexes of it
userList.addToHead('user10');
userList.addToTail('user10');
console.log(userList.indexOf('user10'));

//use search
console.log(userList.search('user99')); //returns value if searchValue exists in linked list
console.log(userList.search('nouser'));//returns null as there is no nodevalue with nouser

//you can also check the node values using the following ways
// console.log(userList.head);
// console.log(userList.head.next);
// console.log(userList.tail);
// console.log(userList.tail.prev);
// console.log(userList.tail.prev.prev);