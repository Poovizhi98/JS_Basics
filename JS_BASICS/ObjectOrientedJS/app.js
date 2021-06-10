// OBJECT
// const brad = {
//     name: 'Brad',
//     age: 30
// }

// PERSON CONSTRUCTOR
function Person(firstName, lastName, dob) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.birthday = new Date(dob),
    // this.calculateAge = function() {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
    console.log(this,'this inside')
}

// calculate age function would be same for all the persons
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
}
// PERTAINS TO WINDOW OJECT
console.log(this,'this outside')

const brad = new Person('Brad', 'Traversy','12-07-90');

brad.getsMarried('Smith');

console.log(brad.getFullName());

console.log(brad.hasOwnProperty('firstName'));

console.log(brad.hasOwnProperty('getFullName'));

// ex for Constructor
// const dob = new Date('01-01-1970');  new is a constructor

// BUILT-IN CONSTRUCTORS
const jeff = new String('Jeff'); 
jeff.foo = 'bar'; // we can add properties
console.log(jeff);  // String {"Jeff"}0: "J"1: "e"2: "f"3: "f"length: 4__proto__: String[[PrimitiveValue]]: "Jeff"

const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1, re2)

function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// prototype inheritance
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return customer
Customer.prototype.constructor = Customer;

Customer.prototype.getFullName = function() {
    return `This is overloading ${this.firstName} ${this.lastName}`
}

const customer1 = new Customer('John', 'Tackery', '978-740-4130', 'Standard');

console.log(customer1.getFullName(), 'customer1')

// ES6 class and Subclass
class Customer1 extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }
}

const customer2 = new Customer1('Jasmine', 'Tomy', '988-765-5678', 'Standard');

console.log(customer2.getFullName());