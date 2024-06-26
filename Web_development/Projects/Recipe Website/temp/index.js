let menuBtn = document.querySelector("#menuBtn");
let closeBtn = document.querySelector("#closeBtn");

menuBtn.addEventListener("click", () => {
  closeBtn.classList.remove("Hide");
  menuBtn.classList.add("Hide");
});

closeBtn.addEventListener("click", () => {
  menuBtn.classList.remove("Hide");
  closeBtn.classList.add("Hide");
});
