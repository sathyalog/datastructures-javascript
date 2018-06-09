//constructor and this keyword
console.log("%c =====Constructor======",'background: green; color: white; display: block;');
//constructor function
function User(firstName,lastName,age,gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
}
//ways to instantiate constructor using new keyword
/* new keyword is used to invoke a constructor function and make an User object*/ 
var user1 = new User('Sathya','Vakacharla',30,'male');

console.log("user1",user1);

var user200 = new User('Lav','V',25,'female');

console.log("user200",user200);


/* Prototype - prototype object is a simply an object that multiple other objects can refer to, To get any info/functionality that they need.
    For our needs each of constructor functions have a prototype that all other instances will be able to refer to.
*/

//Lets put a property to our User construction 
console.log("%c =====Prototype - Add a Property & Method =======",'background: orange; color: white; display: block;');
//think that every user of FB need to have an email account ending with @facebook.com
User.prototype.emailDomain = "@facebook.com"
console.log("all users will have email domain in '%c_proto_'","color:green",user1);
console.log("'%cuser200.emailDomain is'","color:green",user200.emailDomain);
//If i want all user instances to have an email address with their names, i can do it by adding a prototype method
console.log("%cNow add a method to User using prototype","color:purple");
User.prototype.getEmailAddress = function() {
    return this.firstName + this.lastName + this.emailDomain;
}

console.log("%cfacebook email address for user1","color:gray",user1.getEmailAddress());
console.log("%cfacebook email address for user200","color:gray",user200.getEmailAddress())
