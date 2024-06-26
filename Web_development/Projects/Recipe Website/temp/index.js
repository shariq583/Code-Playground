let menuBtn = document.querySelector("#menuBtn");
let closeBtn = document.querySelector("#closeBtn");
let list = document.querySelector("#hamLinkContainer");
menuBtn.addEventListener("click", () => {
  closeBtn.classList.remove("Hide");
  menuBtn.classList.add("Hide");
  list.classList;
});

closeBtn.addEventListener("click", () => {
  menuBtn.classList.remove("Hide");
  closeBtn.classList.add("Hide");
});
