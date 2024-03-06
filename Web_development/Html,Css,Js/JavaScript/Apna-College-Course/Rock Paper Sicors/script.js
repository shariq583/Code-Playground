let gameBtns = document.querySelectorAll(".choice");

gameBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tagId = btn.getAttribute("id");
  });
});
