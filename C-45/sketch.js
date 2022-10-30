var posArray = {
  "00": [[65, 155], [65, 155]],
  "10": [[65, 155], [155, 255]],
  "20": [[65, 155], [265, 355]],

  "01": [[165, 255], [65, 155]],
  "11": [[165, 255], [165, 255]],
  "21": [[165, 255], [265, 355]],

  "02": [[265, 355], [65, 155]],
  "12": [[265, 355], [165, 255]],
  "22": [[265, 355], [265, 355]]
}
var onBoard = [];

var board = [
  [],
  [],
  []
]

var won;

function setup() {
  createCanvas(420, 420);
}

function draw() {
  background(68, 55, 55);
  noStroke();
  fill(246, 233, 233);

  drawGrid();

  if(won == "o"){
    posArray = {};
    textSize(30);
    text("'O' Won", 160, 370, 120, 60);
  }
  if(won == "x"){
    posArray = {};
    textSize(30);
    text("'X' Won", 160, 370, 120, 60);
  }

  for (let i = 0; i < onBoard.length; i++) {
    onBoard[i].show();
  }
}

function drawGrid() {
  rect(155, 65, 10, 290, 20);
  rect(255, 65, 10, 290, 20);
  rect(65, 155, 290, 10, 20);
  rect(65, 255, 290, 10, 20);
}

function mousePressed() {

  for (let coords in posArray) {
    let x1 = posArray[coords][0][0];
    let x2 = posArray[coords][0][1];
    let y1 = posArray[coords][1][0];
    let y2 = posArray[coords][1][1];

    if (x1 <= mouseX && mouseX <= x2 && y1 <= mouseY && mouseY <= y2) {
      let midX = (x1 + x2) / 2;
      let midY = (y1 + y2) / 2;

      let type = onBoard.length % 2;

      onBoard.push(new Ox(type, midX, midY));
      board[coords[0]][coords[1]] = type;

      delete posArray[coords[0] + coords[1]];

      checkIfWon();

    }
  }
}

function checkIfWon() {

  let sum;

  for (i = 0; i < 3; i++) {
    sum = board[i][0] + board[i][1] + board[i][2];
    if (sum == 0) {
      won = "x";
    } else if (sum == 3) {
      won = "o";
    }
  }

  for (i = 0; i < 3; i++) {
    sum = board[0][i] + board[1][i] + board[2][i];
    if (sum == 0) {
      won = "x";
    } else if (sum == 3) {
      won = "o";
    }
  }

  sum = board[0][0] + board[1][1] + board[2][2];
  if (sum == 0) {
    won = "x";
  } else if (sum == 3) {
    won = "o";
  }


  sum = board[0][2] + board[1][1] + board[2][0];
  if (sum == 0) {
    won = "x";
  } else if (sum == 3) {
    won = "o";
  }
}