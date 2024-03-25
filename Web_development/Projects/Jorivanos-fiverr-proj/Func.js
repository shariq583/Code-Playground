let logo = document.querySelector("#logoImg");
let searchIco = document.querySelector("#searchIcon");
let searchVal = document.querySelector("#searchField").value;
var plusBtn = document.querySelector("#plusBtn1");
logo.addEventListener("click", () => {
  window.location.href = "landingPage.html";
});
searchIco.addEventListener("click", () => {
  console.log("searchVal");
  window.location.href = "resultPage.html";
});

plusBtn.addEventListener("click", () => {
  window.location.href = "resultPage2.html";
});
