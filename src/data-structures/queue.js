//Queues

function Queue() {
    var collection = []; //this is queue
    //display items in queue
    this.print = function () {
        console.log('persons in queue',collection);
    }
    //add to queue
    this.enqueue = function(element) {
        collection.push(element);
    }
    //take item of queue
    this.dequeue = function() {
        return collection.shift();
    }
    //return first item of an queue without deleting it
    this.front = function() {
        return collection[0]; // index 0 is the first item in an array
    }
    // return the size of an queue
    this.size = function() {
        return collection.length;
    }
    //check if queue is empty or not
    this.isEmpty = function() {
        return (collection.length === 0)
    }
}

var q = new Queue();
console.log('1st person entered queue');
q.enqueue('1');
console.log('2nd person entered queue');
q.enqueue('2');
console.log('3rd person entered queue');
q.enqueue('3');
q.print();
console.log('take out the first person in queue.who is ',q.dequeue());
console.log('after first person move out of queue.',q.front(),'is the first person in queue');
q.print();