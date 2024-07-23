let winnerbox = document.querySelector(".Winner-box");
let winnerresult = document.querySelector("#winner");
let reset = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let boxes = document.querySelectorAll(".box");

winnerbox.classList.add("hide");
let turnO = true;

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (turnO) {
      e.target.innerText = "O";
      turnO = false;
      e.target.classList.add("disabled");
    } else {
      e.target.innerText = "X";
      turnO = true;
      e.target.classList.add("disabled");
    }
    checkWinner();
  });
});

let showwinner = (winner) => {
  winnerbox.classList.remove("hide");
  winnerresult.innerText = winner;
};

let checkWinner = () => {
  let boxText = document.querySelectorAll(".box");
  let winArr = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  winArr.forEach((ele) => {
    if (
      boxText[ele[0]].innerText === boxText[ele[1]].innerText &&
      boxText[ele[1]].innerText === boxText[ele[2]].innerText &&
      boxText[ele[0]].innerText !== ""
    ) {
      result = boxText[ele[0]].innerText;
      // winnerbox.classList.remove("hide");
      // winnerbox.innerText = boxText[ele[0]].innerText + " has won";
      console.log("Winner is:", result);
      showwinner(result);
    }
  });
};

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.classList.remove("disabled");
  });
  turnO = true;
  winnerbox.classList.add("hide");
});

newbtn.addEventListener("click", () => {
  turnO = true;
  boxes.forEach((box) => {
    box.innerText = "";
    box.classList.remove("disabled");
  });
  turnO = true;
  winnerbox.classList.add("hide");
});
