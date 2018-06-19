//palindrome example to show the stack behavior in simple way
console.log('%cBegin of palindrome example..','color:green');
var letters = []; // this is our stack

var word ="racecar"; // this is palindrome

var rword = "";
//pushing alphabet by alphabet of a word racecar into a stack
for(var i=0; i<word.length; i++) {
    letters.push(word[i]);
}
//pop out and append to var rword
for(var i=0; i<word.length; i++) {
    rword = rword+letters.pop()
}

if(word === rword) {
    console.log(word + ' is a palindrome');
} else {
    console.log( word + 'is not a palindrome')
}

console.log('%cend of palindrome example','color:red');

/* Stack real example */
console.log('%cStack Real Example starts here..','color:maroon')

//creates a stack
var Stack = function() {
    this.count = 0;
    this.storage = {};
    //Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++
    }

    //removed and returns the value at the end of the stack
    this.pop = function() {
        if(this.count === 0){ //nothing in stack
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count]; //this.count is an index of a storage. Here this.count is a last item in the stack
        delete this.storage[this.count];
        return result;
    }

    //return no of items in stack
    this.size = function() {
        return this.count;
    }

    //returns the value at the end of the stack
    this.peek = function(){
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();
console.log('pushing 1 to stack');
myStack.push(1);
console.log('pushing 2 to stack');
myStack.push(2);
console.log('pushing 3 to stack');
myStack.push(3);
console.log('pushing 99 to stack');
myStack.push(99);
console.log('last item is',myStack.peek());
console.log('lets pop the last item in stack now which is ',myStack.pop());
console.log('now last item in stack is',myStack.peek());
