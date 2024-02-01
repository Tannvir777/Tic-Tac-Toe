let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let msgWin = document.querySelector(".msg-win");
let msgCont = document.querySelector(".msg-container");
let newGameBtn = document.querySelector(".newGameBtn");
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disableBtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBtn = () => {
  for (let box of boxes) {
    box.enabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  turn = true;
  msgCont.classList.add("hide");
  enableBtn();
};

const winnerMsg = (winner) => {
  msgWin.innerHTML = `Congratulations You Won ${winner}`;
  msgCont.classList.remove("hide");
  disableBtn();
};

let turn = true;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        winnerMsg(pos1);
      }
      }
    }
  }

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
