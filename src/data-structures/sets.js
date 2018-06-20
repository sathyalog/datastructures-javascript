function mySet() {
    //collection will hold the set
    var collection = [];
    //this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element)!== -1)
    }
    //this method will return all the values in the set
    this.values = function() {
        return collection;
    }
    //this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }
    //this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)) {
            let index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    }
    //this method will return the size of the collection
    this.size = function() {
        return collection.length;
    }
    //this method will return the union of two sets. combine sets leaving duplicates
    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();//return collection
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        })
        secondSet.forEach(function(e){
            unionSet.add(e);
        })
        return unionSet;//will not return any duplicates. it combines 2 sets by removing duplicates
    }
    //this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    //this method will return the differences of two sets as a set
    this.difference = function(otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }
    //this method will test if the set is a subset of a different set
    this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(value){ //every used to test all the elements of firstSet is present in otherSet
            return otherSet.has(value)
        });
    };
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log('%creturns true as letter a is also in otherSet','color:maroon',setA.subset(setB)); //returns true as 'a' is also in otherSet
console.log('%creturns a new set with identical value in both sets','color:blue',setA.intersection(setB).values());//return a new set with identical value in both sets
console.log('%creturns a new set with non identical values from both sets','color:red',setB.difference(setA).values());//return a new set with non identical values from both sets
console.log('%creturns a new set by combining both sets avoiding duplicates','color:green',setA.union(setB).values());//returns a new set by combining both sets avoiding duplicates
