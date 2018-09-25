class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        //return 'Hi! ' + this.name;
        return `Hi! I am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old!!`;
    }
}

const me = new Person('Pranav Kulshrestha', 20);


class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
      if(this.hasMajor())  description += ` Their major is ${this.major}`
        return description;
    }
}

const me1 = new Student('Pranav Kulshrestha', 30, 'B.tech');
console.log(me1.getDescription());

const other = new Student();
console.log(other.getDescription());

class Traveler extends Person {
    constructor(name, homeLocation){
        super(name);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) greeting += ` I'm visiting from ${this.homeLocation}`;
        return greeting;
    }
}

const me2 = new Traveler('Pranav Kulshrestha', 'Jaipur');
console.log(me2.getGreeting());

const other2 = new Traveler(undefined, 'nowhere');
console.log(other2.getGreeting());