//   window.onload = TicTacToe;
//
//   function TicTacToe() {
//       if(Math.random() > .5) {
//     window.alert("your turn Player1(red)!")
//   } else {
//     window.alert("your turn Player2(blue)!")
//   }
// };
//
//
//
//
// let properties = document.getElementsByClassName('but');
//
// // lets the squares turn red
// for(let property of properties) {
//   property.addEventListener('click', () => {
//
//     property.style.backgroundColor = '#FF0000';
//   });
// }
//

let grid;

const resetgrid = () => {
grid = [
  [null, null, null],
  [null, null, null],
  [null, null, null], ]
};

 const insertSymbol = (symbol, x, y) => {
   grid[y][x] = symbol;
   drawGrid();
   win();
 };

const clearChildren = (element) =>{
  while(element.firstChild) {
    element.removeChild(element.firstChild)
  }
}


const win = ()=> {
    if (grid[0][0] && grid[0][1] && grid[0][2] === "x") {
      alert("Winner!")

      }
  };


const drawGrid = () => {
  let tableEl = document.querySelector('table')
    clearChildren(tableEl)
  for(let row of grid) {
    let rowEl = document.createElement('tr');
    for(let column of row){
      //create div and put text in it
      let cellEl = document.createElement('td');
      let symbol = column;
      if (column === null){
        symbol = " ";
      }
      let cellTxt = document.createTextNode(symbol);
      cellEl.appendChild(cellTxt);
      rowEl.appendChild(cellEl);
    }
    tableEl.appendChild(rowEl);
  }
};
// column.addEventListener('click') => {
//   alert(yess)
// };
//create div and put text in it
// let el = document.createElement('div');
// let txt = document.createTextNode('hello world');
// el.appendChild(txt);
// document.body.appendChild(el);
//resets grid and
resetgrid();
drawGrid();
// let playerone = "X";
// let playertwo = "O";
