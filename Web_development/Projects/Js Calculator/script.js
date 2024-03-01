let btn = document.querySelector("#perform");
let resetBtn = document.querySelector("#reset");
btn.addEventListener("click", () => {
  let num1 = document.querySelector("#One").value;
  let num2 = document.querySelector("#Two").value;
  let opt = document.querySelector("select").value;
  let prevAns = document.querySelector(".Answer").innerText;
  let ans;
  if (opt == "Plus") {
    ans = num1 + num2;
  } else if (opt == "Minus") {
    ans = num1 - num2;
  } else if (opt == "Multiply") {
    ans = num1 * num2;
  } else if (opt == "Divide") {
    ans = num1 / num2;
  } else {
    ans = "Wrong Input!";
  }
  //   Posting the answer
  prevAns.innerText = prevAns + ans;
});
