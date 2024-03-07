let gameBtns = document.querySelectorAll(".choice");
let msgBox = document.querySelector("#msgTxt");
const mainGame = (tagId) => {
  let compChoice = numGen();
  if (tagId == compChoice) {
    msgBox.innerText = "That's A Draw";
  } else {
    let userWin = true;
    if (tagId == "rock") {
      // paper , scissors
      userWin = compChoice == "scissors" ? true : false;
    } else if (tagId == "paper") {
      // paper , scissors
      userWin = compChoice == "rock" ? true : false;
    } else {
      userWin = compChoice == "paper" ? true : false;
    }
    showWin(userWin);
  }
};
const showWin = (userWin) => {
  if (userWin == true) {
    msgBox.innerText = "You Won ";
  } else {
    msgBox.innerText = "Conp Won!";
  }
};
const numGen = () => {
  let num = Math.floor(Math.random() * 3);
  let tagChoice = ["rock", "paper", "scissors"];
  return tagChoice[num];
};
gameBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tagId = btn.getAttribute("id");
    mainGame(tagId);
  });
});
