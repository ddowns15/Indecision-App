// arguements object - no longer bound with arrow function

const add = (a, b) => {
  return a + b;
};
console.log(add(55,1));



// this keyword - no longer bound with arrow functions
const user = {
  name: 'Dave',
  cities: ['Philadelphia', 'Newport Beach'],
  printPlacesLived() {
    return this.cities.map((city) =>  this.name + ' has lived in ' + city);
  }
};




console.log(user.printPlacesLived());


//Arrow pt 2 challenge
const multiplier = {
  numbers: [1,2,3],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());
