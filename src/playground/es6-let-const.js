//Playing with var, let, const 


var nameVar = 'Dave';
nameVar = 'David';
console.log('nameVar', nameVar);


let nameLet = 'Dave';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

var fullName = "Dave Downs";

if (fullName) {
  var firstName = fullName.split(' ')[0];
  console.log(firstName);
};
