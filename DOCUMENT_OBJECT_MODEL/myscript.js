//Button Reset er jnno var call korte hbe
var reset = document.querySelector('#btn');

//Sob Square dhorte hobe class wise
var squares = document.querySelectorAll('td');

//Sob square clear korte hobe

function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}
reset.addEventListener('click', clearBoard);


//square a X and O bosano

function changeMarker() {
  if (this.textContent === '') {
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
      this.textContent = 'O';
  }else {
    this.textContent = '';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changeMarker);
}
