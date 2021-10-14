console.log("js1 good to go");
/**************************DOM VARIABLES************/
let tiles = document.querySelectorAll(".block");
let replay = document.getElementById("replay");
/**************************ARRAYS AND OBJS**********/
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];
/*************************VARIABLES****************/
let origboard;
const huplayer = "\u274C";
const aiplayer = "\u2B55";
/*********************FUNCTIONS*******************/
const turn = (squareId, player) => {
  origboard[squareId] = [player];
  document.getElementById(squareId).innerText = player;
};

const turnclick = (square) => {
  turn(square.target.id, huplayer);
};

const startgame = () => {
  origboard = Array.from(Array(9).keys);
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].textContent = "";
    tiles[i].addEventListener("click", turnclick, false);
    tiles[i].style.removeProperty("background-color");
  }
};

startgame();
/*********************EVENT LISTENERS**************/
replay.addEventListener("click", startgame);
