var firstName = prompt('Enter your firstName: ')
var lastName = prompt('Enter your lastName: ')
var age = prompt('Enter your age: ')
var height = prompt('Enter your height: ')
var petName = prompt('Enter your petName: ')

alert('Thanks for giving your information.')

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

if (firstName[0] === lastName[0]) {
    nameCond = true;
}else {
  nameCond = false;
}

if (age > 20 && age < 30) {
  ageCond = true;
}else {
  ageCond = false;
}

if (height >= 170) {
  heightCond = true;
}else {
  heightCond = false;
}

if (petName[petName.length-1] === 'y') {
  petCond = true;
}else {
  petCond = false;
}

if (nameCond  && ageCond && heightCond && petCond) {
  console.log('Welcome Spy!');
}else {
  console.log('Nothing to see here!');
}
