let addToCart = document.querySelector("#addToCart");
let searchIco = document.querySelector("#searchIcon");
addToCart.addEventListener("click", () => {
  window.location.href = "firstPopup.html";
});
searchIco.addEventListener("click", () => {
  console.log("searchVal");
  window.location.href = "resultPage.html";
});
