let menuBtn = document.querySelector("#menuBtn");
let closeBtn = document.querySelector("#closeBtn");
let list = document.querySelector("#hamLinkContain");
let halfContainer = document.querySelector(".halfContainer");
menuBtn.addEventListener("click", () => {
  closeBtn.classList.remove("Hide");
  menuBtn.classList.add("Hide");
  list.classList.remove("Hide");
  list.classList.add("hamLinkContainer");
  halfContainer.classList.remove("halfContainer");
  halfContainer.classList.add("halfContainerTransition");
});

closeBtn.addEventListener("click", () => {
  menuBtn.classList.remove("Hide");
  closeBtn.classList.add("Hide");
  list.classList.remove("hamLinkContainer");
  list.classList.add("Hide");
  halfContainer.classList.remove("halfContainerTransition");
  halfContainer.classList.add("halfContainer");
});
