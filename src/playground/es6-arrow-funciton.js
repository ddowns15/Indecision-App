//ES5 function
const square = function (x) {
  return x * x;
};
console.log(square(8));


//ES5 without const variable function
function squareFunction(x) {
  return x * x;
};
console.log(squareFunction(8));


//ES6 arrow function
const squareArrow = (x) => {
  return x * x;
};
console.log(squareArrow(8));

//ES6 Concise arrow function (works as long as you only return a single expression)
const squareArrowConcise = (x) => x * x;
console.log (squareArrowConcise(8))






const fullNamez = "Dave Downs";
//Challenge from es6 arrow pt 1
const getFirstName = (fullName) => {
  return fullName.split(" ")[0];
};
console.log(getFirstName(fullNamez));



//Challenge from es6 arrow pt 1
const getFirstNamec = (fullName) => fullName.split(" ")[0];
console.log(getFirstNamec(fullNamez));
