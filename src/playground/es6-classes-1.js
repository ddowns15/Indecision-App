
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${ this.name }!`; //note: these are not quotes, they are backspace icons
  }
  getDescription() {
    return `${ this.name } is ${this.age} year(s) old.`;
  }
}
//Below is an alternative that works as well
// class Person {
//   constructor(name) {
//     this.name = name || 'Anonymous';
//   }
//   getGreeting() {
//     return 'Hi! I am ' + this.name + '!';
//   }
// }


// class Student extends Person{
//   constructor(name, age, major) {
//     super(name, age);
//     this.major = major;
//   }
//   hasMajor() {
//     return  !!this.major;
//   }
//   getDescription() {
//     let description = super.getDescription();
//     if (this.hasMajor()) {
//       description += ` Their major is ${this.major}`;
//     }
//     return description;
//   }
// }

// /Challenge below - make new class extending Person; add support for homeLocation; override getGreeting
class Traveler extends Person{
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Traveler('David Downs', 28, 'Newport Beach');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
