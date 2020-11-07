function name(name='Hridoy'){
  console.log('Hello ' + name);
}


function add(num1, num2){
  console.log(num1 + num2);
}

function someone(name='Hridoy', title='Sir'){
  console.log(name + ' ' + title);

}

function someone2(name='Hridoy', title='Sir'){
  return name + ' ' + title

}

function timesFive(numInput) {
  //Local Scope to the function!
  var result = numInput * 5
  return result
}

//Global Scope

var v = 'Global variable'
var g = 'Global Scope'

function global(g='local Scope') {
  console.log(v);
  console.log(g);

}
global();
console.log(g);
